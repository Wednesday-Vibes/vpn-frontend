import Landing from './Landing/Landing';
import Product from './Product/Product';
import Login from './Login/Login';
import Logout from './Login/Logout';
import Signup from './Login/Signup';
import PageNotFound from './shared/PageNotFound';

import { useAppSelector } from '../redux/hooks';
import { createBrowserRouter, RouterProvider, Route, Outlet, createRoutesFromElements } from 'react-router-dom';

const Root = () => (
    <div className="App">
        <Outlet />
    </div>
);

export default function App() {
    const authToken = useAppSelector((state) => state.global.auth.token);

    const landingPageRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<PageNotFound />}>
                <Route index element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        )
    );

    const productRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />} errorElement={<PageNotFound />}>
                <Route index element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        )
    );

    return <RouterProvider router={authToken ? productRouter : landingPageRouter} />;
}
