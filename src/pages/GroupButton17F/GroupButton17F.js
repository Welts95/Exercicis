/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./GroupButton17F.css";
import Boton from "./Boton";

export default function GroupButton17F() {
  const [display, setDisplay] = useState("CAP");
  const [idActual, setId] = useState(0);

  const botons = ["Botó A", "Botó B", "Botó C"];

  const cambiarText = (text) => {
    display !== text ? setDisplay(text) : null;
  };

  return (
    <>
      <h1>Group Button</h1>
      <div className="GroupButton17F">
        <Boton
          botons={botons}
          clase={"GroupButton17F-boton"}
          clicat={cambiarText}
          id={(idActual, setId)}
        />
        <div className="GroupButton17F__Texto">{display}</div>
      </div>
    </>
  );
}
