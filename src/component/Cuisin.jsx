import React from "react";
import { Globe } from "lucide-react";
import { Link } from 'react-router-dom';

const Cuisin = ({filterByArea}) => {
  const featureAreas = [
    "American",
    "British",
    "Canadian",
    "Indian",
    "Italian",
    "Maxican",
    "Russian",
    "Thai",
  ];

  return (
    <>
      <div className="bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8  overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-4 py-3">
            <div className="flex items-center text-lg font-bold text-yellow-400 gap-2">
              <Globe className="size-5" />
              <h1 className="whitespace-nowrap">Global Cuisines:</h1>
            </div>
            {featureAreas.map((area, index) => (
              <Link to={`/search/${area}`}>
              <button
                key={index}
                className="cursor-pointer text-gray-200 text-sm whitespace-normal hver:text-white trasition-all duration-300 py-1.5 px-4 rounded-full bg-gray-800 hover:bg-indigo-600 border border-gray-700 transform hover:scale-105"
                onClick={()=>filterByArea(area)}
              >
                {area}
              </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuisin;
