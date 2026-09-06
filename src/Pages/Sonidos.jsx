import Card_Gallery from '../Components/card/Card_Gallery'
import soundsData from '../Data/soundsData'
import ScrollAnimation from '../utils/ScrollAnimation'
import './sonidos.css'

const Sonidos = () => {
  // Calculate delay based on index for staggered animations
  const getDelay = index => {
    return (index % 5) * 100 // Stagger delay by 100ms for each item in a row
  }

  return (
    <div className="sonidos-container">
      <ScrollAnimation effect="fade-up" delay={100}>
        <h1 className="page-title">Galería de Sonidos</h1>
        <p className="page-subtitle">
          Explora nuestra colección de sonidos ambientales
        </p>
      </ScrollAnimation>

      <div className="gallery-grid">
        {soundsData.map((item, index) => (
          <ScrollAnimation
            key={item.id}
            effect="fade-up"
            delay={150 + getDelay(index)}
          >
            <Card_Gallery id={item.id} image={item.image} audio={item.audio} />
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation effect="fade-up" delay={300}>
        <div className="sonidos-cta">
          <h2>¿No encuentras lo que buscas?</h2>
          <p>
            Sugiere nuevos sonidos y podríamos agregarlos a la colección a
            través de los puntos del canal
          </p>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Sonidos