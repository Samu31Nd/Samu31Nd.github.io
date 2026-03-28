import PS1Model3D from "@/components/custom/PS1Model3D";

export const RightColumn = () => {
    return (
        <div className="relative animate-scale-in stagger-4">
            <div className="relative rounded-xl border border-border bg-card/60 glass p-5 sm:p-8 hover-lift">
                {/* Terminal header dots */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary" />
                </div>
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-background/50 rounded-md px-3 py-1 font-mono text-xs text-muted-foreground">
                    terminal://ubuntu
                </div>

                <pre className="mt-6 overflow-hidden font-mono text-[10px] leading-relaxed text-primary/80 sm:text-xs md:text-sm h-80">
                    {/* Agregar el componente aqui con fondo transparente al contenedor, flotando de un lado para otro sin salirse de su componente, no sobre salir, pero si poder flotar dentro */}
                    <PS1Model3D modelPath="/models/CorrectedPS1PC.glb" />
                </pre>
            </div>

            {/* Tag information */}
            <div
                className="absolute -bottom-3 sm:-bottom-6 -left-2 sm:-left-6 rounded-lg border border-border bg-card glass px-3 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground animate-float"
                style={{ animationDelay: "1s" }}
            >
                PS1 Blender design
            </div>

            {/* gradient background */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
        </div>
    )
};