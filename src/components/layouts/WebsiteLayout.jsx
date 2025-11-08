import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const WebsiteLayout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default WebsiteLayout;
