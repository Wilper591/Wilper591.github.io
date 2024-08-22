import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Estudios = () => {
  return (
    <>
      <NavBar />
      <h1 className="font-bold text-4xl text-center md:mt-20 lg:mt-28 mt-28 mb-10 px-5 text-white">
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
          <div className="md:flex">
            <Link
              to="https://reinventate.desafiolatam.com/v/zSALWppSDHGwbxyKUeqwpWy3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center m-4">
                <img
                  className="max-h-80 w-full rounded-md"
                  src="./img/certificado-fullstack-javascript.webp"
                  alt="Certificado Desarrollador Full Stack JavaScript Trainee"
                />
              </div>
            </Link>
            <Link
              to="https://www.acreditta.com/credential/cb8d48e7-b165-48f5-bee5-ea08eee6d044?utm_source=copy&resource_type=badge&resource=cb8d48e7-b165-48f5-bee5-ea08eee6d044"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center m-4">
                <img
                  className="max-h-80 rounded-md"
                  src="./img/Insignia BOOTCAMP DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE.png"
                  alt="Certificado Desarrollador Full Stack JavaScript Trainee"
                />
              </div>
            </Link>
          </div>
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
                className="max-h-80 rounded-md"
                src="./img/Certificado-JS-Moderno.webp"
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
                className="max-h-80 rounded-md"
                src="./img/Certificado.webp"
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
                className="max-h-80 rounded-md"
                src="./img/certificado-intro-ux-ui-sin-ser-disenador.webp"
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
                className="max-h-80 rounded-md"
                src="./img/certificado-ciberseguridad-principiantes.webp"
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
