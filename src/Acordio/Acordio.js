import { useState } from "react";
import "./Acordio.css";

function MostrarTexts(titols) {
  return (
    <div>
      {/*titols.map((n) => (
        <label>{n}</label>
      ))*/}
    </div>
  );
}

export default function Acordio() {
  const titols = [
    { titol: "Capítol 1", text: "Contingut del primer capítol" },
    { titol: "Capítol 2", text: "Contingut del segon capítol" },
    { titol: "Capítol 3", text: "Contingut del tercer capítol" },
    { titol: "Capítol 4", text: "Contingut del quart capítol" },
    { titol: "Capítol 5", text: "Contingut del cinqué capítol" },
    { titol: "Capítol 6", text: "Contingut del sisé capítol" },
    { titol: "Capítol 7", text: "Contingut del seté capítol" },
  ];

  let [contador, setContador] = useState();

  return (
    <>
      <h1>3. Acordió</h1>
      <div className="Container">
        <MostrarTexts titols={titols} />
      </div>
    </>
  );
}
