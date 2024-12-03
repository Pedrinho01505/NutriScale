import React from "react";
import HeaderSobre from "../components/HeaderSobre";

export default function Sobre() {
  return (
    <div className="bg-fundo bg-repeat bg-[length:100vh] min-h-screen overflow-x-hidden">
      <HeaderSobre />
      <section className="p-6 text-center">
        <h1 className="text-center mt-4 pb-6 text-3xl md:text-4xl text-botaoSelecionado font-[900] font-subtitulo">
          Sobre nós
        </h1>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-16">
          <section className="w-full max-w-[18rem] max-h-[27rem] mb-6 lg:mb-0 flex justify-center">
            <div className="w-80 p-8 h-auto flex flex-col justify-center items-center bg-fundoHeader rounded-[8px] text-white border-2">
              <img
                className="w-40 h-40"
                src="/pedroca.svg"
                alt="Pedro H. Gomes"
              />
              <p className="font-bold text-2xl pt-6 font-sans">
                Pedro H. Gomes
              </p>
              <p className="text-xl">
                <span className="font-bold">Idade:</span> 17 anos
              </p>
              <p className="text-xl">
                <span className="font-bold">Formação:</span> Unasp- Técnico de
                Informática
              </p>
              <a
                className="pt-6"
                href="https://www.instagram.com/_ph.gomes/profilecard/?igsh=Z2puczV0bGFyamJu"
              >
                <img src="/insta.svg" alt="Instagram" />
              </a>
            </div>
          </section>

          <section className="w-full max-w-[18rem] max-h-[27rem] mb-6 lg:mb-0 flex justify-center">
            <div className="w-80 p-8 h-auto flex flex-col justify-center items-center bg-fundoHeader rounded-[8px] text-white border-2">
              <img className="w-40 h-40" src="/julia.svg" alt="Julia Schiavi" />
              <p className="font-bold text-2xl pt-6 font-sans">Julia Schiavi</p>
              <p className="text-xl">
                <span className="font-bold">Idade:</span> 18 anos
              </p>
              <p className="text-xl">
                <span className="font-bold">Formação:</span> Unasp- Técnico de
                Informática
              </p>
              <a
                className="pt-6"
                href="https://www.instagram.com/juh_schiavi18?igsh=ZnVzMHZ1dWc2am4x&utm_source=qr"
              >
                <img src="/insta.svg" alt="Instagram" />
              </a>
            </div>
          </section>

          <section className="w-full max-w-[18rem] max-h-[27rem] mb-6 lg:mb-0 flex justify-center">
            <div className="w-80 p-8 h-auto flex flex-col justify-center items-center bg-fundoHeader rounded-[8px] text-white border-2">
              <img
                className="w-40 h-40"
                src="/joao.svg"
                alt="João V. Martins"
              />
              <p className="font-bold text-2xl pt-6 font-sans">
                João V. Martins
              </p>
              <p className="text-xl">
                <span className="font-bold">Idade:</span> 18 anos
              </p>
              <p className="text-xl">
                <span className="font-bold">Formação:</span> Unasp- Técnico de
                Informática
              </p>
              <a
                className="pt-6"
                href="https://www.instagram.com/jv.martins21?igsh=MW9hbmh0aDIzMHh2ZA=="
              >
                <img src="/insta.svg" alt="Instagram" />
              </a>
            </div>
          </section>
        </div>

      
      </section>
    </div>
  );
}
