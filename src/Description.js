import React from "react";
import { useParams } from "react-router-dom";

function Description() {
  const {name} = useParams();
  console.log({name});
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default Description;