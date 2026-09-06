import { Card } from "flowbite-react";
import Button_Copy from "../buttons/Button_copy";

// Antes recibía "name" e "image" sueltos; ahora recibe directamente
// una entrada de soundsData.js, así que el audio viaja junto a la card
// y no depende de que dos archivos separados tengan el mismo nombre.
const Card_Gallery = ({ id, image, audio }) => {
  return (
    <Card className="gallery_items max-w-sm relative">
      <img src={image} alt={id} loading="lazy" />

      <div className="gallery-button">
        <Button_Copy text={`!${id}`} audioSrc={audio} />
      </div>
    </Card>
  );
};

export default Card_Gallery;
