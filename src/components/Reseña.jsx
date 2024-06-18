const Reseña = ({ review }) => {
  const { id, name, message } = review;
  return (
    <>
      <div
        id={id}
        className="flex flex-col items-start justify-center p-2 m-2 bg-gray-300 rounded-md"
      >
        <p className="text-xl font-bold text-gray-500 mb-5 p-3">
          Nombre: <span className="text-2xl text-black">{name}</span>
        </p>
        <p className="text-lg text-justify font-medium p-3">{message}</p>
      </div>
    </>
  );
};

export default Reseña;
