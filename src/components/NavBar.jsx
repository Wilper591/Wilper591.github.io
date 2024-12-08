import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mostrar, setMostrar] = useState(false);
  const [marginTop, setMarginTop] = useState("mt-24");

  const handleClick = () => {
    setMostrar(!mostrar);
  };

  useEffect(() => {
    if (mostrar) {
      setMarginTop("mt-72");
    } else {
      setTimeout(() => {
        setMarginTop("mt-24");
      }, 500);
    }
  }, [mostrar]);

  return (
    <>
      <header
        className={`transition-all md:transition-none duration-500 md:mt-12 ${marginTop}`}
      >
        <nav className="flex flex-col md:flex-row md:justify-between px-10 from-gray-900 to-gray-800 bg-gradient-to-r pt-5 md:py-5 w-full fixed top-0">
          <div className="flex justify-between items-center">
            <div className="text-xl text-center">
              <Link className="font-bold text-gray-300 hover:text-blue-400" to="/">
                Jorge Cerda
              </Link>
            </div>
            <div className="block md:hidden ">
              <button className="flex items-center" onClick={handleClick}>
                <i className="fa-solid fa-bars font-bold text-3xl text-gray-300 px-3 py-2 border-2 border-gray-600 rounded-md hover:border-blue-400 hover:text-blue-400"></i>
              </button>
            </div>
          </div>
          <div className="hidden md:flex text-center gap-3 text-lg">
            <Link
              to="/proyectos"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Proyectos
            </Link>
            <Link
              to="/estudios"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Estudios
            </Link>
            <Link
              to="/tutorias"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Tutorias
            </Link>
            <Link
              to="/contacto"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Contacto
            </Link>
          </div>

          <div
            className={`transition-all delay-200 duration-500 ease-in-out md:hidden flex flex-col text-start pb-5 gap-3 text-lg ${
              mostrar
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <Link
              to="/proyectos"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Proyectos
            </Link>
            <Link
              to="/estudios"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Estudios
            </Link>
            <Link
              to="/tutorias"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Tutorias
            </Link>
            <Link
              to="/contacto"
              className="font-bold uppercase text-gray-300 hover:text-blue-400"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;