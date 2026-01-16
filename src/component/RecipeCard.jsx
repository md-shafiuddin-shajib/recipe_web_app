import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block">
      <div className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden border border-gray-800 transition-all duration-500 hover:shadow-blue-600/30 w-[280px] h-[360px] flex flex-col">
        
        <div className="flex justify-center items-center p-4 h-[260px] overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover rounded-lg border border-yellow-400 transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="px-3 pb-4 text-center flex-1 flex items-center justify-center">
          <h3 className="text-lg font-bold text-gray-100 line-clamp-2 hover:text-blue-400 transition-colors duration-300">
            {meal.strMeal}
          </h3>
        </div>

      </div>
    </Link>
  );
};

export default RecipeCard;
