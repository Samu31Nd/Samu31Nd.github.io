import { Footer } from "@/components/custom/Footer";
import { Header } from "@/components/custom/Header";
import { Outlet } from "react-router";


export const CVLayout = () => {
    return (
        <div className="relative min-h-screen overflow-hidden scanlines z-10" >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};