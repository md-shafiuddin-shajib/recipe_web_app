import React from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { Clock, Loader} from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log(data?.meals);
  const meals = data?.meals || [];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  if(loading) return (
    <div className="text-gray-300 text-center p-8 ">< Loader className="animate-spin inline-block mr-2 text-blue-400"/> Loading {title}....</div>
  )
  if(error) return (<div className="text-red-600 font-semibold">{error}</div>)
  return (
    <section className=" mt-2 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-amber-300 pl-4 flex items-center">
        <Clock className="size-6 mr-3 text-blue-500" />
        {title}
      </h2>
      <div style={{width:'90%', margin:'auto', padding:'10px'}}>
        <Slider {...settings}>
        {meals.map((meal) => (
          <div className="px-10 flex justify-center" key={meal.idMeal}>
            <RecipeCard meal={meal} />
          </div>
        ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
