/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./AfegirElements.css";
import MostrarArray from "./MostrarArray";

export default function AfegirElements() {
  const [vector, setVector] = useState([10, 20, 30, 40, 50, 60, 70]);
  const [num, setNum] = useState();
  const [pos, setPos] = useState();

  const afegirNum = (num, posicio) => {
    num !== null && num !== ""
      ? posicio <= vector.length && posicio >= 0
        ? (vector.splice(posicio, 0, num),
          setVector(vector),
          setNum(""),
          setPos(""))
        : (alert("No pots introduir el número a aquesta posició"), setPos(""))
      : (alert("No has introduit cap número"), setNum(""));
  };

  return (
    <>
      <h1>Afegir Elements</h1>
      <div className="AfegirElements">
        <MostrarArray array={vector} />
        <br />
        <br />
        Número a introduir:{" "}
        <input
          type="number"
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />
        <br />
        Posició:{" "}
        <input
          type="number"
          value={pos}
          onChange={(event) => setPos(event.target.value)}
        />
        <br />
        <button onClick={() => afegirNum(num, pos)}>Introduir</button>
      </div>
    </>
  );
}
