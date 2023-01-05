
import React, { useEffect, useState } from "react";


import Swal from "sweetalert2";
import "./style.scss";
const Home = () => {
  
  const lista = [
    "pizzas juan",
    "pizza picolo",
    "pizza carlota",
    "carlos pizza",
    "pizza picolo",
    "pizza dominos",
    "pizza daikmaku",
    " pizza lauras",
    " kakos pizza",
  ];
  const [dado, setDado] = useState(false);

  useEffect(() => {
    if (dado) {
    }
    if (dado === false) {
    }
  }, [dado]);

 
  const changeDado = () => {
    setDado(true);
    setTimeout(() => {
      const x = Math.floor(Math.random() * lista.length);
      console.log(x);
      const y = lista.at(x);
      console.log(y);
      Swal.fire("tu restaurante sera", `${y}`, "info");
    }, 1000);

    setTimeout(() => {
      setDado(false);
    }, 2000);
  };

  const searcInfo= async()=>{
    // await client.getPhotosByUsername({ carlos: 'unicorn' })

  }

  
  return (
<>

    <div className="contenedor">
      {dado ? (
        <div className={"dado"}>
          <div className="lado uno"></div>
          <div className="lado dos"></div>
          <div className="lado tres"></div>
          <div className="lado cuatro"></div>
          <div className="lado cinco"></div>
          <div className="lado seis"></div>
        </div>
      ) : (
        <div onClick={changeDado} className={"dados"}>
          <div className="lado uno"></div>
          <div className="lado dos"></div>
          <div className="lado tres"></div>
          <div className="lado cuatro"></div>
          <div className="lado cinco"></div>
          <div className="lado seis"></div>
        </div>
      )}
      
    </div>
    <button onClick={searcInfo}>Buscar info </button>
    <div className="filtros">

    <select> filtrar por lugar
        <option>filtrar por lugar </option>
        <option> </option>
        <option> </option>
    </select>
    <select> rango de precios
    <option>filtrar por categoria </option>
        <option> </option>
        <option> </option>
    </select>
    </div>

</>
  );
};

export default Home;
