// const roles = ["building interfaces", "exploring systems", "breaking barriers", "forging ideas", "crafting code"];

import { LeftColumn } from "@/CV/components/LeftColumn"
import { RightColumn } from "@/CV/components/RightColumn"
import { TechStack } from "@/CV/components/TechStack"

export const HomePage = () => {


    return (
        <div className="relative z-10" >
            {/* PRINCIPAL INFO */}
            <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
                        {/* Left column - Text */}
                        <LeftColumn />

                        {/* Right column - ASCII Art / Visual */}
                        <RightColumn />
                    </div>
                </div>

                {/* SCROLL TEXT */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
                    <span className="font-mono text-xs text-muted-foreground">scroll</span>
                    <div className="w-px h-12 bg-linear-to-b from-primary/50 to-transparent animate-pulse" />
                </div>
            </section>

            {/* TechStack */}
            <TechStack />

        </div>
    )
}
