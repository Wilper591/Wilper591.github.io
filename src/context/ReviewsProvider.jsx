import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({});

  useEffect(() => {
    const obtenerResenas = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_BACKEND_URL}/api/getReviews`
        );
        setReviews(data.resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerResenas();
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews, review }}>
      {children}
    </ReviewsContext.Provider>
  );
};
export { ReviewsProvider };
export default ReviewsContext;
