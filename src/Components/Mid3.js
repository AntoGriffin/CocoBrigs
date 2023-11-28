/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import data from '../Assets/data.json'
import pillow from '../Assets/pillow.jpg'
import hexa from '../Assets/hexa.jpg'
import cube from '../Assets/cube.jpg'

function Mid3() {
    const handleMoreDetails = (id) => {
        window.location.href = "/readmore/" + id;
       /*  window.open("/readmore/"+id,"_blank") */
    console.log(data)
  };
  return (
<div className="flex flex-col justify-center items-center space-y-2 mt-28 font-nav">
    <h1 className="mb-4  text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-4xl  text-center"><span className="underline underline-offset-3 decoration-8 decoration-red-500 dark:decoration-red-500">Our Products</span></h1> 
<div className="grid grid-row-1 md:grid-cols-3 gap-2">    
    <div>
        <a href='#' onClick={()=>{handleMoreDetails(1)}}><img className="h-auto max-w-full rounded-lg" src={pillow} alt=""/></a>
        <figcaption className="mt-2 text-xl font-bold text-center text-black">Pillow Briquette</figcaption>
    </div>
    <div>
    <a href='#' onClick={()=>{handleMoreDetails(2)}}><img className="h-auto max-w-full rounded-lg" src={hexa} alt=""/></a>
        <figcaption className="mt-2 text-xl font-bold text-center text-black ">Hexagonal Briquette</figcaption>
    </div>
    <div>
    <a href='#' onClick={()=>{handleMoreDetails(3)}}><img className="h-auto max-w-full rounded-lg" src={cube} alt=""/></a>
        <figcaption className="mt-2 text-xl font-bold text-center text-black ">Shisha Cube Briquette</figcaption>
    </div>
   
</div>
</div>

  )
}

export default Mid3