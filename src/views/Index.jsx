import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaVuejs,
  FaNode,
  FaNpm,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";
import { SiExpress, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssLine } from "react-icons/ri";

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row md:items-center mx-6 min-h-screen">
        <div className="md:w-1/3 text-justify">
          <h1 className="font-bold text-4xl m-4 mb-6 text-center">
            Información Personal
          </h1>
          <p>
            ¡Hola! Soy Jorge Cerda un Desarrollador Web FullStack JavaScript con
            un enfoque creciente en el desarrollo de BackEnd.
          </p>
          <p>
            Estoy comprometido con mi desarrollo profesional y continúo
            avanzando en mi formación.
          </p>
          <p>
            ¡Estoy emocionado por las oportunidades que el futuro tiene
            reservadas y estoy comprometido a seguir aprendiendo y creciendo en
            el campo del desarrollo web, especialmente en el ámbito del BackEnd!
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col text-center gap-7">
          <p className="font-bold text-2xl w-full mt-6">
            Lenguaje de Programación
          </p>
          <div className="flex justify-center gap-3">
            <RiJavascriptFill
              title="JavaScript"
              className="text-6xl fill-amber-400"
            />
            <FaPhp title="PHP" className="text-6xl fill-blue-600" />
          </div>

          <p className="font-bold text-2xl">Tecnologías FrontEnd</p>
          <div className="flex  justify-center gap-3">
            <FaHtml5 title="HTML5" className="text-6xl fill-orange-600" />
            <FaCss3Alt title="CSS3" className="text-6xl fill-blue-500" />
            <FaBootstrap
              title="Bootstrap"
              className="text-6xl fill-indigo-600"
            />
            <RiTailwindCssLine
              title="Tailwind"
              className="text-6xl fill-blue-500"
            />
            <FaVuejs title="Vue.js" className="text-6xl fill-green-600" />
            <FaReact title="React" className="text-6xl fill-blue-400" />
          </div>

          <p className="font-bold text-2xl">Tecnologías BackEnd</p>
          <div className="flex justify-center gap-3">
            <FaNode title="Node.js" className="text-6xl fill-green-600" />
            <FaNpm title="NPM" className="text-6xl fill-red-500" />
            <SiExpress title="Express.js" className="text-6xl" />
          </div>

          <p className="font-bold text-2xl">Bases de Datos</p>
          <div className="flex justify-center gap-3">
            <SiMysql title="MySQL" className="text-6xl fill-blue-500" />
            <SiPostgresql
              title="PostgreSQL"
              className="text-6xl fill-blue-600"
            />
            <SiMongodb title="MongoDB" className="text-6xl fill-green-600" />
          </div>

          <p className="font-bold text-2xl">Herramientas adicionales</p>
          <div className="flex justify-center gap-3">
            <FaGitAlt title="Git" className="text-6xl fill-orange-700" />
            <FaGithub title="GitHub" className="text-6xl" />
          </div>
        </div>
        <div>
          <img
            className="rounded-full my-10"
            src="./img/fotoperfil.png"
            alt="Jorge Cerda"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
