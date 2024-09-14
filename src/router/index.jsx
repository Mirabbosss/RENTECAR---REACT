import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from '@layout';
import { Category, Dashboard, Detail, Home, NotFound, Payment, Cars } from "@pages";

const router = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category",
                element: <Category />,
                children: [{
                    path: "cars",
                    element: <Cars />
                }]
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/payment",
                element: <Payment />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]

export const AppRouter = createBrowserRouter(router);