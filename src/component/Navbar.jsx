import React, { useState } from 'react'
import { Zap,Search } from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom'

const Navbar = ({handleSearchMeal}) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) =>{
    e.preventDefault();
    setInput("");
    console.log(`${input}`);
    if(input.trim()){
      handleSearchMeal(input.trim());
      navigate(`/search/${input.trim()}`);
    }
  }
  return (
    <nav className='sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-950/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
     <div className='flex w-full justify-between items-center size-16'>
     
 <Link to={'/'} className='flex items-center text-2xl font-black hover:text-blue-400 transition-colors '>
 <Zap className='size-7 mr-2 text-yellow-400 fill-amber-500/60'/>
 <span className='text-blue-400'>Pro</span>Chef
 </Link>

<form onSubmit={handleSearch} className='flex-1 max-w-lg mx-4 hidden sm:flex'>
  <input type="text" className='w-full px-5 py-2 border border-gray-700 bg-gray-900 text-gray-50 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all duration-300 placeholder-gray-500 shadow-black/50' placeholder='Search dishes, ingradients, or cuising...' value={input} onChange={(e) => setInput(e.target.value)}/>
  <button  type='submit' className='bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2.5 rounded-r-full hover:from-blue-800 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-blue-800/50 hover:shadow-xl'><Search className='size-5'/></button>

</form>
     </div>
      </div>

    </nav>
  )
}

export default Navbar