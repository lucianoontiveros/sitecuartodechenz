import React from "react";
import _card_gallery from "../Components/_card_gallery";
import galleryImages from "../Data/galleryImages";

const Comandos = () => {
  return (
    <div className="container flex justify-center flex-wrap sm:grid grid-cols-2 md:grid-cols-4 gap-4 px-6 my-3">
      {galleryImages.map((item, index) => (
        <_card_gallery
          key={index}
          name={item.nombre}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Comandos;
