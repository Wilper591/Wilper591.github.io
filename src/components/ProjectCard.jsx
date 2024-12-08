import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <div className="w-full md:w-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg m-4 border border-gray-700 flex flex-col">
    <img
      className="w-full h-48 object-cover"
      src={project.image}
      alt={project.title}
    />
    <div className="px-6 py-4 flex-grow">
      <div className="font-bold text-xl mb-2 text-gray-100">
        {project.title}
      </div>
      <p className="text-gray-300 text-base">{project.description}</p>
    </div>
    <div className="px-6 py-4">
      <Link
        target="_blank"
        to={project.webLink}
        className="block mb-2 text-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Ir a la WEB
      </Link>
      <Link
        target="_blank"
        to={project.codeLink}
        className="block text-center rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Ir al Código
      </Link>
    </div>
    <div className="px-6 pt-4 pb-2">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
        >
          #{tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
