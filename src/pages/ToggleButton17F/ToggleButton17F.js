/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./ToggleButton17F.css";

export default function ToggleButton17F() {
  const textbotoclicat = "😈Lo has activado! Infectando sistema operativo...😈";
  const textbotonoclicat = "😢El botón de descarga no está activo...😢";
  const [botoClicat, setBotoClicat] = useState(false);
  const [color, setColor] = useState("BotonNormal");
  const [display, setDisplay] = useState(textbotonoclicat);

  const cambiarColor = (botoClicat) => {
    botoClicat === false
      ? (setBotoClicat(true), setColor("Verde"), setDisplay(textbotoclicat))
      : (setBotoClicat(false),
        setColor("BotonNormal"),
        setDisplay(textbotonoclicat));
  };

  return (
    <>
      <h1>Toggle Button</h1>
      <div className="ContainerToggleButton17F">
        <button className={color} onClick={() => cambiarColor(botoClicat)}>
          Descargar AQUÍ!
        </button>
        <br />
        <label>Libre de virus</label>
        <div className="Texto">{display}</div>
      </div>
    </>
  );
}
