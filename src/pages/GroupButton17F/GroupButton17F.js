/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./GroupButton17F.css";
import Boton from "./Boton";

export default function GroupButton17F() {
  const botons = ["Botó A", "Botó B", "Botó C"];

  const [display, setDisplay] = useState("CAP");
  const [clicat, setClicat] = useState("");

  const cambiarText = (text) => {
    display !== text ? setDisplay(text) : null;
    clicat && display === text ? setClicat("") : setClicat(text);
  };

  return (
    <>
      <h1>Group Button</h1>
      <div className="GroupButton17F">
        <Boton botons={botons} setColor={cambiarText} clicat={clicat} />
        <div className="GroupButton17F__Texto">{display}</div>
      </div>
    </>
  );
}
