/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./Acordio.css";
import MostrarTexts from "./MostrarTexts";

export default function Acordio() {
  const posts = [
    { id: 1, titol: "Capítol 1", text: "Contingut del primer capítol" },
    { id: 2, titol: "Capítol 2", text: "Contingut del segon capítol" },
    { id: 3, titol: "Capítol 3", text: "Contingut del tercer capítol" },
    { id: 4, titol: "Capítol 4", text: "Contingut del quart capítol" },
    { id: 5, titol: "Capítol 5", text: "Contingut del cinqué capítol" },
    { id: 6, titol: "Capítol 6", text: "Contingut del sisé capítol" },
    { id: 7, titol: "Capítol 7", text: "Contingut del seté capítol" },
  ];

  const [clase, setClase] = useState("Amagar");
  const [titol, setTitol] = useState(null);
  const [titolClicat, setTitolClicat] = useState(null);

  const MostrarContingut = (titolClicat, id) => {
    clase === "Contingut"
      ? (setClase("Amagar"), setTitol(null))
      : (setClase("Contingut"), setTitol(titolClicat), setTitolClicat(id));
  };

  return (
    <>
      <h1>3. Acordió</h1>
      <div className="ContainerAcordio">
        <MostrarTexts
          posts={posts}
          clicat={MostrarContingut}
          clase={clase}
          titol={titol}
          id={titolClicat}
        />
      </div>
    </>
  );
}
