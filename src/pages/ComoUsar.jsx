import React from "react";
import video from "/video.png";
import HeaderComo from "../components/HeaderComo";

function Comousar() {
  return (
    <main className="bg-fundo bg-repeat bg-[length:100vh] min-h-screen font-openSans font-normal text-sm text-white">
      <HeaderComo />

      <h1 className="text-titulo font-bold text-center text-3xl md:text-4xl pt-[2rem] md:pt-[3rem] font-subtitulo">
        Como usar
      </h1>
      <section className="flex px-inline mt-[1.5rem] md:justify-center">
        <div className="border-solid border-botaoSelecionado border-[0.18rem] mr-inline rounded-[.5rem] md:max-w-[20rem]">
          <h2 className="font-semibold text-sm text-center justify-center py-[.5rem]  px-[.5rem] md:text-lg">
            Coloque a balança em uma superfície sólida e plana{" "}
          </h2>
        </div>
        <div className="border-solid border-botaoSelecionado border-[0.18rem] rounded-[.5rem] md:max-w-[20rem]">
          <h2 className=" font-semibold text-sm text-center justify-center py-[.5rem]  px-[.5rem] md:text-lg">
            Baixe o aplicativo da balança na sua loja de aplicativos
          </h2>
        </div>
      </section>
      <section className="md:flex md:flex-col md:items-center">
        <div className="md:flex md:justify-center border-solid border-botaoSelecionado border-[0.18rem] mt-[1.5rem] mx-[1rem] rounded-[.5rem]  md:max-w-[41.5rem]">
          <h2 className="font-semibold text-sm text-center justify-center py-[.5rem]  px-[.5rem] md:text-lg">
            Após seguir os passsos anteriores, basta conectar a balança no
            aplicativo e começar sua jornada na vida saúdavel, com o auxílio de
            uma excelente ferramenta
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-titulo font-bold text-center text-2xl my-[1.5rem] font-subtitulo">
            Tutorial
          </h1>
          <iframe className=' pb-[3rem] w-[20rem] h-[15rem] md:w-[35rem] md:h-[25rem]' width="560" height="315" src="https://www.youtube.com/embed/vJZYwSgaCeA?si=GUNUrDuVcA3dMSUD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>       
      </section>

<div className="mt-10 md:flex md:flex-col md:items-center">
                <h3 className="flex justify-center text-titulo font-semibold text-center text-2xl my-[1.5rem] font-subtitulo">
                  Nosso jogo
                </h3>
                <p className="md:max-w-[27.5rem]  mt-2 mb-4 text-white flex justify-center items-center">
                  Veja o jogo feito pela equipe NutriScale!
                </p>
              </div>
              <div className="flex justify-center items-center">
              <iframe width="320" height="180" src="https://www.youtube.com/embed/fvBycGBtMSY?si=QCMr7sIOEYoLMcoD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="md:w-[560px] md:h-[315px] mb-4"></iframe>
            </div>
    </main>
  );
}
export default Comousar;

