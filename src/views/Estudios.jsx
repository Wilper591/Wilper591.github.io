import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Estudios = () => {
  return (
    <>
      <NavBar />
      <h1 className="font-bold text-4xl text-center md:mt-12 lg:mt-28 mt-60 mb-10 text-white">
        Formación en Desarrollo Web
      </h1>

      <div className="flex flex-col justify-center text-center md:flex-row gap-5">
        <div className="md:w-1/2 bg-gray-300 p-2 rounded-md m-5">
          <h2 className="text-2xl">
            <span className="text-3xl font-bold">
              BootCamp Talento Digital:
            </span>{" "}
            Desarrollador FullStack JavaScript Trainee
          </h2>
          <Link
            to="https://reinventate.desafiolatam.com/v/zSALWppSDHGwbxyKUeqwpWy3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center m-4">
              <img
                className="max-h-80"
                src="./img/aprobacion-final-td8-g66-m10-desarrollo-de-aplicaciones-full-stack-javascript-trainee-v2-0-desarrollo-de-empleabilidad-en-la-industria-digital-ele03079206.png"
                alt="Certificado Desarrollador Full Stack JavaScript Trainee"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center md:flex-row gap-5">
        <div className="md:w-1/2 bg-gray-300 p-2 rounded-md m-5">
          <h2 className="text-2xl">
            <span className="text-3xl font-bold">UDEMY:</span> JavaScript
            Moderno Guía Definitiva Construye +20 Proyectos
          </h2>
          <Link
            to="https://www.udemy.com/certificate/UC-37a59b95-876f-47bb-9e28-fc2bafbea354/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center m-4">
              <img
                className="max-h-80"
                src="./img/Certificado-JS-Moderno.jpg"
                alt="Certificado Ciberseguridad"
              />
            </div>
          </Link>
        </div>

        <div className="md:w-1/2 bg-gray-300 p-2 rounded-md m-5">
          <h2 className="text-2xl">
            <span className="text-3xl font-bold">UDEMY:</span> Desarrollo Web
            Completo con HTML5, CSS3, JS AJAX, PHP y MySQL.
          </h2>
          <Link
            to="https://www.udemy.com/certificate/UC-3def1037-3f14-4b77-8264-6156e1351cf0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center m-4">
              <img
                className="max-h-80"
                src="./img/Certificado.jpg"
                alt="Certificado Curso Desarrollo Web"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center md:flex-row gap-5">
        <div className="md:w-1/2 bg-gray-300 p-2 rounded-md m-5">
          <h2 className="text-2xl">
            <span className="text-3xl font-bold">Desafio Latam:</span> Charla UX
            101: Introducción al UX/UI sin ser diseñador
          </h2>
          <Link
            to="https://cursos.desafiolatam.com/certificates/vudetmdnmq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center m-4">
              <img
                className="max-h-80"
                src="./img/certificado-intro-ux-ui-sin-ser-disenador.png"
                alt="Certificado Ciberseguridad"
              />
            </div>
          </Link>
        </div>

        <div className="md:w-1/2 bg-gray-300 p-2 rounded-md m-5">
          <h2 className="text-2xl">
            <span className="text-3xl font-bold">Desafio Latam:</span> Charla
            Ciberseguridad para Principiantes
          </h2>
          <Link
            to="https://cursos.desafiolatam.com/certificates/owggouworl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center m-4">
              <img
                className="max-h-80"
                src="./img/certificado-ciberseguridad-principiantes.png"
                alt="Certificado Ciberseguridad"
              />
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Estudios;
