import { useState, useEffect } from "react";
import { DiaEnText, MesEnText } from "./DiaEnText";
import "./RellotgeDigital.css";

export default function RellotgeDigital() {
  const [count, setCount] = useState(0);
  const [mostrarData, setMostrarData] = useState("RellotgeDigital__Data");
  const [textBoto, setTextBoto] = useState("Amagar Data");

  let avui = new Date();
  let currentHours = avui.getHours();
  let currentMinutes = avui.getMinutes();
  let currentSeconds = avui.getSeconds();

  const dosDigits = (valor) => {
    return ("0" + valor).slice(-2);
  };

  currentHours = dosDigits(currentHours);
  currentMinutes = dosDigits(currentMinutes);
  currentSeconds = dosDigits(currentSeconds);

  let dataActual =
    DiaEnText(avui.getDay()) +
    ", " +
    dosDigits(avui.getDate()) +
    " de " +
    MesEnText(avui.getMonth() + 1) +
    " del " +
    avui.getFullYear();
  let horaActual = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  useEffect(() => {
    setInterval(() => {
      setCount((n) => n + 1);
    }, 1000);
  }, []);

  const cambiardata = (valor) => {
    return valor === "RellotgeDigital__AmagarData"
      ? (setMostrarData("RellotgeDigital__Data"), setTextBoto("Amagar Data"))
      : (setMostrarData("RellotgeDigital__AmagarData"),
        setTextBoto("Mostrar Data"));
  };

  return (
    <>
      <h1>Rellotge Digital</h1>
      <div className="RellotgeDigital__Display">
        <h2 className="RellotgeDigital__Hora">{horaActual}</h2>
        <h3 className={mostrarData}>{dataActual} </h3>
      </div>
      <button
        className="RellotgeDigital__BotoData"
        onClick={() => cambiardata(mostrarData)}
      >
        {textBoto}
      </button>
    </>
  );
}
