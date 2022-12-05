import React, {Suspense} from 'react';
import {Navbar} from '../Navbar/Navbar';
import {Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Navbar/>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
            </Suspense>
        </>
    );
};