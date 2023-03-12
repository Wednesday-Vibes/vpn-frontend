import Landing from './Landing/Landing';
import Product from './Product/Product';
import Login from './Login/Login';
import Logout from './Login/Logout';
import Signup from './Login/Signup';
import PageNotFound from './shared/PageNotFound';

import { useAppSelector } from '../redux/hooks';
import { createBrowserRouter, RouterProvider, Route, Outlet, createRoutesFromElements } from 'react-router-dom';
import { useEffect } from 'react';

const Root = () => (
    <div className="App">
        <Outlet />
    </div>
);

const routerOptions = {
    basename: '/vpn-frontend'
};

export default function App() {
    //! really only necessary for Github Pages
    useEffect(() => {
        if (!window.location.pathname.includes('vpn-frontend')) {
            window.location.assign('/vpn-frontend');
        }
    }, []);

    const authToken = useAppSelector((state) => state.global.auth.token);

    const landingPageRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<PageNotFound />}>
                <Route index element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        ),
        routerOptions
    );

    const productRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<PageNotFound />}>
                <Route index element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        ),
        routerOptions
    );

    return <RouterProvider router={authToken ? productRouter : landingPageRouter} />;
}
