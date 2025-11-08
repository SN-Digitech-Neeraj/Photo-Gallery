import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { adminRoute, routes } from './Routes';
import Hero from '../pages/Hero';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Login from '../pages/Login';
import AdminLayout from '../layouts/AdminLayout';
import PrivateRoute from '../utils/PrivateRoute';
import Collection from '../pages/Collection';

function AppRoute() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <WebsiteLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <>
                            <Hero />
                            <Collection />
                        </>
                    ),
                },
                ...routes
            ],
        },

        // Login with No - Layout
        {
            path: '/login',
            element: <Login />
        },

        // Admin Panel
        {
            path: '/admin',
            element: 
            <PrivateRoute>
                <AdminLayout />
            </PrivateRoute>,

            children: [
               ...adminRoute
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default AppRoute;
