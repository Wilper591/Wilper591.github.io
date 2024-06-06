import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-400 py-5">
        <div className="flex gap-4 justify-center py-3">
          <button className="text-5xl hover:text-gray-200" type="button">
            <Link
              title="Github"
              target="_blank"
              to="https://github.com/Wilper591"
            >
              <i className="fa-brands fa-square-github"></i>
            </Link>
          </button>
          <button className="text-5xl hover:text-gray-200" type="button">
            <Link
              title="LinkedIn"
              target="_blank"
              to="https://www.linkedin.com/in/jorgecerda591/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </button>
        </div>
        <p className="text-center bg-gray-400 font-bold text-xl">
          © Todos los derechos reservados 2024.
        </p>
      </footer>
    </>
  );
};

export default Footer;
