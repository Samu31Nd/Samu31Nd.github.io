import { useRef, Suspense, type JSX } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// ── Types ──────────────────────────────────────────────────────────────────

interface PS1Model3DProps {
    /** Path to your exported .glb file, e.g. "/models/model.glb" */
    modelPath?: string;
    /** Extra Tailwind classes for the wrapper div */
    className?: string;
}

interface FloatingModelProps {
    modelPath: string;
}

// ── PS1 material patcher ───────────────────────────────────────────────────
//
//  IMPORTANT: We MUTATE the existing material that came from the GLB instead
//  of replacing it. The GLB already baked the correct UV mapping per face —
//  creating a new material would throw that away and re-apply the texture
//  uniformly across the whole mesh.
//
//  We only touch the rendering properties that give the PS1 look:
//    · NearestFilter on the existing texture map
//    · flatShading = true  (hard polygon edges, no smooth normals)
//    · roughness = 1, metalness = 0  (pure diffuse, no specular)
//    · envMapIntensity = 0  (no reflections)
// ──────────────────────────────────────────────────────────────────────────

const patchToPS1 = (material: THREE.Material | THREE.Material[]): void => {
    const mats = Array.isArray(material) ? material : [material];

    mats.forEach((mat) => {
        // Cast to the broadest concrete type so TS lets us touch the props.
        // MeshStandardMaterial is what glTF/GLB imports as by default.
        const m = mat as THREE.MeshStandardMaterial;

        // ── Pixelated texture (PS1 look) ────────────────────────────────
        // Only touch the filter — do NOT reassign map, that would break UVs.
        if (m.map) {
            m.map.minFilter = THREE.NearestFilter;
            m.map.magFilter = THREE.NearestFilter;
            m.map.needsUpdate = true;
        }

        // ── Flat shading: hard polygon faces, no smooth normals ─────────
        m.flatShading = true;

        // ── Pure diffuse: replicate Diffuse BSDF (no specular/metallic) ─
        m.roughness = 1.0;
        m.metalness = 0.0;
        m.envMapIntensity = 0.0;

        m.needsUpdate = true;
    });
};

// ── Floating + rotating model ──────────────────────────────────────────────

const FloatingModel = ({ modelPath }: FloatingModelProps): JSX.Element => {
    const groupRef = useRef<THREE.Group>(null);

    // useGLTF caches the result — the scene already contains materials
    // with the correct UV mapping that Blender baked into the GLB.
    const { scene } = useGLTF(modelPath);

    // Center and scale the model to fit nicely in the canvas
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 1.8 / maxDim;

    // Patch materials in-place — UVs are untouched
    scene.traverse((child: THREE.Object3D) => {
        if (!(child as THREE.Mesh).isMesh) return;

        const mesh = child as THREE.Mesh;
        patchToPS1(mesh.material);

        mesh.castShadow = false;
        mesh.receiveShadow = false;
    });

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        const t = clock.getElapsedTime();

        // Vertical float — small amplitude so it stays inside the container
        groupRef.current.position.y = Math.sin(t * 0.9) * 0.12;

        // Slow auto-rotation on Y axis
        groupRef.current.rotation.y += 0.005;

        // Subtle pitch tilt for a suspended-in-air feeling
        groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.04;
    });

    return (
        <group
            ref={groupRef}
            scale={scale}
            position={[
                -center.x * scale,
                -center.y * scale,
                -center.z * scale,
            ]}
        >
            <primitive object={scene} />
        </group>
    );
};

// ── Wireframe cube shown while the GLB loads ───────────────────────────────

const LoadingFallback = (): JSX.Element => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime();
        meshRef.current.rotation.y = t * 0.8;
        meshRef.current.position.y = Math.sin(t) * 0.1;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial color="#8899ff" wireframe />
        </mesh>
    );
};

// ── Main exported component ────────────────────────────────────────────────

/**
 * PS1Model3D — Floating low-poly 3D model with PS1 aesthetic.
 *
 * Preserves the per-face UV mapping baked in Blender by mutating
 * the GLB's existing materials instead of replacing them.
 *
 * - Transparent background
 * - Mouse drag rotates; zoom and pan disabled
 * - NearestFilter + flatShading → PS1 pixel aesthetic
 */
export const PS1Model3D = ({
    modelPath = "/models/model.glb",
    className = "",
}: PS1Model3DProps): JSX.Element => {
    return (
        <div
            className={`w-full h-full ${className}`}
            style={{ background: "transparent", cursor: "grab" }}
        >
            <Canvas
                gl={{
                    antialias: false, // PS1 pixel look — no smoothing
                    alpha: true,  // Transparent background
                    preserveDrawingBuffer: false,
                }}
                dpr={[0.5, 0.75]}                // Low DPR for pixelated aesthetic
                camera={{ position: [0, 1.5, 4], fov: 35, near: 0.1, far: 100 }}
                style={{ background: "transparent" }}
            >
                {/* Lighting — ambient only keeps it flat like Diffuse BSDF */}
                <ambientLight intensity={1.2} />
                <directionalLight position={[2, 4, 3]} intensity={0.4} />

                {/* Model inside Suspense so the page doesn't block while loading */}
                <Suspense fallback={<LoadingFallback />}>
                    <FloatingModel modelPath={modelPath} />
                </Suspense>

                {/* Rotate-only controls — zoom and pan disabled */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableDamping
                    dampingFactor={0.08}
                    rotateSpeed={0.6}
                    minPolarAngle={Math.PI * 0.25}
                    maxPolarAngle={Math.PI * 0.75}
                />
            </Canvas>
        </div>
    );
};

export default PS1Model3D;