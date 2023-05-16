import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Description() {
  const [datos, setDatos] = useState([]);
  const [imgs, setImgs] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+ name )
      .then(response => response.json())
      .then(data => {setDatos(data);setImgs(data["sprites"]);}
        );
  }, []);
  return (
    <>
      <div className="row">
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img id={datos.id} src={imgs.front_shiny} alt="img"></img>
            </div>
            <div className="card-content">
              <p>Front shiny</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img id={datos.id} src={imgs.back_shiny} alt="img"></img>
            </div>
            <div className="card-content">
              <p>Back shiny</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img id={datos.id} src={imgs.front_default} alt="img"></img>
            </div>
            <div className="card-content">
              <p>Front default</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img id={datos.id} src={imgs.back_default} alt="img"></img>
            </div>
            <div className="card-content">
              <p>Back default</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;