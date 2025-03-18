import iconX from "../assets/iconX.png";
import iconInsta from "../assets/iconInsta.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconTwitch from "../assets/iconTwitch.png";
import iconThreads from "../assets/iconThreads.png";
import iconDiscord from "../assets/iconDiscord.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 h-[10vh] text-white rounded">
      <div className="footer_elements items-center text-center">
        <div className="footer_element_1">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Un espacio diseñado para acompañarnos y avanzar juntos hacia
            nuestros objetivos
          </span>
        </div>
        <div className="footer_element_2 flex mt-4 justify-around sm:justify-center sm:mt-0">
          <a
            href="https://twitter.com/AgustnOntivero6"
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img
              loading="lazy"
              className="max-w-[15px]"
              src={iconX}
              alt="x"
            />
          </a>
          <a
            href="https://www.instagram.com/luciano.a.ontiveros/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <img
              loading="lazy"
              className="max-w-[15px]"
              src={iconInsta}
              alt="Instagram"
            />
          </a>
          <a
            href="https://twitch.tv/cuartodechenz"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <img
              loading="lazy"
              className="max-w-[15px]"
              src={iconTwitch}
              alt="Twitch"
            />
          </a>
          <a
            href="https://github.com/lucianoontiveros"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <img
              loading="lazy"
              className="max-w-[15px]"
              src={iconGitHub}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.threads.net/@luciano.a.ontiveros?hl=es-la"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <img
              loading="lazy"
              className="max-w-[15px]"
              src={iconThreads}
              alt="Threads"
            />
          </a>
          <a
            href="https://discord.gg/UdU3wvpWu7"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <img
              loading="lazy"
              className="max-w-[15px]"
              src={iconDiscord}
              alt="Discord"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
