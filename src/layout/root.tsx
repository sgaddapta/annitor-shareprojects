import Footer from '@/components/sections/footer'
import HeaderOne from '@/components/headers/headerOne'
import { Outlet, ScrollRestoration, Navigate, useLocation } from 'react-router-dom'
import useAnimation from '@/hooks/useAnimation';

const RootLayout = () => {
    useAnimation()
    const location = useLocation()
    const isAuth = typeof window !== 'undefined' && localStorage.getItem('isAuth') === 'true'

    if (!isAuth && location.pathname !== '/login') {
        return <Navigate to="/login" replace />
    }

    return (
        <>
            <HeaderOne />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayout