import { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const API_KEY = "AIzaSyDRcsAK-OBGvpn55JbC78MwMxMvCvU77jM";
      const PLACE_ID = "ChIJJ3AiNYoi-k0RrAN9zcKmT60";

      const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=id,name,rating,reviews&key=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Error cargando reseñas:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Opiniones de Clientes
      </h2>
      <div className="grid gap-6">
        {reviews.length > 0 ? (
          reviews.slice(0, 5).map((review, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <p className="text-lg font-semibold">{review.author_name}</p>
              <p className="text-yellow-500">⭐ {review.rating}/5</p>
              <p className="text-gray-700">"{review.text}"</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Cargando reseñas...</p>
        )}
      </div>
    </div>
  );
};

export default GoogleReviews;
