import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alerta from "../components/Alerta";
import ListadoReseñas from "../components/ListadoReseñas";
import axios from "axios";

const Tutorias = () => {
  const [alerta, setAlerta] = useState({});
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, mensaje].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    if (mensaje.length < 10) {
      setAlerta({ msg: "El mensaje es muy corto", error: true });
      return;
    }
    if (mensaje.length > 255) {
      setAlerta({
        msg: "El mensaje solo puede contener 255 caracteres",
        error: true,
      });
      return;
    }

    try {
      setAlerta({ msg: "Enviando Reseña...", error: false });
      setIsSubmitting(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sendReview`,
        { nombre, mensaje }
      );
      setNombre("");
      setMensaje("");
      setAlerta({ msg: data.msg, error: false });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-100">
          Tutorías
        </h1>
        <div className="bg-gray-800 rounded-lg p-6 mb-10 text-gray-300">
          <p className="text-lg">
            En esta sección, encontrarás reseñas auténticas de estudiantes que
            han tomado mis tutorías en desarrollo web con JavaScript. Aunque no
            soy profesor de profesión, soy un apasionado estudiante y
            practicante de programación. Entiendo los desafíos que pueden surgir
            en el aprendizaje de la programación web y estoy aquí para ayudarte
            a superarlos. Si buscas un tutor que te guíe en los aspectos básicos
            y avanzados de la programación web, no dudes en contactarme.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
          Reseñas
        </h2>
        <ListadoReseñas />

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
            Deja tu Reseña
          </h2>
          <div className="max-w-2xl mx-auto">
            <form
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              onSubmit={handleSubmit}
            >
              {alerta.msg && <Alerta alerta={alerta} />}

              <div className="mb-6">
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
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:border-blue-500"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="mensaje"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Escribe aquí tu mensaje"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:border-blue-500"
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
                {isSubmitting ? "Enviando..." : "Enviar Reseña"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorias;
