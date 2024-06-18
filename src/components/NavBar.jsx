import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="mb-52 md:mb-24 lg:mb-0">
        <nav className="flex flex-col md:flex-row md:justify-between px-10 from-sky-950 to-sky-700 bg-gradient-to-r py-5 gap-5 w-full fixed top-0">
          <div className="text-xl text-center">
            <Link className="font-bold text-white hover:text-gray-500" to="/">
              Jorge Cerda
            </Link>
          </div>
          <div className="flex flex-col md:flex-row text-center gap-3 text-lg">
            <Link
              to="/proyectos"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Proyectos
            </Link>
            <Link
              to="/estudios"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Estudios
            </Link>
            <Link
              to="/tutorias"
              className="font-bold uppercase text-white hover:text-gray-500"
            >
              Tutorias
            </Link>
            <Link
              to="/contacto"
              className="font-bold uppercase text-white hover:text-gray-500"
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
