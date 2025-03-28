import "./footer.css";
import Icon_instagram from "./img_icons/Icon_instagram";
import Icon_tiktok from "./img_icons/Icon_tiktok";
import Icon_x from "./img_icons/Icon_x";
import Icon_youtube from "./img_icons/Icon_youtube";

const Footer = () => (
  <footer className="footer_container">
    <div className="footer_logo">STUDY WITH ME</div>
    <div className="footer_social">
      <div className="bar_icon">
        <a
          className="icon_bar_element"
          href="https://www.instagram.com/cuarto_de_chenz/"
          target="_blank"
        >
          <Icon_instagram />
        </a>
        <a
          className="icon_bar_element"
          href="https://www.tiktok.com/@cuarto_de_chenz"
          target="_blank"
        >
          <Icon_tiktok />
        </a>
        <a
          className="icon_bar_element"
          href="https://x.com/cuartodechenz"
          target="_blank"
        >
          <Icon_x />
        </a>
        <a
          className="icon_bar_element"
          href="https://www.youtube.com/@cuarto_de_chenz"
          target="_blank"
        >
          <Icon_youtube />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
