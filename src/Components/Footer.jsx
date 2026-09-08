import './footer.css'
import Icon_instagram from './img_icons/Icon_instagram'
import Icon_tiktok from './img_icons/Icon_tiktok'
import Icon_x from './img_icons/Icon_x'
import Icon_youtube from './img_icons/Icon_youtube'
import IconArrow from './img/IconArrow'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer_container">
      <div className="footer_logo" onClick={scrollToTop}>
        <span>STUDY WITH ME</span>
        <IconArrow />
      </div>

      <div className="footer_social">
        <div className="bar_icon">
          <a
            className="icon_bar_element"
            href="https://www.instagram.com/luciano.a.ontiveros/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Icon_instagram />
          </a>

          <a
            className="icon_bar_element"
            href="https://www.tiktok.com/@cuartodechenz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <Icon_tiktok />
          </a>

          <a
            className="icon_bar_element"
            href="https://x.com/AgustnOntivero6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <Icon_x />
          </a>

          <a
            className="icon_bar_element"
            href="https://www.youtube.com/@cuartodechenz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Icon_youtube />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
