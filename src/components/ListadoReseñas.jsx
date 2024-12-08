import useReviews from "../hooks/useReviews";
import Reseña from "./Reseña";

const ListadoReseñas = () => {
  const { reviews } = useReviews();

  return (
    <div className="w-full flex flex-col items-center">
      {reviews.length ? (
        reviews.map((review) => <Reseña key={review.id} review={review} />)
      ) : (
        <h2 className="font-bold text-2xl text-center text-gray-300">
          No hay reseñas aún. ¡Sé el primero en dejar tu comentario!
        </h2>
      )}
    </div>
  );
};

export default ListadoReseñas;
