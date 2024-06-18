import { useContext } from "react";
import ReviewsContext from "../context/ReviewsProvider";

const useReviews = () => {
  return useContext(ReviewsContext);
};

export default useReviews;
