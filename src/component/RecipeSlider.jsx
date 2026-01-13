import React from 'react'
import { useFetch } from './useFetch';


const RecipeSlider = ({title, fetchUrl}) => {
  const {data, loading, error} = useFetch(fetchUrl);
  console.log(data, error, loading);
  return (
    <div>RecipeSlider</div>
  )
}

export default RecipeSlider