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
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center md:mt-12 lg:mt-20 mt-60 mb-10">
          Reseñas
        </h1>
        <div className="flex flex-wrap items-center justify-center mx-10">
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
