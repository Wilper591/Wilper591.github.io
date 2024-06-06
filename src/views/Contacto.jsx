import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alerta from "../components/Alerta";

const Contacto = () => {
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlerta({ msg: "Proximamente...", error: true });
    setTimeout(() => {
      setAlerta({});
    }, 3000);
  };

  const { msg } = alerta;

  return (
    <>
      <NavBar />
      <h1 className="text-center font-bold my-8 text-4xl">Contacto</h1>

      <div className="flex flex-col m-10 w-full md:flex-row items-center justify-center h-svh">
        <div className="align-middle w-full text-justify">
          <p className="font-bold text-2xl">
            Puedes contactarte a través de los siguientes medios:
          </p>
          <p className="text-xl my-5 ">
            <i className="fa-regular fa-envelope font-bold"></i>{" "}
            Jorge_Cerda_591@hotmail.com
          </p>
          <p className="text-xl my-5 ">
            <i className="fa-brands fa-square-whatsapp"></i> +56 9 3178 0169
          </p>
          <p className="text-xl mt-7 mb-5">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1Tp8aCNioDwfbT7H-gQs7Q6-zZu5pAvML/view?usp=sharing"
            >
              <i className="fa-regular fa-file font-bold"></i> Revisa Mi
              Curriculum Aquí
            </Link>
          </p>
          <p className="text-xl my-5">
            <Link target="_blank" to="https://github.com/Wilper591">
              <i className="fa-brands fa-square-github"></i>
              GitHub
            </Link>
          </p>
          <p className="text-xl my-5">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/jorgecerda591/"
            >
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </Link>
          </p>
        </div>

        <div className="w-5/6 md:w-full">
          <form
            className="bg-white md:m-10 md:w-5/6 py-10 px-5 shadow-md rounded-lg"
            onSubmit={handleSubmit}
          >
            <p className="text-lg font-black mb-3">...O a través del siguiente formulario</p>
            {msg && <Alerta alerta={alerta} />}
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
