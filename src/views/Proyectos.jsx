import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Proyectos = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-4xl font-bold text-center mt-28 md:mt-20 lg:mt-20 mb-10 text-white">
        Proyectos
      </h1>

      <div className="flex flex-col items-center md:flex-row md:justify-center">
        {/* Card: APV - MERN */}
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-6 bg-slate-300">
          <img
            className="w-full"
            src="./img/apv-mern.webp"
            alt="Web Administrador de Pacientes de Veterinaria"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">APV - MERN</div>
            <p className="text-gray-700 text-base">
              Administrador de Pacientes de Veterinaria. MongoDB, Express, React
              y Node.js (MERN). Permite el registro de usuarios con sesiones
              independientes, acceso a información del perfil y un registro de
              pacientes.
            </p>
          </div>
          <div className="text-center my-4">
            <Link
              target="_blank"
              to="https://apv-mern-client.vercel.app"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir a la WEB
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591/APV-MERN-CLIENT"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir al Código
            </Link>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MongoDB
            </span>
          </div>
        </div>

        {/* Card: Agencia de Viajes */}
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-6 bg-slate-300">
          <img
            className="w-full"
            src="./img/agenciadeviajes.webp"
            alt="Web Agencia de Viajes"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Agencia de Viajes</div>
            <p className="text-gray-700 text-base">
              Web para Agencia de Viajes. Utiliza Express y Sequelize para el
              BackEnd y Pug como motor de plantillas para el FrontEnd
            </p>
          </div>
          <div className="text-center my-4">
            <Link
              target="_blank"
              to="https://agenciadeviajesnode-js.onrender.com"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir a la WEB
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591/AgenciaDeViajesNode.js"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir al Código
            </Link>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Pug
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #MySQL
            </span>
          </div>
        </div>

        {/* Card: Pokedex Api */}
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-6 bg-slate-300">
          <img
            className="w-full"
            src="./img/pokedex-api.webp"
            alt="Web Pokedex API"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pokedex API</div>
            <p className="text-gray-700 text-base">
              Aplicación basada en el mundo Pokemon. Consulta una API mediante
              metodo Fetch implementando consultas async await.
            </p>
          </div>
          <div className="text-center my-4">
            <Link
              target="_blank"
              to="https://wilper591.github.io/PokedexApi/"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir a la WEB
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591/PokedexApi"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir al Código
            </Link>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #CSS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center">
        {/* Card: SkatePark */}
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-6 bg-slate-300">
          <img
            className="w-full"
            src="./img/skateparkindex.webp"
            alt="Web SkatePark"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">SkatePark</div>
            <p className="text-gray-700 text-base">
              En esta app podras crear registros, hacer login pasando por varias
              validaciones, tendras una vista admin también para aceptar o negar
              skaters. El servidor esta hecho con Express.
            </p>
          </div>
          <div className="text-center my-4">
            <Link
              target="_blank"
              to="https://wilper591.github.io/SkateParkClient"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir a la WEB
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591/SkateParkClient"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir al Código
            </Link>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Express.js
            </span>
          </div>
        </div>

        {/* Card: Banco Solar */}
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-6 bg-slate-300">
          <img
            className="w-full"
            src="./img/bancoSolar.webp"
            alt="Web Banco Solar"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Banco Solar</div>
            <p className="text-gray-700 text-base">
              Aplicación con login que permite acceder a vista admin de un CRUD
              que administra usuarios y trasacciones mediente server Express y
              PG.
            </p>
          </div>
          <div className="text-center my-4">
            <Link
              target="_blank"
              to="https://wilper591.github.io/BancoSolarCliente/"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir a la WEB
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591/BancoSolarCliente"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir al Código
            </Link>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #PostgreSQL
            </span>
          </div>
        </div>

        {/* Card: Roomates */}
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-6 bg-slate-300">
          <img
            className="w-full"
            src="./img/roommates.webp"
            alt="Web Administrador de Pacientes de Veterinaria"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Roomates</div>
            <p className="text-gray-700 text-base">
              Calculadora costos de "Roommates". Permite agregar usuarios y
              gastos. Utiliza server express y archivos json para persistencia
              en memoria.
            </p>
          </div>
          <div className="text-center my-4">
            <Link
              target="_blank"
              to="https://roomates-js.onrender.com"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir a la WEB
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591/Roomates.js"
              className="rounded-lg mx-2 bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
            >
              Ir al Código
            </Link>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Node.js
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Json
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Proyectos;
