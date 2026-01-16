import React, { useCallback, useState } from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import RecipeDetailsView from "./component/RecipeDetailsView";
import SearchView from "./component/SearchView";
import Cuisin from "./component/Cuisin";
import HomeView from "./component/HomeView";
import TrendingRecipe from "./component/TrendingRecipe";
import { API_URL } from "./component/useFetch";
import CatagorySelection from './component/CatagorySelection';



const App = () => {
 
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const filterRecipe = useCallback(async (query, filterType)=>{
             
             setSearchResults([]);
             setSearchLoading(true);
             try {
       
        const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
        if(!res.ok) throw new Error(`Error: ${res.status}`);

        const json = await res.json();
        setSearchResults(json.meals);
      }
      catch (error) {
        console.log(error);
      }
      finally{
        setSearchLoading(false);
      }
  },[])
  const handleSearch = useCallback(async (query)=>{
             
             setSearchResults([]);
             setSearchLoading(true);
             try {
       
        const res = await fetch(`${API_URL}search.php?s=${query}`);
        if(!res.ok) throw new Error(`Error: ${res.status}`);

        const json = await res.json();
        setSearchResults(json.meals);
      }
      catch (error) {
        console.log(error);
      }
      finally{
        setSearchLoading(false);
      }
  },[])
  //filter by catagory
  const filterByCatagory = useCallback(async (catagory)=>{
  filterRecipe(catagory,"c");  
  },[filterRecipe])
  //filter by area
  const filterByArea = useCallback(async (area)=>{
  filterRecipe(area,"a");  
  },[filterRecipe])
  return (
    <>
      <BrowserRouter>
        
          <div className="min-h-screen bg-gray-950 font-sans tex  text-gray-100">
            <Navbar handleSearchMeal={handleSearch}/>
            <Cuisin filterByArea={filterByArea}/>
            <Routes>
              <Route path="/" element={<HomeView filterByCatagory={filterByCatagory}/>}/>
              <Route path="/recipe/:id" element={<RecipeDetailsView/>}/>
              <Route path="/search/:query" element={<SearchView meals={searchResults} loading={searchLoading}/>}/>
             

            </Routes>
          </div>
        
      </BrowserRouter>
    </>
  );
};

export default App;
