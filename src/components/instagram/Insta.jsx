import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./style.scss";

const Insta = () => {
  const [datag, setDatag] = useState([]);
  const [value, setValue] = useState(1);
  //   const [pjs, setPjs] = useState([localStorage.getItem("pjs")]);

  const soli = async () => {
    const API_TARGET = "https://rickandmortyapi.com/api/character";
    const { data } = await axios.get(API_TARGET);
    console.log(data);
    console.log(data.results);
    setDatag(data.results);
  };
  const soli2 = async () => {
    const API_TARGES = `https://rickandmortyapi.com/api/character?page=${value}`;
    console.log(API_TARGES);
    const { data } = await axios.get(API_TARGES);
    console.log(data);
    console.log(data.results);
    setDatag(data.results);
  };
  //   const savePj = (name) => {
  //     console.log(name);
  //     setPjs([...pjs, name]);
  //     localStorage.setItem("pjs", pjs);
  //   };
  const page = (p) => {
    if (p === "resta") {
      if (value > 1) {
        setValue(value - 1);
      }
    }
    if (p === "suma") {
      if (value < 42) {
        setValue(value + 1);
      }
    }
  };
  useEffect(() => {
    if (value <= 1) {
      soli();
    }
    if (value > 1 && value < 42) {
      console.log("aqui");
      soli2();
    }
    console.log("");
  }, [value]);
  const kill = () => {
    const kill = [...datag];
    kill.forEach((character) => (character.status = "Dead"));
    setDatag(kill);
  };
  const Revive = () => {
    const revive = [...datag];
    revive.forEach((character) => (character.status = "Alive"));
    setDatag(revive);
  };
  const action = (action, index) => {
    console.log(action, index);

    if (action === "Alive") {
      const copy = [...datag];
      copy[index].status = "Dead";
      // setDatag(...copy)
      console.log(copy);
      setDatag(copy);
    }
    if (action === "Dead") {
      const copy = [...datag];
      copy[index].status = "Alive";
      // setDatag(...copy)
      console.log(copy);
      setDatag(copy);
    }
    if (action === "unknown") {
      const copy = [...datag];
      copy[index].status = "Dead";
      // setDatag(...copy)
      console.log(copy);
      setTimeout(() => {
        Swal.fire("...", "searching ", "info");
      }, 1000);
      setTimeout(() => {
        setDatag(copy);
      }, 2000);
    }
  };

  return (
    <div>
      <h1> Rick y morty api</h1>

      <button className="btn btn-danger" onClick={kill}>
        Kill all characters{" "}
      </button>
      <button
        className="btn btn-success
      "
        onClick={Revive}
      >
        Revive all characters
      </button>

      {datag.length ? (
        <section className="container">
          <div className="row">
            {datag.map((item, index) => (
              <div className="col-md-4 mb-2" key={`${index}-${item.name}`}>
                <div className="card-col-6">
                  <img
                    className="card-img-top"
                    src={item.image ? item.image : "item.url"}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.name ? item.name : ""}{" "}
                    </h5>
                    <div className="d-flex gap-2">
                      <span
                        className={`background-${
                          item.status === "Alive"
                            ? "alive"
                            : "" || item.status === "Dead"
                            ? "dead"
                            : "" || item.status === "unknown"
                            ? "unknown"
                            : ""
                        }`}
                      >
                        {" "}
                      </span>
                      <p className="card-text">{item.status} </p>
                    </div>

                    <div className="card-footer d-grid col-12 gap-2">
                      {item.status === "Alive" ? (
                        <button
                          onClick={() => {
                            action(item.status, index);
                          }}
                          href="#"
                          className="btn btn-danger"
                        >
                          Kill
                        </button>
                      ) : "" || item.status === "Dead" ? (
                        <button
                          onClick={() => {
                            action(item.status, index);
                          }}
                          href="#"
                          className="btn btn-success"
                        >
                          Revive
                        </button>
                      ) : "" || item.status === "unknown" ? (
                        <button
                          onClick={() => {
                            action(item.status, index);
                          }}
                          href="#"
                          className="btn btn-warning"
                        >
                          Find
                        </button>
                      ) : (
                        ""
                      )}

                      <p className="card-text" >Location:{item.location.name} </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
            
          </div>
        </section>
      ) : (
        ""
      )}
      <div className="card-footer d-flex justify-content-center gap-2 ">
              <button
                className="btn btn-warning"
                onClick={() => {
                  page("resta");
                }}
              >
                regresar{" "}
              </button>
              <span>{value} </span>
              <button
                className="btn btn-warning"
                onClick={() => {
                  page("suma");
                }}
              >
                pasar pagina{" "}
              </button>
            </div>
      
    </div>
  );
};

export default Insta;
