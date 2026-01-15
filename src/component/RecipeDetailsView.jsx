import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { Loader, ChevronLeft , Utensils, ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";

const RecipeDetailsView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const meal = data?.meals?.[0];
  console.log(meal);
   if (loading)
    return (
      <div className="text-gray-300 text-center p-8 ">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />{" "}
        Loading Recipe....
      </div>
    );
  if (error) return <div className="text-red-600 font-semibold">{error}</div>;
   if(!meal) return null;

  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
   const ingredient = meal[`strIngredient${i}`]?.trim();
  const measure = meal[`strMeasure${i}`]?.trim();

  if (ingredient) {
    ingredients.push(ingredient);
    measures.push(measure || "");
  }
  }

  console.log(ingredients, measures);

 
 
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="text-yellow-400 hover:text-yellow-300 flex items-center mb-6 font-medium transition text-lg group"
      >
        <ChevronLeft className="size-6 mr-1 transition" /> Back to Dashboard
      </Link>
      <div className="bg-gray-900 p-6  md:p-12 rounded-3xl shadow-2xl shadow-black/70 border border-gray-800">
        <div className="lg:flex lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl font-black text-gray-100 mb-6  leading-tight">
              {meal?.strMeal}
            </h1>
            <img
              src={meal?.strMealThumb}
              alt="foode image"
              className="size-[400px] rounded-2xl shadow-2xl shadow-black/50 object-cover border-4 border-gray-800 ring-2 ring-indigo-500 mx-5xl"
            />
          </div>
          <div className="lg:w-1/2 bg-gray-800 rounded-xl shadow-inner shadow-black/50 border border-gray-700">
          <h2 className="flex items-center text-3xl font-black text-yellow-400 mb-6  leading-tight border-b border-gray-700 pt-5 pl-2 pb-5 ">
            <Utensils className="size-7 mr-3 text-blue-500 transition" />
            Key Ingredients:</h2>

           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {ingredients.map((ingredient, index) => (
    <li
      key={index}
      className="flex items-start gap-3 rounded-lg bg-gray-800/60 px-4 py-3"
    >
      <ChevronRight className="size-5 text-blue-500 shrink-0 mt-0.5" />

      <div className="text-sm text-gray-200 leading-relaxed">
        <span className="font-semibold text-gray-100 mr-1">
          {measures[index]}
        </span>
        <span className="text-gray-300">{ingredient}</span>
      </div>
    </li>
  ))}
</ul>

          
          
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetailsView;
