import { NotFound } from "@/components/custom/NotFound";
import { HomePage } from "@/CV/pages/home/HomePage";
import { CVLayout } from "@/CV/layouts/CVLayout";
import { createBrowserRouter } from "react-router";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: < CVLayout />,
        children: [
            {
                index: true,
                element: < HomePage />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])