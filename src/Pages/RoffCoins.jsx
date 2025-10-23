import React, { useState } from 'react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import './roffcoins.css';

const RoffCoins = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const coins = [
    {
      id: 1,
      title: 'CLARIDAD',
      description: 'La claridad es el faro que guía nuestras acciones y decisiones. En cada paso que damos, buscamos la transparencia y la comprensión mutua para construir relaciones sólidas y proyectos exitosos.',
      image: 'claridad.png',
      color: '#FFD700' // Gold color for clarity
    },
    {
      id: 2,
      title: 'CONSTANCIA',
      description: 'La constancia es la clave del éxito. Cada día, con dedicación y perseverancia, trabajamos incansablemente para alcanzar nuestras metas y superar los desafíos que se presentan en el camino.',
      image: 'constancia.png',
      color: '#C0C0C0' // Silver color for consistency
    },
    {
      id: 3,
      title: 'ESFUERZO',
      description: 'El esfuerzo es la semilla del logro. Con determinación y pasión, ponemos todo nuestro empeño en cada tarea, sabiendo que es a través del trabajo duro como alcanzamos la excelencia.',
      image: 'esfuerzo.png',
      color: '#CD7F32' // Bronze color for effort
    },
    {
      id: 4,
      title: 'PROPÓSITO',
      description: 'El propósito nos da dirección y significado. Cada acción que emprendemos está alineada con nuestra visión de crear un impacto positivo y duradero en nuestro entorno y en las personas que nos rodean.',
      image: 'proposito.png',
      color: '#B9F2FF' // Light blue for purpose
    }
  ];

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % coins.length);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + coins.length) % coins.length);
  };

  return (
    <div className="roffcoins-container">
      <div className="section-title">
        <h2>CROQUETAS</h2>
      </div>
      <div className="card-stack-container">
        <button className="nav-button prev" onClick={prevCard}>&#10094;</button>
        <div className="card-stack">
          {coins.map((coin, index) => (
            <div 
              key={coin.id} 
              className={`card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="card-content">
                <div 
                  className="coin-bg"
                  style={{
                    backgroundImage: `url(/${coin.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div className="coin-info">
                    <h3>{coin.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={nextCard}>&#10095;</button>
      </div>
      <div className="dots-container">
        {coins.map((_, index) => (
          <span     
            key={index} 
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="roffcoins-container">
        <AnimatedSection>
          <h2 className="roffcoins-title">
            ¡Puntos de Gestión y Croquetas para Brunito!
          </h2>

        <p className="roffcoins-paragraph">
          Si sos usuario del bot de tareas del canal, <span className="roffcoins-highlight">Brunitopet</span>, seguro notaste que al agregar, marcar o gestionar tareas, vas acumulando <span className="roffcoins-highlight">Puntos de Gestión</span>.
        </p>

        <h3 className="roffcoins-heading">
          <span className="roffcoins-heading-emoji">🔹</span>
          ¿Para qué sirven?
        </h3>
        <p className="roffcoins-paragraph">
          Esos puntos te permiten ganar <span className="roffcoins-highlight">croquetas para Brunito</span>. Con <span className="roffcoins-highlight">3000 croquetas</span>, podés canjear un beneficio exclusivo: personalizar tu lista de tareas con uno de los <span className="roffcoins-highlight">cuatro fondos especiales</span> que te presentamos.
        </p>

        <h3 className="roffcoins-heading">
          <span className="roffcoins-heading-emoji">🔹</span>
          ¿Cómo conseguir las croquetas?
        </h3>
        <p className="roffcoins-paragraph">
          Los puntos no se convierten automáticamente. Para transformarlos en croquetas, tenés que escribir el comando <code className="roffcoins-code">!croqueta</code> en el chat.
        </p>

        <div className="roffcoins-warning">
          <h3 className="roffcoins-warning-heading">
            <span className="roffcoins-heading-emoji">⛔</span>
            Ojo:
          </h3>
          <p className="roffcoins-paragraph">
            Solo obtendrás <span className="roffcoins-highlight">1 croqueta</span> por cada uso del comando, así que no lo repitas muchas veces seguidas o Twitch podría silenciarte por spam.
          </p>
        </div>

        <h3 className="roffcoins-heading">
          <span className="roffcoins-heading-emoji">🎁</span>
          Facilidades Futuras:
        </h3>
        <p className="roffcoins-paragraph">
          Eventualmente haremos consignas para facilitar la conversión de varios puntos en croquetas, pero siempre cuidando que el mérito esté en la <span className="roffcoins-highlight">constancia, no en el atajo</span>.
        </p>

        <div className="roffcoins-warning">
          <h3 className="roffcoins-warning-heading">
            <span className="roffcoins-heading-emoji">⚠️</span>
            Advertencia Importante:
          </h3>
          <p className="roffcoins-paragraph">
            Y por favor, no cargues tareas falsas para sumar puntos y croquetas rápido. Los <span className="roffcoins-highlight">mods están atentos y podrían aplicar sanciones</span> si ven abuso del sistema.
          </p>
        </div>

        <h3 className="roffcoins-heading">
          <span className="roffcoins-heading-emoji">📝</span>
          Cómo Canjear tu Fondo:
        </h3>
        <p className="roffcoins-paragraph">
          Cuando llegues a las <span className="roffcoins-highlight">3000 croquetas</span>, podés solicitar tu fondo personalizado enviando un mail a:
        </p>
        <p className="text-center">
          <a href="mailto:luciano.a.ontiveros@gmail.com?subject=Reclamando%20mi%20fondo%20personalizado" className="roffcoins-email-link">
            <span role="img" aria-label="email" className="roffcoins-email-emoji">📧</span>
            luciano.a.ontiveros@gmail.com
          </a>
          <span className="roffcoins-email-note">con el asunto: "Reclamando mi fondo personalizado".</span>
        </p>

          <p className="roffcoins-signature">
            ¡Gracias por sumarte con compromiso y darle amor a Brunito! <span role="img" aria-label="dog and heart">🐶💚</span>
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

// Componente auxiliar para la animación de scroll
const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    once: true
  });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default RoffCoins;