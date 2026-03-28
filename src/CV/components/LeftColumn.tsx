import { homePageData } from "@/lib/homePageData";
import { useEffect, useState } from "react";


export const LeftColumn = () => {

    const [displayText, setDisplayText] = useState("")
    const [currentRole, setCurrentRole] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const { principalData, roles, name } = homePageData;

    useEffect(() => {
        const targetText = roles[currentRole]
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < targetText.length) {
                        setDisplayText(targetText.slice(0, displayText.length + 1))
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000)
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(displayText.slice(0, -1))
                    } else {
                        setIsDeleting(false)
                        setCurrentRole((prev) => (prev + 1) % roles.length)
                    }
                }
            },
            isDeleting ? 50 : 100,
        )
        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentRole, roles])


    return (
        <div className="space-y-8 sm:space-y-10">

            <div className="space-y-3 animate-fade-in-up">
                <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                    About me
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                    {name}
                    <br />
                    <span
                        className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                    >
                        {displayText}
                    </span>
                </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
                {principalData}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
                <a
                    href="#connect"
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                >
                    <span className="relative z-10">Contact me</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    {/* Animated background */}
                    <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
                </a>
                {/* <Link
                    to="/introduction"
                    className="group inline-flex items-center justify-center gap-3 rounded-lg border border-border px-7 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground hover:bg-secondary/50 active:scale-[0.98]"
                >
                    <span>About me</span>
                    <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        →
                    </span>
                </Link> */}
            </div>
        </div>
    )
};