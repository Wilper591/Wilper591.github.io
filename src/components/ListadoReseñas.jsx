import useReviews from "../hooks/useReviews";
import Reseña from "./Reseña";

const ListadoReseñas = () => {
  const { reviews } = useReviews();

  return (
    <>
      {reviews.length ? (
        <>
            {reviews.map((review) => (
              <Reseña key={review.id} review={review} />
            ))}
        </>
      ) : (
        <h2 className="font-bold text-2xl text-center">No hay reseñas, por favor deja tu comentario.</h2>
      )}
    </>
  );
};

export default ListadoReseñas;
