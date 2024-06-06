import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-center font-bold my-8 text-4xl">Contacto</h1>
      
      <div className="flex flex-col w-full">
        <div className="align-middle w-full text-center">
          <p className="font-bold text-2xl">
            Puedes contactarte a través de los siguientes medios:
          </p>
          <p className="text-xl my-5">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1Tp8aCNioDwfbT7H-gQs7Q6-zZu5pAvML/view?usp=sharing"
            >
              <i className="fa-regular fa-file font-bold"></i> Revisa Mi
              Curriculum Aquí
            </Link>
          </p>
          <p className="text-xl my-5 ">
            <i className="fa-regular fa-envelope font-bold"></i>{" "}
            Jorge_Cerda_591@hotmail.com
          </p>
          <p className="text-xl my-5 ">
            <i className="fa-brands fa-whatsapp font-bold text-green-600"></i>{" "}
            +56 9 3178 0169
          </p>
        </div>

        <div className="w-full">
          <form className="bg-white py-10 px-5 m-10 md:mx-32 lg:mx-72 shadow-md rounded-lg">
            <div className="mb-5">
              <label
                htmlFor="nombre"
                className="text-gray-700 uppercase font-bold"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-gray-700 uppercase font-bold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Tu Email"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="mensaje"
                className="text-gray-700 uppercase font-bold"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                placeholder="Escribe aquí tu mensaje"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </div>

            <input
              type="submit"
              className="bg-gray-600 w-full md:w-1/2 lg:w-1/4 p-3 text-white uppercase font-bold hover:bg-gray-700 rounded-md cursor-pointer transition-colors"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
