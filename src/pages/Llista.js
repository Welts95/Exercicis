import Galeriafotos from "./GaleriaFotos/Galeriafotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import ToggleButton17F from "./ToggleButton17F/ToggleButton17F";

const llista = [
  {
    path: "graellafotos",
    titol: "Graella de Fotos",
    element: <Galeriafotos />,
  },
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "acordio", titol: "Acordió", element: <Acordio /> },
  { path: "carrusel", titol: "Carrusel", element: <Carrusel /> },
  {
    path: "togglebutton17f",
    titol: "Toggle Button 17F",
    element: <ToggleButton17F />,
  },
];

export default llista;
