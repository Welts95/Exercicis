import { useState } from "react";
import "./Comptador.css";

export default function Comptador() {
  const [contador, setContador] = useState(0);
  const suma1 = 1;
  const resta1 = -1;
  const suma5 = 5;
  const operacio = (valor) => {
    if (contador + valor >= 0 && contador + valor <= 10) {
      setContador(contador + valor);
    }
  };
  return (
    <>
      <h1>2. Comptador</h1>
      <div className="ContainerComptador">
        <div className="Display">{contador}</div>
        <div className="Botonera">
          <button className="Boton1" onClick={() => operacio(suma1)}>
            +{suma1}
          </button>
          <button className="Boton1" onClick={() => operacio(resta1)}>
            {resta1}
          </button>
          <button className="Boton5" onClick={() => operacio(suma5)}>
            +{suma5}
          </button>
        </div>
      </div>
    </>
  );
}
