import React, { useState, useEffect } from "react";
import arduino from "/arduino.png";
import clcarga from "/clcarga.png";
import lcd from "/LCD.png";
import modulo from "/modulo.png";
import protoboard from "/protoboard.png";
import workplate from "/workplate.png";
import fundo from "/fundo.svg";
import arduinouno from "/arduinouno.png"
import HeaderMateriais from "../components/HeaderMateriais";

const Material = ({ imagem, nome, descricao, preco }) => (
  <div className="group cursor-default bg-fundoHeader w-72 h-80 shadow-md rounded-md overflow-hidden border-2">
    <div className="h-40 relative overflow-hidden">
      <img
        src={imagem}
        alt={nome}
        className="absolute top-0 left-0 h-full w-full object-contain bg-white"
      />
    </div>
    <div className="p-5 text-white ">
      <h2 className="text-xl font-bold">{nome}</h2>
      <p className="text-base pb-3">{descricao}</p>
      <p className="text-lg font-semibold text-titulo">{preco}</p>
    </div>
  </div>
);

const DesktopPecas = () => {
  const produtos = [
    {
      imagem: "/arduinouno.png",
      nome: "Arduino Uno R3 BlackBoard",
      descricao: "Placa de Desenvolvimento",
      preco: "R$ 94,90",
    },
    {
      imagem: "/clcarga.jpeg",
      nome: "Célula de Carga",
      descricao: "Sensor de Peso",
      preco: "R$ 7,90",
    },
    {
      imagem: "/modulo.png",
      nome: "Módulo HX711",
      descricao: "Módulo que amplifica sinal da célula de carga",
      preco: "R$ 5,90",
    },
    {
      imagem: "protoboard.png",
      nome: "Protoboard",
      descricao: "Placa de ensaio.",
      preco: "R$ 7,50",
    },
    {
      imagem: "/workplate.png",
      nome: "Workplate",
      descricao: "Base de Trabalho",
      preco: "R$14,90",
    },
    {
      imagem: "/LCD.png",
      nome: "Display LCD",
      descricao: "Display que mostra o peso",
      preco: "R$ 23,90",
    },
    {
      imagem: "/BluetoothHC05.png",
      nome: "Módulo Bluetooth HC-05",
      descricao: "Conecta o arduino e dispositivos bluetooth",
      preco: "R$ 31,25",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 3;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (produtos.length - visibleProducts + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? produtos.length - visibleProducts : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section>
      <div className="mx-10 mt-10 mb-14 hidden lg:flex lg:items-center lg:flex-col lg:gap-8 lg:p-8">
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className=" px-4 py-2 rounded-full flex items-center justify-center relative z-10 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div className="flex overflow-hidden space-x-4 gap-5 ">
            {produtos
              .slice(currentIndex, currentIndex + visibleProducts)
              .map((produto, index) => (
                <Material
                  key={index}
                  imagem={produto.imagem}
                  nome={produto.nome}
                  descricao={produto.descricao}
                  preco={produto.preco}
                />
              ))}
          </div>
          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded-full flex items-center justify-center relative z-10 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const MobilePecas = () => {
  const componentes = [
    {
      imagem: "/arduinouno.png",
      nome: "Arduino Uno R3 BlackBoard",
      descricao: "Placa de Desenvolvimento",
      preco: "R$ 94,90",
    },
    {
      imagem: "/clcarga.jpeg",
      nome: "Célula de Carga",
      descricao: "Sensor de Peso",
      preco: "R$ 7,90",
    },
    {
      imagem: "/modulo.png",
      nome: "Módulo HX711",
      descricao: "Módulo que amplifica sinal da célula de carga",
      preco: "R$ 5,90",
    },
    {
      imagem: "protoboard.png",
      nome: "Protoboard",
      descricao: "Placa de ensaio.",
      preco: "R$ 7,50",
    },
    {
      imagem: "/workplate.png",
      nome: "Workplate",
      descricao: "Base de Trabalho",
      preco: "R$14,90",
    },
    {
      imagem: "/LCD.png",
      nome: "Display LCD",
      descricao: "Display que mostra o peso",
      preco: "R$ 23,90",
    },
    {
      imagem: "/BluetoothHC05.png",
      nome: "Módulo Bluetooth HC-05",
      descricao: "Conecta o arduino e dispositivos bluetooth",
      preco: "R$ 31,25",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % componentes.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + componentes.length) % componentes.length
    );

  return (
    <div className="bg-fundoHeader lg:hidden  sm:max-w-[80%] border-2 rounded-xl ">
      <div className=" flex flex-col items-center rounded-lg shadow-lg  margin-2 md:items-center  w-[20rem]">
        <img
          src={componentes[currentIndex].imagem}
          alt={componentes[currentIndex].nome}
          className="rounded-t-lg md:w-fit min-w-full h-52 object-contain p-2 bg-gray-100"
        />
        <div className="p-4 md:w-full text-center text-white flex flex-col ">
          <h2 className="text-xl font-bold mb-2">
            {componentes[currentIndex].nome}
          </h2>
          <p className="text-sm p-2 h-[3rem] mb-2">{componentes[currentIndex].descricao}</p>
          <p className='text-sm text-titulo font-semibold'>
            {componentes[currentIndex].preco}
          </p>
        </div>
        <div className="flex justify-between inset-x-0 mt-5 px-4 gap-2 mb-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-slate-200 shadow-lg rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-slate-200 shadow-lg rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

function Materiais() {
  return (
    <div>
      <HeaderMateriais />
      <main className="bg-fundo bg-repeat bg-[length:100vh] font-openSans font-normal text-sm text-text flex flex-col items-center min-h-[100vh]">
        <h1 className=" text-titulo font-bold text-center pt-[2rem] md:text-4xl text-3xl font-subtitulo mb-[8rem] md:mb-10">
          Materiais
        </h1>

        <DesktopPecas />
        <MobilePecas />
      </main>
    </div>
  );
}

export default Materiais;
