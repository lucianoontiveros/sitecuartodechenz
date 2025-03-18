import React from "react";
import { useRouteError, Link } from "react-router-dom";
import _Navbar from "../Components/_Navbar";
import Footer from "../Components/Footer";
import iconSite from "../assets/IconSite.png";
import _bar_media from "../Components/_bar_media";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-gray">
      <_Navbar />
      <div className="container flex flex-col justify-center items-center h-[87vh]">
        <div role="status">
          <div className="flex justify-center">
            <img
              src={iconSite}
              alt="Icon site"
              width="500px"
            />
          </div>
          <div className="my-5">
            <_bar_media />
          </div>
          <div>
            <h1 class="card mx-5 text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue text-3xl mt-2 mb-3 text-center">
              No Found
            </h1>
            <p className="p-2 text-center text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue">
              Favor de revisar la dirección a la cual quieres remitirte
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
