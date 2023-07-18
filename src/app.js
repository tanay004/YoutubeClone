import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./components/util/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";


const AppLayout = ()=>{
    return (
        <Provider store={store}>
        <Header/>
        <RouterProvider router={appRouter}/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        children: [
            {
                path: "/",
                element: <MainContainer/>,
            },
            {
                path:"/watch/:id",
                element: <WatchPage/>
            },

        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);