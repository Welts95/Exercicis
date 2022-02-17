import "./App.css";
import Galeriafotos from "./GaleriaFotos/Galeriafotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import ToggleButton17F from "./ToggleButton17F/ToggleButton17F";

export default function App() {
  return (
    <div className="App">
      <Galeriafotos />
      <Comptador />
      <Acordio />
      <Carrusel />
      <ToggleButton17F />
    </div>
  );
}
