import React from "react";

const RecipeCard = ({ meal }) => {
  return (
    <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden transform transition-all group duration-500 border border-gray-800 hover:shadow-blue-600/30 ">
      {/* Hover Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/80 transition-all duration-500"></div>
      <div className="flex justify-center items-center p-5">
        <img
          src={meal.strMealThumb}
          alt="meals image"
          className="size-60 rounded-xl border border-yellow-400 transition-all transform group-hover:scale-105 duration-500"
        />
      </div>
      <div className="p-2 text-center">
        <h3 className="sm:whitespace-nowrap text-xl pb-3 font-bold text-gray-100 mb-1 group-hover:text-blue-400 transition-all duration-500 transform group-hover:scale-105 overflow-hidden ">
          {meal.strMeal}
        </h3>
      </div>
    </div>
  );
};

export default RecipeCard;
