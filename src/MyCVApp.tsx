import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";
import { AppContextProvider } from "./context/AppContext";

export const MyCVApp = () => {
    return (
        <AppContextProvider>
            <RouterProvider router={appRouter} />

        </AppContextProvider>
    )
};