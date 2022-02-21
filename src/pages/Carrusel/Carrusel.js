/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./Carrusel.css";
import MostrarBarraInferior from "./MostrarBarraInferior";
import MostrarImatge from "./MostrarImatge";

export default function Carrusel() {
  const imatges = [
    "https://free4kwallpapers.com/uploads/originals/2015/10/23/lit-serpentine-to-the-sea-wallpaper.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/10/11/nature-summer-road-serpentine-landscapes-wallpaper.jpg",
    "https://i.pinimg.com/originals/23/31/54/2331546261d4ff625e83b5716acc0951.jpg",
    "https://c1.wallpaperflare.com/preview/158/170/361/road-landscapes-america-clouds.jpg",
    "https://wallpaperstock.net/wallpapers/thumbs1/44483wide.jpg",
    "https://wallpaperaccess.com/full/118038.jpg",
    "https://wallpapercave.com/wp/wp3064618.jpg",
    "https://i.redd.it/uxi6ewe1ac561.jpg",
  ];
  const [imatgeActual, setImatgeActual] = useState(imatges[0]);
  const [idActual, setId] = useState(0);

  const cambiarImg = (accio) => {
    idActual + accio >= 0 && idActual + accio <= imatges.length - 1
      ? (setId(idActual + accio), setImatgeActual(imatges[idActual + accio]))
      : null;
  };

  const imatgeClicada = (imatge, clicat) => {
    setImatgeActual(imatge);
    setId(clicat);
  };

  return (
    <>
      <h1>Carrusel</h1>
      <div className="ContenedorCarrusel">
        <button className="Boton" onClick={() => cambiarImg(-1)}>
          {"<"}
        </button>
        <MostrarImatge imatge={imatgeActual} />
        <button className="Boton" onClick={() => cambiarImg(+1)}>
          {">"}
        </button>
        <MostrarBarraInferior
          imatges={imatges}
          id={idActual}
          puntclicat={imatgeClicada}
        />
      </div>
    </>
  );
}
