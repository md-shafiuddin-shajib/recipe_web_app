import React from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals ?? [];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
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
    <section className="mt-2 max-w-7xl mx-auto px-3">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-amber-300 pl-4 flex items-center">
        <Clock className="size-6 mr-3 text-blue-500" />
        {title}
      </h2>

      <div className="mx-auto w-full overflow-hidden">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="flex justify-center px-3">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
