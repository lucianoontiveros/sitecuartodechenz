import React, { useState, useEffect, useMemo } from 'react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import './roffcoins.css';

// Metadata para SEO
const metadata = {
  title: 'Croquetas y Menesteres - Cuarto de Chenz',
  description: 'Descubre nuestras croquetas y menesteres. Gana puntos de gestión, canjea recompensas y personaliza tu experiencia con fondos exclusivos.',
  keywords: 'croquetas, menesteres, puntos de gestión, Brunito, Cuarto de Chenz, Twitch, bot de tareas',
  canonical: 'https://cuartodechenz.com/roffcoins'
};

const RoffCoins = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Optimización: useMemo para evitar re-renders innecesarios
  const croquetas = useMemo(() => [
    {
      id: 1,
      title: 'CLARIDAD',
      image: 'claridad.png',
      color: '#FFD700',
      croquetas: 1500,
      alt: 'Croqueta de Claridad - 1500 croquetas'
    },
    {
      id: 2,
      title: 'CONSTANCIA',
      image: 'constancia.png',
      color: '#C0C0C0',
      croquetas: 1500,
      alt: 'Croqueta de Constancia - 1500 croquetas'
    },
    {
      id: 3,
      title: 'ESFUERZO',
      image: 'esfuerzo.png',
      color: '#CD7F32',
      croquetas: 1500,
      alt: 'Croqueta de Esfuerzo - 1500 croquetas'
    },
    {
      id: 4,
      title: 'PROPÓSITO',
      image: 'proposito.png',
      color: '#B9F2FF',
      croquetas: 1500,
      alt: 'Croqueta de Propósito - 1500 croquetas'
    }
  ], []);

  const menesteres = useMemo(() => [
    {
      id: 1,
      title: '🌿 Menester de Misu',
      subtitle: 'Un camino para quienes avanzan con sencillez, bondad y propósito.',
      image: 'columna_menester_misu.png',
      color: '#f7fb23',
      alt: 'Menester de Misu - 2000 croquetas'
    },
    {
      id: 2,
      title: '🌸 Menester de Cande',
      subtitle: 'Un refugio para quienes resisten, florecen y renacen.',
      image: 'columna_menester_cande.png',
      color: '#aff380',
      alt: 'Menester de Cande - 2000 croquetas'
    },
    {
      id: 3,
      title: '🔷 Menester de Cams',
      subtitle: 'Una senda para quienes combinan claridad, presencia y poder interior.',
      image: 'columna_menester_cams.png',
      color: '#febb5d',
      alt: 'Menester de Cams - 2000 croquetas'
    }
  ], []);

  // SEO: Actualizar metadata del documento
  useEffect(() => {
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', metadata.keywords);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', metadata.canonical);
  }, []);


  return (
    <div className="app-container">
      {/* Galería de Croquetas */}
      <div className="croquetas-gallery">
        <h2 className="section-title">CROQUETAS</h2>
        <div className="croquetas-grid">
          {croquetas.map((croqueta) => (
            <div key={croqueta.id} className="gallery-item">
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img 
                  src={`/${croqueta.image}`}
                  alt={croqueta.alt}
                  className="gallery-image"
                  loading="lazy"
                  width="300"
                  height="300"
                />
                <div 
                  className="croquetas-badge"
                  style={{
                    backgroundColor: `${croqueta.color}20`,
                    color: croqueta.color,
                    border: `1px solid ${croqueta.color}40`
                  }}
                >
                  {croqueta.croquetas} croquetas
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Puntos de Gestión */}
      <div className="roffcoins-container">
        <AnimatedSection>
          <div className="section-content">
            <h2 className="roffcoins-title" style={{ color: 'aqua' }}>
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
          Esos puntos te permiten ganar <span className="roffcoins-highlight">croquetas para Brunito</span>. Con <span className="roffcoins-highlight">1500 croquetas</span>, podés canjear un beneficio exclusivo: personalizar tu lista de tareas con uno de los <span className="roffcoins-highlight">cuatro fondos especiales</span> que te presentamos.
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
          <p className="roffcoins-paragraph" style={{ color: 'red', fontWeight: 'bold' }}>
            RECUERDA QUE TU PROGRESO SE PIERDE LUEGO DE 2 MESES, SINO INTERACTUASTE CON EL BOT DE TAREAS AL MENOS UNA VEZ
          </p>
        </div>

        <h3 className="roffcoins-heading">
          <span className="roffcoins-heading-emoji">📝</span>
          Cómo Canjear tu Fondo:
        </h3>
        <p className="roffcoins-paragraph">
          Cuando llegues a las <span className="roffcoins-highlight">1500 croquetas</span>, podés solicitar tu fondo personalizado enviando un mail a:
        </p>
        <p className="text-center">
          <a 
            href="mailto:luciano.a.ontiveros@gmail.com?subject=Reclamando%20mi%20fondo%20personalizado" 
            className="roffcoins-email-link"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="email" className="roffcoins-email-emoji">📧</span>
            luciano.a.ontiveros@gmail.com
          </a>
          <span className="roffcoins-email-note">con el asunto: "Reclamando mi fondo personalizado".</span>
        </p>

          <p className="roffcoins-signature">
            ¡Gracias por sumarte con compromiso y darle amor a Brunito! <span role="img" aria-label="perro y corazón">🐶💚</span>
          </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Sección de Menesteres */}
      <div className="menesteres-section">
        <AnimatedSection>
          <div className="section-content">
            <div className="section-title">
              <h2>MENESTERES</h2>
            </div>
            <div className="gallery-section">
              <h3 className="gallery-title">Nuestros Menesteres</h3>
              <div className="menesteres-grid">
                {menesteres.map((menester, index) => {
                  const imageName = menester.image;
                  return (
                    <div key={index} className="gallery-item">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img 
                          src={`/${imageName}`} 
                          alt={menester.alt}
                          className="gallery-image" 
                          loading="lazy"
                          width="300"
                          height="300"
                        />
                        <div 
                          className="croquetas-badge"
                          style={{
                            backgroundColor: `${menester.color}20`,
                            color: menester.color,
                            border: `1px solid ${menester.color}40`
                          }}
                        >
                          2000 croquetas
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

           
          </div>
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