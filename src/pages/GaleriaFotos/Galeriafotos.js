/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
import "./Galeria.css";
import { useState } from "react";
import Imatges from "./Imatge";

export default function Galeriafotos() {
  const imatges = [
    "https://www.xtrafondos.com/wallpapers/paisaje-digital-en-atardecer-5846.jpg",
    "http://wallpaperhd.biz/wp-content/uploads/2013/06/Corcega-Francia-wallpaper-hd-1024x576.jpg",
    "http://wallpaperhd.biz/wp-content/uploads/2013/01/wallpaper-hd-nature-02-800x600.jpg",
    "http://wallpaperhd.biz/wp-content/uploads/2013/01/Sky_and_River_wallpaper-hd-800x600.jpg",
    "http://wallpaperhd.biz/wp-content/uploads/2013/02/paisaje-cascada-580x340.jpg",
    "https://www.teahub.io/photos/full/60-602133_fondos-paisajes-de-otoo.jpg",
    "https://portugalinmobiliariasur.cl/wp-content/uploads/2021/03/paisaje.jpg",
    "https://www.solofondos.com/wp-content/uploads/2016/09/wallpapers-primavera-600x375.jpg",
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
