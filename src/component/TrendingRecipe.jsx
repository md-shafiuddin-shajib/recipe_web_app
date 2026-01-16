import React from "react";
import { useFetch } from "./useFetch";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals ?? [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  if (loading) {
    return (
      <div className="text-gray-300 text-center p-8">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 font-semibold">{error}</div>;
  }

  return (
    <section className="mt-2 max-w-7xl mx-auto px-2">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-amber-300 pl-4 flex items-center">
        <Clock className="size-6 mr-3 text-blue-500" />
        {title}
      </h2>

      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 flex justify-center">
              <Link to={`/recipe/${meal.idMeal}`}>
                <div className="w-[140px] h-[160px] bg-gray-900 rounded-xl shadow-xl shadow-black/50 border border-gray-800 hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-[120px] h-[120px] object-cover rounded-xl border border-yellow-400 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingRecipe;
