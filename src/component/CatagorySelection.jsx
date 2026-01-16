import React from 'react'
import {Utensils} from 'lucide-react';
import { Link } from 'react-router-dom';
const CatagorySelection = ({filterByCatagory}) => {

  const featureCatagories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Lamb",
  ];
  return (
      <section className=" mt-2 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-amber-300 pl-4 flex items-center">
        <Utensils className="size-6 mr-3 text-blue-500" /> 
      Quick Filter by Primary Ingredient
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {featureCatagories.map((catagory,index)=>(
          <Link to={`search/${catagory}`}>
        <div key={index} className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 text-gray-300 cursor-pointer font-semibold transition" onClick={()=>filterByCatagory(catagory)}>{catagory}</div>
        </Link>))}
      </div>
      </section>
  )
}

export default CatagorySelection