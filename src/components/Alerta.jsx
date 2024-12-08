const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "from-red-700 to-red-900" : "from-blue-700 to-blue-900"
      } bg-gradient-to-r text-center p-4 rounded-md shadow-lg text-gray-100 font-medium mb-4`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
