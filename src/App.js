import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Shimmer from "./components/Shimmer";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const Applayout = () => {
    return (
            <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /> </Suspense>
            },
        ],
        errorElement: <Error />,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);