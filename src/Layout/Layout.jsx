import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import './layaout.css'

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });

        // Refresh AOS when route changes
        AOS.refresh();
    }, [location.pathname]);

    return (
        <div className="layaout_container">
            <Navbar className="div1"/>
            <main className="main-content">
                <Outlet className="div2" />
            </main>
            <Footer className="div3" />
        </div>
    )
}

export default Layout