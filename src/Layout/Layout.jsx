
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import './layaout.css'
const Layout = () => {
    return (
        <div className="layaout_container">
            <Navbar className="div1"/>
            <Outlet className="div2" />
            <Footer className="div3" />
        </div>
    )
}

export default Layout