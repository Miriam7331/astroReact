import React, { useEffect, useState } from "react";

export function Cats(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name} />
      <p>Descipción: {props.description}</p>
      <p>Origen: {props.origin}</p>
      <p>Temperamento: {props.temperament}</p>
    </div>
  );
}

export default Cats;
