import "./App.css";
import Galeriafotos from "./GaleriaFotos/Galeriafotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";

export default function App() {
  return (
    <div className="App">
      <Galeriafotos />
      <Comptador />
      <Acordio />
    </div>
  );
}
