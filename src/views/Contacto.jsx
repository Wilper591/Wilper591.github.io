import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alerta from "../components/Alerta";
import axios from "axios";

const Contacto = () => {
  const [alerta, setAlerta] = useState({});
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, mensaje].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    if (mensaje.length < 10) {
      setAlerta({ msg: "El mensaje es muy corto", error: true });
      return;
    }

    try {
      setAlerta({ msg: "Enviando Email...", error: false });
      setIsSubmitting(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sendEmail`,
        { email, nombre, mensaje }
      );
      setNombre("");
      setEmail("");
      setMensaje("");
      setAlerta({ msg: data.msg, error: false });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { msg } = alerta;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-100">
          Contacto
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 text-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-100">
              Información de Contacto
            </h2>
            <p className="my-4 flex items-center">
              <i className="fa-regular fa-envelope mr-2"></i>
              Jorge_Cerda_591@hotmail.com
            </p>
            <p className="my-4 flex items-center">
              <i className="fa-brands fa-square-whatsapp mr-2"></i>
              +56 9 3178 0169
            </p>
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1Tp8aCNioDwfbT7H-gQs7Q6-zZu5pAvML/view?usp=sharing"
              className="my-4 flex items-center hover:text-blue-400 transition-colors"
            >
              <i className="fa-regular fa-file mr-2"></i>
              Revisa Mi Curriculum Aquí
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Wilper591"
              className="my-4 flex items-center hover:text-blue-400 transition-colors"
            >
              <i className="fa-brands fa-square-github mr-2"></i>
              GitHub
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/jorgecerda591/"
              className="my-4 flex items-center hover:text-blue-400 transition-colors"
            >
              <i className="fa-brands fa-linkedin mr-2"></i>
              LinkedIn
            </Link>
          </div>

          <div className="w-full lg:w-2/3">
            <form
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit}
            >
              {msg && <Alerta alerta={alerta} />}

              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:border-blue-500"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Tu Email"
                  className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mensaje"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Escribe aquí tu mensaje"
                  className="w-full p-3 bg-gray-600 border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:border-blue-500"
                  rows="4"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700 transition-colors ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Email"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
