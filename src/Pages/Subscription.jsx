import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import styles from './Subscription.module.css';
import './subscription.css';
import Icon_instagram from "../Components/img_icons/Icon_instagram.jsx";
import Icon_tiktok from "../Components/img_icons/Icon_tiktok.jsx";
import Icon_x from "../Components/img_icons/Icon_x.jsx";
import Icon_youtube from "../Components/img_icons/Icon_youtube.jsx";

export default function Subscription() {
  const [image, setImage] = useState('/menester_de_greta.png');
  const [textColor, setTextColor] = useState('aqua');
  const [copied, setCopied] = useState(false);
  const [imageCopied, setImageCopied] = useState(false);
  const fileInputRef = useRef(null);
  const cardRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (e) => {
    setTextColor(e.target.value);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyCardAsImage = async () => {
    if (!cardRef.current) return;
    
    try {
      const dataUrl = await toPng(cardRef.current, {
        backgroundColor: '#000',
        pixelRatio: 2 // For better quality on high-DPI screens
      });
      
      // Create a temporary link to download the image
      const link = document.createElement('a');
      link.download = 'mi-tarjeta.png';
      link.href = dataUrl;
      link.click();
      
      // Also copy to clipboard
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      
      setImageCopied(true);
      setTimeout(() => setImageCopied(false), 2000);
    } catch (error) {
      console.error('Error al copiar la imagen:', error);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.subscriptionContainer} style={{ marginTop: "6em" }}>
      {/* Encabezado consistente con otras páginas */}
      <section className="title_container_comandos">
        <h1>CUARTO DE CHENZ</h1>
        <div className="bar_icon">
          <a
            className="icon_bar_element"
            href="https://www.instagram.com/luciano.a.ontiveros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_instagram />
          </a>
          <a
            className="icon_bar_element"
            href="https://www.tiktok.com/@cuartodechenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_tiktok />
          </a>
          <a
            className="icon_bar_element"
            href="https://x.com/AgustnOntivero6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_x />
          </a>
          <a
            className="icon_bar_element"
            href="https://www.youtube.com/@cuartodechenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon_youtube />
          </a>
        </div>
      </section>

      {/* Título de la página */}
      <h1 style={{ color: textColor, fontSize: "2rem", textAlign: "center" }}>SUSCRIPCIÓN Y FONDO DE TAREAS</h1>
      
      <section style={{ marginTop: "2rem", color: textColor }}>

  <h2 style={{ textAlign: "center", color: textColor, fontSize: "2rem" }}>
    Beneficios de suscribirse al canal
  </h2>

  <p style={{ marginTop: "1rem", color: textColor }}>
    Suscribirte mejora tu experiencia dentro del canal y además apoyás de forma directa el contenido.
  </p>

  <ul style={{ paddingLeft: "1rem", marginTop: "1rem", color: textColor }}>
    <li>
      <strong>1) Ver el stream sin anuncios:</strong> desaparecen todos los ads pre-roll y mid-roll.
    </li>
    <li style={{ marginTop: "0.5rem" }}>
      <strong>2) Emotes exclusivos del canal:</strong> podés usarlos en cualquier chat de Twitch
      y mientras más suscriptores haya, más slots se desbloquean.
    </li>
    <li style={{ marginTop: "0.5rem" }}>
      <strong>3) Insignia de sub:</strong> mostrás tu antigüedad y pertenencia dentro de la comunidad.
    </li>
    <li style={{ marginTop: "0.5rem" }}>
      <strong>4) Soporte directo al creador:</strong> mucha gente se suscribe simplemente para apoyar el
      trabajo, la constancia y el contenido diario.
    </li>
  </ul>

  <h2 style={{ marginTop: "2rem", textAlign: "center", color: textColor, fontSize: "2rem" }}>
    ¿Qué es Twitch Prime (Prime Gaming)?
  </h2>

  <p style={{ marginTop: "1rem", color: textColor }}>
    Prime Gaming es un beneficio incluido con Amazon Prime que te permite suscribirte
    a un canal de Twitch <strong>una vez por mes sin pagar nada extra</strong>.
    Es igual a una suscripción de pago: apoyás al streamer y obtenés todos los beneficios del canal.
  </p>

  <h3 style={{ marginTop: "1.5rem", color: textColor }}>
    ¿Cómo suscribirte con Prime Gaming?
  </h3>

  <ul style={{ paddingLeft: "1rem", marginTop: "0.8rem", color: textColor }}>
    <li>1. Entrá a <strong>gaming.amazon.com</strong> y logueate.</li>
    <li>2. Vinculá tu cuenta de Amazon con tu cuenta de Twitch.</li>
    <li>3. Buscá el canal <strong>CuartoDeChenz</strong>.</li>
    <li>4. Tocá “Suscribirse”.</li>
    <li>5. Seleccioná “Suscribirte con Prime”.</li>
  </ul>

  <p style={{ marginTop: "1rem", color: textColor }}>
    Cuando tu suscripción esté activa, ya podés pedirme tu fondo de tareas personalizado.
  </p>

</section>

      
      
      <div className={styles.customizationPanel}>
        <div className={styles.previewContainer}>
          <h3 style={{ color: textColor }}>ASÍ SE VERÍA TU FONDO DE TAREAS</h3>
          <div 
            ref={cardRef}
            className={`${styles.cardPreview} ${!image ? styles.noImage : ''}`}
            style={{
              color: textColor,
              backgroundImage: image ? `url(${image})` : 'none'
            }}
          >
            {!image && (
              <div className={styles.placeholderImage}>
               menester_de_greta
              </div>
            )}
            <div className={styles.cardContent}>
              <div className={styles.cardInfo} style={{ color: textColor }}>
                 <h2 >Cuarto de chenz</h2>
                <p>🎂 Cumple: 01/01/1990</p>
                <p>📋 Tareas: 5</p>
                <p>📅 Exámenes: 2</p>
                <p> 📓 Estudio: Administración de empresas</p>
                <p> 📷 Instagram: Lachikipepona</p>
              </div>
              <div className={styles.cardList} style={{ color: textColor }}>
                <h2>Tareas pendientes </h2>
                <ul>
                  <li style={{ color: textColor }}> Envíar la imagen vertical a luciano.a.ontiveros@gmail.com </li>
                  <li style={{ color: textColor }}> Indícame tu nombre de usuario</li>
                  <li style={{ color: textColor }}> Recuerda que los fondos personalizados son solo para suscriptores </li>
                  <li style={{ color: textColor }}> El bot analiza automáticamente quién tiene esa categoría </li>
                  <li style={{ color: textColor }}> Podes hacer los cambios y las correcciones que gustes </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.controls}>
          <div className={styles.colorPicker}>
            
            <section style={{ color: textColor }}>
              <h3 style={{ color: textColor, fontSize: "2rem", textAlign: "center", marginBottom: "1.5em" }} id="seleccion-color-imagen">Selección de color e imagen</h3>
                <p style={{ color: textColor}}>
                  En esta sección puedes <strong>cambiar la imagen</strong> y <strong>elegir el color de la fuente</strong> para visualizar cómo se verá tu fondo de tareas personalizado.
                </p>
                <p style={{ color: textColor}}>
                  Si deseas solicitar tu fondo, por favor envía un correo a  
                  <a href="mailto:luciano.a.ontiveros@gmail.com?subject=Fondo%20de%20tareas"> luciano.a.ontiveros@gmail.com</a>
                  con el <strong>asunto</strong> “Fondo de tareas”. En el cuerpo del mensaje incluye:
                </p>
                <ul style={{ color: textColor}}>
                  <li style={{ color: textColor}}>Tu nombre de usuario de Twitch, escrito exactamente como aparece en tu perfil.</li>
                  <li style={{ color: textColor}}>La imagen que subiste al editor (la versión <strong>vacía</strong>), <em>no</em> el ejemplo generado con el botón “Copiar imagen”.</li>
                </ul>
                <p style={{ color: textColor}}>
                  Este proceso está disponible exclusivamente para <strong>suscriptores</strong>. El bot verificará automáticamente si tu cuenta tiene esa categoría.
                  Puedes solicitar cambios y correcciones cuando lo necesites.
                </p>
            </section>
            <label></label>
            <div className={styles.colorInputContainer}>
              <input 
                type="color" 
                value={textColor} 
                onChange={handleColorChange}
                className={styles.colorInput}
              />
              <span className={styles.colorValue}>{textColor.toUpperCase()}</span>
              <div className={styles.buttonContainer}>
                <button 
                  onClick={copyToClipboard} 
                  className={`${styles.actionButton} ${styles.copyColorButton}`}
                  title="Copiar código de color"
                > 
                  {copied ? '¡Copiado!' : 'COPIAR COLOR'}
                </button>
                <button
                  onClick={copyCardAsImage}
                  className={`${styles.actionButton} ${styles.copyImageButton}`}
                  title="Copiar imagen de la tarjeta"
                  disabled={!image}
                > 
                  {imageCopied ? '¡Imagen Copiada!' : 'COPIAR IMAGEN'}
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.uploadSection}>
            <button 
              onClick={triggerFileInput}
              className={styles.uploadButton}
            >
              {image ? 'Cambiar imagen' : 'Subir imagen'}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
