
import Card_Gallery from "../Components/card/Card_Gallery";
import gallery_Images from "../Data/Galley_Images"
import './sonidos.css'

const Sonidos = () => {
    return (
        <div className="gallery_container">
        {gallery_Images.map((item, index) => (
          <Card_Gallery
            key={index}
            name={item.nombre}
            image={item.image}
          />
        ))}
      </div>
    );
    
}

export default Sonidos