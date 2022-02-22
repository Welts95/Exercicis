/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
import "./Galeria.css";
import { useState } from "react";
import Imatges from "./Imatge";
import galeria1 from "./images/galeria1.jpg";
import galeria2 from "./images/galeria2.jpg";
import galeria3 from "./images/galeria3.jpg";
import galeria4 from "./images/galeria4.jpg";
import galeria5 from "./images/galeria5.jpg";
import galeria6 from "./images/galeria6.jpg";
import galeria7 from "./images/galeria7.jpg";
import galeria8 from "./images/galeria8.jpg";

export default function Galeriafotos() {
  const imatges = [
    galeria1,
    galeria2,
    galeria3,
    galeria4,
    galeria5,
    galeria6,
    galeria7,
    galeria8,
  ];

  const [graella, setGraella] = useState("ContainerGaleria");
  const [imatge, setImatge] = useState();

  const cambiarImg = (imatgeClicada) => {
    graella === "ContainerGaleria"
      ? (setGraella("Imatge"), setImatge(imatgeClicada))
      : (setGraella("ContainerGaleria"), setImatge());
  };
  return (
    <>
      {graella === "ContainerGaleria" ? (
        <>
          <h1>Graella de fotos</h1>
          <div className={graella}>
            <Imatges galeria={imatges} clicat={cambiarImg} />
          </div>
        </>
      ) : (
        <>
          <div className={graella}>
            <img src={imatge} alt="Imatge" onClick={cambiarImg} />
          </div>
        </>
      )}
    </>
  );
}
