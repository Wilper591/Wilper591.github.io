const Reseña = ({ review }) => {
  const { id, name, message } = review;
  return (
    <div
      id={id}
      className="w-full lg:w-2/3 flex flex-col items-start justify-center p-6 m-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 transition-all hover:shadow-xl"
    >
      <p className="text-xl font-bold text-gray-400 mb-3">
        Nombre: <span className="text-gray-100">{name}</span>
      </p>
      <p className="text-base text-gray-300 italic">&ldquo;{message}&rdquo;</p>
    </div>
  );
};

export default Reseña;
