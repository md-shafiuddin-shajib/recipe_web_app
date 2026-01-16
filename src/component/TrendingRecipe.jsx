import React from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";

import { Link } from 'react-router-dom';


const TrendingRecipe = ({ title, fetchUrl }) => {
 
  
  const { data, loading, error } = useFetch(fetchUrl);
  console.log(data?.meals);
  const meals = data?.meals || [];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

  if (loading)
    return (
      <div className="text-gray-300 text-center p-8 ">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />{" "}
        Loading {title}....
      </div>
    );
  if (error) return <div className="text-red-600 font-semibold">{error}</div>;
  return (
    <section className=" mt-2 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-amber-300 pl-4 flex items-center">
        <Clock className="size-6 mr-3 text-blue-500" />
        {title}
      </h2>
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {meals.map((meal) => (
              <Link to={`/recipe/${meal.idMeal}`}>
            <div className="px-10 flex justify-center" key={meal.idMeal}>
              <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden transform transition-all group duration-500 border border-gray-800 hover:shadow-blue-600/30 mb-5">
                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/80 transition-all duration-500"></div>
                
                <div className="flex justify-center items-center p-5">
                  <img
                    src={meal.strMealThumb}
                    alt="meals image"
                    className="size-[120px] rounded-xl border border-yellow-400 transition-all transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingRecipe;
