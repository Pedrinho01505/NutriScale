import React from "react";
import Balanca from "/balança.svg";
import HeaderHome from "../components/HeaderHome";
import ImgFundo from "/Fundo.svg";
import Topico from "/topico.png";

export default function Home() {
  return (
    <div className="bg-fundo bg-repeat bg-[length:100vh] min-h-screen ">
      <HeaderHome />
      <main className="mt-16 md:mt-12 overflow-x-hidden font-openSans">
        <section className="flex justify-center items-center font-barlow md:ml-7 mb-[5.5rem]">
          <div className="flex flex-col  space-y-2 justify-center items-center">
            <h1 className="text-botaoSelecionado text-[2.55rem] md:text-7xl lg:text-7xl font-[800] tracking-ultraWidest justify-center">
              NutriScale
            </h1>
            <h3 className="text-white mt-2 text-[0.9rem] font-poppins md:text-2xl">
              A balança inteligente para controle alimentar
            </h3>
          </div>
        </section>

        <div className='"my-6 p-6 md:mx-auto md:flex  md:items-center md:max-w-[60rem] '>
          <img
            src={Balanca}
            alt="Ilustração de uma balança de alimentos"
            className="mx-auto mb-3 md:w-150 md:h-100 max-w-150 max-h-80 md:mr-16"
          />
          <div className="text-justify text-white">
            <div className="flex p-[1rem]">
              <div className="flex flex-col justify-center">
                <img
                  src={Topico}
                  alt=""
                  className="md:h-[4rem] md:w-[0.5rem] h-[7rem] w-[0.8rem]"
                />
              </div>
              <p className="pl-[1rem]">
                Descubra uma nova maneira de monitorar sua saúde com essa
                balança inteligente conectada ao aplicativo exclusivo,
                oferecendo análises precisas e insights personalizados em tempo
                real.
              </p>
            </div>
            <div className="flex p-[1rem]">
              <div className="flex flex-col justify-center">
                <img
                  src={Topico}
                  alt=""
                  className="md:h-[4rem] md:w-[0.5rem] h-[6rem] w-[0.8rem]"
                />
              </div>
              <p className="pl-[1rem]">
                Seja para controlar calorias, analisar nutrientes ou
                simplesmente manter o equilíbrio, essa ferramenta é a melhor
                aliada para seu bem-estar diário.
              </p>
            </div>
          </div>
        </div>

        <section className="flex flex-col items-center justify-center bg-fundoSite ">
          <h2 className="uppercase text-center mt-14 mb-4 font-bold text-xl md:text-3xl text-botaoSelecionado font-subtitulo">
            Qual nosso objetivo?
          </h2>

          <div className="mx-4 mb-10">
            <div className="px-2 text-justify md:flex md:flex-col md:items-center">
              <div className="md:flex gap-10 my-10">
                <div>
                  <h3 className="flex justify-center text-titulo font-semibold text-center text-2xl my-[1.5rem]  font-subtitulo">
                    Alimentação saudável
                  </h3>
                  <p className="md:max-w-[27.5rem]">
                    Auxiliar todas as pessoas na sua jornada rumo à alimentação
                    saudável e balanceada, pois uma boa dieta é a chave para uma
                    qualidade de vida melhor.
                  </p>
                </div>
                <div className="md:flex md:flex-col md:mt-6">
                  <img
                    src={Topico}
                    alt=""
                    className="hidden md:block md:h-[10rem] md:w-[0.2rem] h-[6rem] w-[0.8rem]"
                  />
                </div>
                <div>
                  <h3 className="flex justify-center text-titulo font-semibold text-center text-2xl my-[1.5rem] font-subtitulo">
                    Variedade
                  </h3>
                  <p className="md:max-w-[27.5rem] ">
                    Nós iremos te ajudar a manter o controle da sua alimentação
                    e também a variá-la, de acordo com as necessidades da dieta
                    que você estiver seguindo.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex justify-center text-titulo font-semibold text-center text-2xl my-[1.5rem] font-subtitulo">
                  Praticidade
                </h3>
                <p className="md:max-w-[27.5rem] ">
                  A NutriScale irá te ajudar a conxiliar uma alimentação
                  saudável com a correria do seu dia a dia, isso através das
                  funcionalidades presentes na nossa balança inteligente de
                  alimentos.
                </p>
              </div>

              
            </div>
          </div>
        </section>

        
        
      </main>
    </div>
  );
}
  