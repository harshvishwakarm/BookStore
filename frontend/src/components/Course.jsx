import React, {useState, useEffect } from "react";


import Cards  from "./Cards";
import {Link} from 'react-router-dom';
import axios from 'axios';
function Course() {
  const[book,setBook]=useState([]);
  useEffect(()=>{
   const getBook=async()=>{
    try{
      const res= await axios.get("http://localhost:4003/book");
      console.log(res.data);
      setBook(res.data);
    }catch(err){
      console.log('error :',err)
    }
   }
   getBook();
  }


  ,[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-40 text-center justify-center items-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have your are{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eaque nobis expedita ex accusantium, recusandae, voluptatibus reiciendis  <br></br> nemovoluptatum animi atque quaerat! Temporibus, accusantium maxime.Molestias quis odio repudiandae repellendus? <br></br>nemovoluptatum animi atque quaerat! Temporibus, accusantium maxime.Molestias quis 
          </p>
          <Link to='/'>
          <button className= "bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-100 mt-5">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
