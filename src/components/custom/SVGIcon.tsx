/**
 * SvgIcon — wrapper para íconos SVG custom (desde /public/icons/)
 *
 * Uso en iconMap:
 *   import { createSvgIcon } from "@/components/SvgIcon"
 *   const iconMap = {
 *     typescript: FileCode,               // Lucide (sin cambios)
 *     figma: createSvgIcon("figma"),      // SVG custom desde /public/icons/figma.svg
 *   }
 *
 * Convención de archivos:
 *   /public/icons/<iconName>.svg
 *
 * Los SVGs que exportes desde Illustrator deben:
 *   - NO tener fill/stroke hardcodeado (o usar fill="currentColor")
 *   - Tener viewBox definido
 *   - Ser archivos limpios (sin capas de Illustrator, sin XML declaration)
 */

import { useState, useEffect, type JSX } from "react"
import { cn } from "@/lib/utils"

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface SvgIconProps {
    className?: string
}

// ─── Componente base ──────────────────────────────────────────────────────────

function SvgIcon({ src, className }: SvgIconProps & { src: string }) {
    const [svgContent, setSvgContent] = useState<string | null>(null)

    useEffect(() => {
        let cancelled = false

        fetch(src)
            .then((res) => {
                if (!res.ok) throw new Error(`No se encontró el ícono: ${src}`)
                return res.text()
            })
            .then((text) => {
                if (!cancelled) setSvgContent(text)
            })
            .catch(() => {
                if (!cancelled) setSvgContent(null)
            })

        return () => {
            cancelled = true
        }
    }, [src])

    if (!svgContent) {
        // Placeholder con las mismas dimensiones mientras carga
        return (
            <span
                className={cn("block opacity-20 bg-current rounded-sm", className)}
                style={{ width: "1em", height: "1em" }}
                aria-hidden="true"
            />
        )
    }

    // Inyectamos el SVG como HTML para que herede `currentColor`
    // y aplicamos las clases de Tailwind directamente al wrapper
    return (
        <span
            className={cn("inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full", className)}
            style={{ width: "1em", height: "1em" }}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    )
}

// ─── Factory ──────────────────────────────────────────────────────────────────
// Crea un componente con la misma firma que los íconos de Lucide:
//   ({ className?: string }) => JSX.Element

/**
 * createSvgIcon("figma")
 *   → busca /public/icons/figma.svg
 *   → devuelve un componente compatible con iconMap
 */
export function createSvgIcon(iconName: string) {
    const src = `/icons/${iconName}.svg`

    // Componente con displayName para debugging
    const Icon = ({ className }: SvgIconProps) => (
        <SvgIcon src={src} className={className} />
    )
    Icon.displayName = `SvgIcon(${iconName})`

    return Icon
}

// ─── Helper opcional: registro centralizado ───────────────────────────────────
// Si prefieres no importar createSvgIcon en cada archivo, puedes definir
// todos tus íconos custom aquí y exportarlos como objeto.

export const CustomIcons = {
    // Agrega aquí tus íconos según los vayas creando en Illustrator:
    // figma:      createSvgIcon("figma"),
    // blender:    createSvgIcon("blender"),
    // illustrator: createSvgIcon("illustrator"),
} satisfies Record<string, (props: SvgIconProps) => JSX.Element>