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
  const [cursor, setCursor] = useState("cursor-pointer");
  const [disabled, setDisabled] = useState(false);

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
        msg: "El mensaje solo puede contener 255 carácteres",
        error: true,
      });
      return;
    }

    try {
      setAlerta({ msg: "Enviando Reseña...", error: true });
      setCursor("cursor-wait");
      setDisabled(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sendReview`,
        {
          nombre,
          mensaje,
        }
      );
      setCursor("cursor-pointer");
      setDisabled(false);
      setNombre("");
      setMensaje("");
      setAlerta({ msg: data.msg, error: false });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  const { msg } = alerta;

  return (
    <>
      <NavBar />
      <div className="min-h-screen mt-28 md:mt-0">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center lg:mt-20 mb-10 text-white">
            Tutorias
          </h1>
          <p className="md:w-1/2 text-lg font-bold text-justify p-10 bg-gray-300 rounded-md m-5">
            En esta sección, encontrarás reseñas auténticas de estudiantes que
            han tomado mis tutorías en desarrollo web con JavaScript. Aunque no
            soy profesor de profesión, soy un apasionado estudiante y
            practicante de programación. Entiendo los desafíos que pueden surgir
            en el aprendizaje de la programación web y estoy aquí para ayudarte
            a superarlos. Si buscas un tutor que te guíe en los aspectos básicos
            y avanzados de la programación web, no dudes en contactarme.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Reseñas
        </h2>
        <div className="flex flex-col items-center justify-center mx-10">
          <ListadoReseñas />
        </div>

        <div className="flex flex-col items-center">
          <div className="px-10 m-10 w-full md:w-1/2">
            <form className="bg-white rounded-lg p-5" onSubmit={handleSubmit}>
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
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>

              <input
                type="submit"
                className={`bg-gray-600 w-full md:w-1/2 p-3 text-center text-white uppercase font-bold hover:bg-gray-700 rounded-md ${cursor} transition-colors`}
                value="Enviar Reseña"
                disabled={disabled}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tutorias;
