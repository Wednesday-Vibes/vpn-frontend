import Landing from './Landing/Landing';

import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Outlet,
    createRoutesFromElements
} from "react-router-dom";

const Root = () => (
    <>

        <div>
            <Outlet />
        </div>
    </>

);


export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Landing />} />



            </Route>


        )
    );


    return (


        <body>

            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Inter" />

            <RouterProvider router={router} />
        </body>
    );
}

