import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(data.results);
    setPokemons(data.results);
    const urls = data.results.map((item, index) => item.url);
    console.log(urls);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-2">
          {pokemons && pokemons.length
            ? pokemons.map((item, index) => (
                <div className="card" key={index}>
                  <img
                    className="card-img-top"
                    src={item.url}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name} </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
