import { FaGithub, FaLinkedin, FaServer, FaDatabase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="from-gray-900 to-gray-800 bg-gradient-to-r py-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left font-bold text-xl">
              Jorge Cerda
            </p>
            <p className="text-center md:text-left text-sm mt-1">
              Backend Developer
            </p>
          </div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <FaServer className="text-2xl" title="Server-side Development" />
            <FaDatabase className="text-2xl" title="Database Management" />
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Wilper591"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/jorgecerda591/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Jorge Cerda. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
