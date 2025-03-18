import React from "react";

import img_6 from "../assets/banner/Banner_cuartodechenz.png";
import img_7 from "../assets/banner/Banner_cuartodechenz_1.png";
import img_8 from "../assets/banner/Banner_cuartodechenz_2.png";
import img_9 from "../assets/banner/Banner_cuartodechenz_3.png";

import { Carousel } from "flowbite-react";
const _Carousel = () => {
  return (
    <Carousel className="red card bg-black bg-opacity-50">
      <img
        loading="lazy"
        className=" object-bottom z-0  sm:h-auto w-full img_corousel relative overflow-hidden"
        src={img_6}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="  object-bottom z-0  sm:h-auto w-full img_corousel relative overflow-hidden"
        src={img_7}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="  object-bottom z-0  sm:h-auto w-full img_corousel relative overflow-hidden"
        src={img_8}
        alt="..."
        style={{ position: "fixed" }}
      />
      <img
        loading="lazy"
        className="  object-bottom z-0  sm:h-auto w-full img_corousel relative overflow-hidden"
        src={img_9}
        alt="..."
        style={{ position: "fixed" }}
      />
    </Carousel>
  );
};

export default _Carousel;
