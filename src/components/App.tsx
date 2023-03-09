import Landing from './Landing/Landing';
import Product from './Product/Product';
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, createRoutesFromElements } from 'react-router-dom';

const Root = () => (
    <div className="App">
        <Outlet />
    </div>
);

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Landing />} />
                <Route path="/map" element={<Product />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}
