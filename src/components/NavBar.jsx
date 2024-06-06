import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="flex flex-col md:flex-row md:justify-between px-10 bg-gray-500 py-5 gap-5">
          <div className="text-xl text-center">
            <Link
              className="font-bold text-black hover:text-gray-400"
              to="/"
            >
               Jorge Cerda
            </Link>
          </div>
          <div className="flex flex-col md:flex-row text-center gap-5 text-lg">
            <Link
              to="/proyectos"
              className="font-bold uppercase text-black hover:text-gray-400"
            >
              Trabajos
            </Link>
            <Link
              to="/estudios"
              className="font-bold uppercase text-black hover:text-gray-400"
            >
              Estudios
            </Link>
            <Link
              to="/contacto"
              className="font-bold uppercase text-black hover:text-gray-400"
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
