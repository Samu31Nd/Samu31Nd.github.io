import {
    createContext,
    useState,
    useEffect,
    type PropsWithChildren,
} from "react";

interface AppContextProps {
    blackTheme: boolean;
    toggleTheme: () => void;
    setTheme: (mode: "light" | "dark") => void;
}

export const AppContext = createContext({} as AppContextProps);

const STORAGE_KEY = "ui-theme";

export const AppContextProvider = ({ children }: PropsWithChildren) => {

    const getSystemTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const getInitialTheme = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved === "dark";
        return getSystemTheme();
    };

    const [blackTheme, setBlackTheme] = useState<boolean>(getInitialTheme);

    // Apply theme to html
    const applyTheme = (isDark: boolean) => {
        document.documentElement.classList.toggle("dark", isDark);
    };

    useEffect(() => {
        applyTheme(blackTheme);
    }, [blackTheme]);

    // Listen system changes
    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const listener = () => {
            if (!localStorage.getItem(STORAGE_KEY)) {
                setBlackTheme(media.matches);
            }
        };

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, []);

    const toggleTheme = () => {
        const next = !blackTheme;
        setBlackTheme(next);
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    };

    const setTheme = (mode: "light" | "dark") => {
        const isDark = mode === "dark";
        setBlackTheme(isDark);
        localStorage.setItem(STORAGE_KEY, mode);
    };

    return (
        <AppContext.Provider
            value={{
                blackTheme,
                toggleTheme,
                setTheme,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};