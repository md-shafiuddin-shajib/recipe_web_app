import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import RecipeDetailsView from "./component/RecipeDetailsView";
import SearchView from "./component/SearchView";
import Cuisin from "./component/Cuisin";
import HomeView from "./component/HomeView";
import TrendingRecipe from "./component/TrendingRecipe";

const App = () => {
  return (
    <>
      <BrowserRouter>
        
          <div className="min-h-screen bg-gray-950 font-sans tex  text-gray-100">
            <Navbar/>
            <Routes>
              <Route />
            </Routes>
          </div>
        
      </BrowserRouter>
    </>
  );
};

export default App;
