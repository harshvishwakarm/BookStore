import React, {useState, useEffect } from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';


function Freebook() {
 
  const[book,setBook]=useState([]);
  useEffect(()=>{
   const getBook=async()=>{
    try{
      const res= await axios.get("http://localhost:4003/book");
     
      const FilterData = res.data.filter((data) => data.category === "Free");
      setBook(FilterData);
    }catch(err){
      console.log('error :',err)
    }
   }
   getBook();
  }


  ,[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white">
      <div>
        <h1 className="font-semibold text-2xl pb-2">Free Offered Books</h1>
        <p className="font-extralight text-base-content pb-2  dark:bg-slate-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          pariatur odio incidunt mollitia consequatur iure architecto soluta.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
