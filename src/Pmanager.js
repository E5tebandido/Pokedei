import React from "react";
import Pokemon from './Pokemon';

function Pmanager() {
  const s = 0+1, f = 20+1;
  return (
    <>
      <div className="row">
        {Array(f).fill(0,s).map((el, i) =>
          <Pokemon num={i}/>
        )}
      </div> 
    </>
  );
}

export default Pmanager;