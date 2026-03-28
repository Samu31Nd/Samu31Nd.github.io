import { useState } from "react"
import { cn } from "@/lib/utils"
import { TechStackList, type TechCategory } from "@/lib/homePageData"

// TODO: Add custom icons
// Icon mapping for tech items
// const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
//     typescript: FileCode,
//     javascript: Code2,
//     python: Terminal,
//     go: Cpu,
//     rust: Cpu,
//     nextjs: Layers,
//     react: Layers,
//     nodejs: Server,
//     fastapi: Zap,
//     docker: Container,
//     git: GitBranch,
//     linux: Terminal,
//     vscode: MonitorSmartphone,
//     figma: Paintbrush,
//     tailwind: Palette,
//     framer: Workflow,
// }

const techStack = TechStackList;

const filters: { label: string; value: TechCategory }[] = [
    { label: "all", value: "all" },
    { label: "languages", value: "languages" },
    { label: "frameworks", value: "frameworks" },
    { label: "tools", value: "tools" },
    { label: "design", value: "design" },
]

export function TechStack() {
    const [activeFilter, setActiveFilter] = useState<TechCategory>("all")
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const filteredStack =
        activeFilter === "all" ? techStack : techStack.filter((item) => item.category === activeFilter)

    return (
        <section id="stack" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-3 animate-fade-in-up">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                            Tech Arsenal
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Stack & Tools</h2>
                        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Languages, frameworks, tools that power my digital laboratory.
                        </p>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={cn(
                                    "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                                    activeFilter === filter.value
                                        ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                                        : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50"
                                )}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {filteredStack.map((item, index) => (
                        <article
                            key={item.id}
                            className={cn(
                                "group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-5 sm:p-6 glass transition-all duration-400 hover:border-primary/40 hover:bg-card/70 active:scale-[0.98] hover-lift animate-fade-in-up"
                            )}
                            style={{ animationDelay: `${(index % 8) * 80 + 150}ms` }}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {/* Background gradient on hover */}
                            <div
                                className={cn(
                                    "absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                                    item.color
                                )}
                            />

                            <div className="relative z-10">
                                {/* TODO: Add custom icons first */}
                                {/* Icon container */}
                                {/* <div className="mb-4 flex items-center justify-center">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 transition-all duration-300 group-hover:border-primary/30 group-hover:scale-110 group-hover:bg-secondary/80">
                                        {(() => {
                                            const IconComponent = iconMap[item.iconName] || Box
                                            return <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground transition-colors group-hover:text-primary" /> // this bitch controls the color
                                        })()}
                                    </div>
                                </div> */}

                                {/* Name */}
                                <h3 className="mb-1.5 text-center text-sm sm:text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                                    {item.name}
                                </h3>

                                {/* Category badge */}
                                <div className="mb-3 flex justify-center">
                                    <span className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/30">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Description - visible on hover */}
                                <p
                                    className={cn(
                                        "text-center text-xs text-muted-foreground leading-relaxed transition-all duration-300",
                                        hoveredItem === item.id
                                            ? "opacity-100 max-h-20"
                                            : "opacity-0 max-h-0 overflow-hidden sm:opacity-60 sm:max-h-20"
                                    )}
                                >
                                    {item.description}
                                </p>

                                {/* Proficiency bar */}
                                <div className="mt-4 space-y-1.5">
                                    <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                                        <span>proficiency</span>
                                        <span
                                            className={cn(
                                                "transition-colors",
                                                item.proficiency >= 85 ? "text-primary" : ""
                                            )}
                                        >
                                            {item.proficiency}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/80 relative">
                                        <div
                                            className={cn(
                                                "h-full rounded-full transition-all duration-700 ease-out",
                                                item.proficiency >= 90
                                                    ? "bg-primary"
                                                    : item.proficiency >= 70
                                                        ? "bg-primary/70"
                                                        : "bg-primary/50"
                                            )}
                                            style={{
                                                width: hoveredItem === item.id || typeof window !== "undefined" ? `${item.proficiency}%` : "0%",
                                                transitionDelay: `${index * 50}ms`,
                                            }}
                                        />
                                        {/* Shimmer effect on hover */}
                                        <div
                                            className={cn(
                                                "absolute inset-0 animate-shimmer transition-opacity duration-300",
                                                hoveredItem === item.id ? "opacity-40" : "opacity-0"
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}
                </div>

                {/* Footer stats */}
                <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-6 sm:gap-10 animate-fade-in-up stagger-4">
                    {/* Number of languages */}
                    <div className="text-center">
                        <p className="font-mono text-2xl sm:text-3xl font-bold text-gradient">
                            {techStack.filter((t) => t.category === "languages").length}
                        </p>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Languages</p>
                    </div>
                    {/* Number of frameworks */}
                    <div className="text-center">
                        <p className="font-mono text-2xl sm:text-3xl font-bold text-gradient">
                            {techStack.filter((t) => t.category === "frameworks").length}
                        </p>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Frameworks</p>
                    </div>
                    {/* Number of tools */}
                    <div className="text-center">
                        <p className="font-mono text-2xl sm:text-3xl font-bold text-gradient">
                            {techStack.filter((t) => t.category === "tools").length}
                        </p>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Tools</p>
                    </div>
                    {/* Number of design tools */}
                    <div className="text-center">
                        <p className="font-mono text-2xl sm:text-3xl font-bold text-gradient">
                            {techStack.filter((t) => t.category === "design").length}
                        </p>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Design</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
