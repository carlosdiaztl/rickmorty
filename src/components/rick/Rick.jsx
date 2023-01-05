import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.scss' 
const Rick = () => {
    const [characters,setCharacters] =useState([]);
  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const {data} = await axios.get(url);
    
    setCharacters(data.results);
    console.log(characters);
  };
  useEffect(() => {
    getData()
    
    
  }, [!characters.length]);
  return <div className="content">
  <div className="rows"> 
  {characters && characters.length?
  characters.map((pj,index)=>(
    <div className="col-md-4 mb-2" key={index} >
    <div className="card-col-6"> 
  <img className="card-img-top" src={pj.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{pj.name} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
  ))
   :""
  }
  </div>
  </div>;
};

export default Rick;
