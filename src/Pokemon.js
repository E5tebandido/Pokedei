import React, { useEffect, useState } from 'react';
import './Pokemon.css';
import pb from './img/pb.png';
import {useNavigate} from 'react-router-dom';

function Pokemons(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  var handleClick = (e) => {
    navigate("/Pokemon/"+e.target.textContent, { state: items });
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+ props.num)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return (
      <>  
        <div className="col s12 m3">
          <div className="card">
            <p>no known</p>
          </div>
        </div>  
      </>
    );
  } else if (!isLoaded) {
    return (
      <div className="pokeball">
        <img src={pb} height="20px"/>
      </div>
    );
  } else {
    console.log(items)
    return (
      <>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img  key={items.id} className="activator" src={items["sprites"]["other"]["dream_world"].front_default} alt={items.name} width="70" height="270"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4" onClick={handleClick.bind(this)}>{items.name}</span>
              <p><b>height:</b> {items.height}m</p>
              <p><b>weight:</b> {items.weight}kg</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{items.name}<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div> 
      </>
    );
  }
}
export default Pokemons;

