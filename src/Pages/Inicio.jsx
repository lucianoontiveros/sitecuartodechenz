import _Carousel from "../Components/_Carousel";
import _card from "../Components/_card";
import _bar_media from "../Components/_bar_media";

const Inicio = () => {
  return (
    <>
      <header className="animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop bg-gray-900 border-[#D0F8CF] sm:border-[#D6C2F7]">
        <div className="contenedor carousel  container mt-2 card animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop flex justify-center items-center min-w-[200px] h-[310px]">
          <_Carousel />
          <div className="absolute">
            <h1 className="logo px-3 hidden sm:block text-indigo-300 md:text-mintGreen xl:text-skyBlue text-1xl sm:text-2xl md:text-3xl xl:text-6xl font-mono uppercase  hover:animate-pulse-icon">
              CoWork | Study With Me | 60/10
            </h1>

            {/* <h1 className="text-skyBlue mt-20 sm:hidden text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
              4TODECHENZ
            </h1> */}
          </div>
        </div>
        <nav className="my-8">
          <_bar_media />
        </nav>
        <main>
          <article className="container mb-2">
            <_card />
          </article>
        </main>
      </header>
    </>
  );
};

export default Inicio;
