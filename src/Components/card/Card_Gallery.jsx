import { Card } from "flowbite-react";
import Button_Copy from "../buttons/Button_copy";

const _card_gallery = ({ name, image }) => {
  return (
    <Card className="gallery_items max-w-sm relative">
      <img
        src={image}
        alt={name}
      />
      <div>
        <Button_Copy text={`!${name}`} />
      </div>
    </Card>
  );
};

export default _card_gallery;