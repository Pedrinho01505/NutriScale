import React from "react";
import HeaderRefer from "../components/HeaderRefer";

export default function Referencias() {
  return (
    <div className="bg-fundo bg-repeat bg-[length:100vh] min-h-screen overflow-auto md:overflow-hidden">
      <HeaderRefer />

      <main className="text-white">
        <h1 className="text-center mt-8 pb-6 font-bold text-3xl md:text-4xl text-botaoSelecionado font-barlow md:mt-10">
          Referências
        </h1>

        <section className="mt-2 font-openSans text-base text-justify max-w-[80%] mx-auto md:text-xl md:mt-4 text-white md:flex md:justify-center gap-14">
          <div className="mt-6 text-center border-4 border-titulo rounded-[0.75rem] md:w-[26.688rem]">
            <h2 className="mt-5">
              Importância do planejamento alimentar para o emagrecimento
            </h2>
            <button
              onClick={() =>
                window.open(
                  "https://sallet.com.br/a-importancia-do-planejamento-alimentar-para-o-emagrecimento/",
                  "_blank"
                )
              }
              className="border-2 border-titulo mt-4 mb-5 px-6 rounded-[0.75rem]"
            >
              Abrir
            </button>
          </div>
          <div className="mt-6 text-center border-4 border-titulo rounded-[0.75rem] md:w-[26.688rem]">
            <h2 className="mt-5">Bons e variados hábitos de alimentação</h2>
            <button
              onClick={() =>
                window.open(
                  "https://www.scielo.br/j/abem/a/vvvr8GQ3xwMJThHrXQW4jSj/abstract/?lang=pt",
                  "_blank"
                )
              }
              className="border-2 border-titulo mt-4 mb-5 px-6 md:px-7 md:mt-10 rounded-[0.75rem]"
            >
              Abrir
            </button>
          </div>
        </section>

        <section className="mt-2 font-openSans text-base text-justify max-w-[80%] mx-auto md:text-xl md:mt-8 text-white md:flex md:justify-center">
          <div className="mt-6 text-center border-4 border-titulo rounded-[0.75rem] mb-2 md:w-[26.688rem]">
            <h2 className="mt-5">
              Importância da dieta saudável na melhora da qualidade de vida
            </h2>
            <button
              onClick={() =>
                window.open(
                  "https://www.rbne.com.br/index.php/rbne/article/view/799",
                  "_blank"
                )
              }
              className="border-2 border-titulo mt-4 mb-5 px-6 rounded-[0.75rem]"
            >
              Abrir
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
