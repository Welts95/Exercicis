import "./App.css";
import Galeriafotos from "./GaleriaFotos/Galeriafotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";

export default function App() {
  return (
    <div className="App">
      <Galeriafotos />
      <Comptador />
      <Acordio />
      <Carrusel />
    </div>
  );
}
