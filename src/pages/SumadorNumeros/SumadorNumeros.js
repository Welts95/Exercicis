/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./SumadorNumeros.css";

export default function SumadorNumeros() {
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);

  const afegirNum = (num) => {
    parseInt(num) || num === 0
      ? setTotal(total + parseInt(num))
      : (setNum(0), alert("no has introduit un número enter"));
  };

  return (
    <>
      <h1>Sumador de Números</h1>
      <div className="SumadorNumeros__Container">
        <label>{"Valor: "}</label>
        <input
          type="number"
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />
        <br />
        <label>{"Total: "}</label>
        <input type="number" value={total} />
        <br />
        <button
          className="SumadorNumeros__Boton"
          onClick={() => afegirNum(num)}
        >
          SUMAR
        </button>
      </div>
    </>
  );
}
