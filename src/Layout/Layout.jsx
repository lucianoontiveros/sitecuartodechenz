import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import _Navbar from "../Components/_Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

const Layout = () => {
  const navigation = useNavigation(); // Obtiene la funcionalidad de navegación utilizando useNavigation()

  return (
    <>
      <div className="bg-[#0d030e]">
        <_Navbar />
        <div className="layout_contenedor p-7">
          {/* Renderiza el componente Loading solo si la navegación está en estado 'loading' */}
          {navigation.state === "loading" && <Loading />}
          <Outlet /> {/* Renderiza el contenido de las rutas anidadas */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
