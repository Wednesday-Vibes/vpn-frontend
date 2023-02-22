import Landing from './Landing/Landing';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet,
    createRoutesFromElements
} from 'react-router-dom';

const Root = () => (
    <>
        <div className="App">
            <Outlet />
        </div>
    </>
);

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Landing />} />
                {/* <Route path='/map' element={<Map />} /> */}
            </Route>
        )
    );

    return (
        <>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://fonts.googleapis.com/css?family=Inter"
            />

            <RouterProvider router={router} />
        </>
    );
}
