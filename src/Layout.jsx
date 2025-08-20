import { Footer } from "./component/footer/Footer"
import { NavLandingPage } from "./component/navbar/NavLandingPage"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return(
        <>
        <NavLandingPage />
        <Outlet />
        <Footer />
        </>
    )
}