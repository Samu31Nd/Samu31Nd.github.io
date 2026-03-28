import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { AppContext } from "@/context/AppContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {

    const { blackTheme, toggleTheme } = useContext(AppContext);

    const Icon = blackTheme ? Sun : Moon;
    const blackThemeText = blackTheme ? 'to light' : 'to dark';

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "group relative flex size-8 items-center justify-center rounded",
                "text-muted-foreground transition-all duration-200 hover:text-primary"
            )}
            aria-label={`Switch ${blackThemeText} theme`}
        >
            <Icon className="size-4" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {blackThemeText}
            </span>
        </button>
    );
}