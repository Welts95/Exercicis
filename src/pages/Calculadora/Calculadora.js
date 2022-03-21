import "./Calculadora.css";
import Botones from "./Botones";
import { useState } from "react";
import Display from "./Display";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function Calculadora() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [display, setDisplay] = useState(0);
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [historial, setHistorial] = useState([]);

  const calcular = () => {
    switch (operacio) {
      case "+":
        return (
          setDisplay(antic + display),
          historial.push(antic, operacio, display, "=", antic + display, ",")
        );
      case "-":
        return (
          setDisplay(antic - display),
          historial.push(antic, operacio, display, "=", antic - display, ",")
        );
      default:
        break;
    }
  };

  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) {
      calcular();
    }
    setOperacio(operacio);
  };

  const netejaDisplay = () => {
    setAntic(0);
    setOperacio("");
    setDisplay(0);
    setHistorial([]);
  };

  return (
    <div className="Calculadora">
      <h1>Calculadora</h1>
      <div className="Calculadora-Container">
        <h2>CASIO</h2>
        <div className="Calculadora-Display">
          <div className="Calculadora-Historic">
            {historial.map((item, i) => {
              return <label key={i}>{item + " "}</label>;
            })}
          </div>
          <Display antic={antic} operacio={operacio} display={display} />
        </div>
        <div className="Calculadora-Botonera">
          <Botones
            numeros={numeros}
            novaEntrada={novaEntrada}
            setNovaEntrada={setNovaEntrada}
            display={display}
            clicar={setDisplay}
          />
        </div>
        <div className="Calculadora-Operadors">
          <button
            className="Calculadora-Boton"
            onClick={() => entraOperacio("+")}
          >
            +
          </button>
          <button
            className="Calculadora-Boton"
            onClick={() => entraOperacio("-")}
          >
            -
          </button>
          <button className="Calculadora-Boton" onClick={calcular}>
            =
          </button>
        </div>
        <button
          onClick={netejaDisplay}
          className="Calculadora-ClearInput"
          type="button"
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}
