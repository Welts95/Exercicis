/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./TipCalculator.css";

export default function TipCalculator() {
  const [num, setNum] = useState(0);
  const [propina, setPropina] = useState(0);
  const [total, setTotal] = useState(0);

  const comprobarPropina = (percentatge) => {
    percentatge >= 0
      ? setPropina(percentatge)
      : alert("No pots posar un % negatiu!");
  };
  const comprobarNum = (preu) => {
    preu >= 0 ? setNum(preu) : alert("El preu no pot ser negatiu!");
  };
  const calcularPropina = (preu, percentatge) => {
    console.log(percentatge);
    percentatge !== 0
      ? setTotal(parseFloat(preu) + parseFloat((percentatge / 100) * preu))
      : null;
  };

  return (
    <>
      <h1>Tip Calculator</h1>
      <div className="TipCalculator__Container">
        <label>{"Preu: "}</label>
        <input
          className="TipCalculator__Input"
          type="number"
          value={num}
          onChange={(event) => (
            comprobarNum(event.target.value), calcularPropina(num, propina)
          )}
        />
        <label>€</label>
        <br />
        <label>{"Propina: "}</label>
        <input
          className="TipCalculator__Input"
          type="number"
          value={propina}
          onChange={(event) => (
            comprobarPropina(event.target.value), calcularPropina(num, propina)
          )}
        />
        <label>%</label>
        <br />
        <label>{"Total: "}</label>
        <input className="TipCalculator__Input" type="number" value={total} />
        <label>€</label>
        <br />
      </div>
    </>
  );
}
