import React, { useState } from "react";
import Logo from "/LOGO.svg";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  const [aberto, setAberto] = useState(false);
  const handleAberto = () => {
    setAberto((prev) => !prev);
  };
  return (
    <header className="w-full bg-fundoHeader px-4 py-2 flex items-center justify-between overflow-x-auto">
      <Link to="/" className="flex-shrink-0">
        <img
          src={Logo}
          alt="Logo da NutriScale"
          className="w-20 h-12 md:w-30 md:h-16 mr-3 md:mr-auto"
        />
      </Link>

      <nav className="flex-grow hidden md:inline">
        <ul className="flex md:justify-end space-x-4 md:space-x-6 text-xs md:text-base uppercase text-naoSelecionado font-bold">
          <li className="flex text-botaoSelecionado">
            <Link to="/">Home</Link>
          </li>
          <li className="whitespace-nowrap hover:text-hover hover:duration-200">
            <Link to="/comousar">Como Usar</Link>
          </li>
          <li className="hover:text-hover hover:duration-200">
            <Link to="/materiais">Materiais</Link>
          </li>
          <li className="hover:text-hover hover:duration-200">
            <Link to="/referencias">Referências</Link>
          </li>
          <li className="whitespace-nowrap hover:text-hover hover:duration-200">
            <Link to="/sobre">Sobre nós</Link>
          </li>
        </ul>
      </nav>

      {/*Menu Hamburgui kkkkkacabapeloamor*/}
      <button onClick={handleAberto} className="space-y-1 group md:hidden">
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
      </button>

      {aberto ? (
        <ul className="bg-fundoHeader w-screen pb-10 absolute top-0 right-0 duration-150 flex flex-col space-y-3 justify-end text-naoSelecionado">
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo da NutriScale"
              className="h-[3.5rem] pt-2 ml-[1.6rem] mr-3 "
            />
          </Link>
          <button
            onClick={handleAberto}
            className="px-10 relative -top-9 ml-auto"
          >
            <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
            <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
          </button>
          <li className="flex justify-start ml-5 text-base w-full text-botaoSelecionado">
            <Link to="/">Home</Link>
          </li>
          <li className="whitespace-nowrap flex justify-start ml-5 text-base hover:text-hover duration-100">
            <Link to="/comousar">Como Usar</Link>
          </li>
          <li className="flex justify-start ml-5 text-base hover:text-hover">
            <Link to="/materiais">Materiais</Link>
          </li>
          <li className="flex justify-start ml-5 text-base hover:text-hover">
            <Link to="/referencias">Referências</Link>
          </li>
          <li className="whitespace-nowrap flex justify-start ml-5 text-base hover:text-hover">
            <Link to="/sobre">Sobre nós</Link>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
