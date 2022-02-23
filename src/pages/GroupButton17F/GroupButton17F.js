/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./GroupButton17F.css";
import Boton from "./Boton";

export default function GroupButton17F() {
  const [color, setColor] = useState("GroupButton17F__BotonNormal");
  const [display, setDisplay] = useState("CAP");
  const [idActual, setId] = useState(0);

  const botons = ["Botó A", "Botó B", "Botó C"];

  const cambiarText = (text) => {
    display !== text ? setDisplay(text) : null;
  };
  const cambiarColor = (id) => {
    idActual === id
      ? setColor("GroupButton17F__Premut")
      : setColor("GroupButton17F__BotonNormal");
  };

  return (
    <>
      <h1>Group Button</h1>
      <div className="GroupButton17F">
        <Boton botons={botons} clase={color} clicat={cambiarText} />
        <div className="GroupButton17F__Texto">{display}</div>
      </div>
    </>
  );
}
