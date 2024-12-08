import { Link } from "react-router-dom";

const StudyCard = ({ certificate }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg m-4 p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">
        {certificate.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {certificate.images.map((image, index) => (
          <Link
            key={index}
            to={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-auto"
          >
            <img
              className="w-full h-auto sm:h-64 object-contain rounded-md hover:opacity-80 transition-opacity"
              src={image.src}
              alt={image.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudyCard;
