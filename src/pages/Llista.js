import Galeriafotos from "./GaleriaFotos/Galeriafotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import ToggleButton17F from "./ToggleButton17F/ToggleButton17F";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import GroupButton17F from "./GroupButton17F/GroupButton17F";
import VectorEnters from "./VectorEnters/VectorEnters";
import AfegirElements from "./AfegirElements/AfegirElements";
import TreureElements from "./TreureElements/TreureElements";
import ConcatenarArrays from "./ConcatenarArrays/ConcatenarArrays";

const llista = [
  {
    path: "/",
    titol: "🏠 Home",
  },
  {
    path: "graellafotos",
    titol: "🖼  Graella de Fotos",
    element: <Galeriafotos />,
  },
  { path: "comptador", titol: "🧮 Comptador", element: <Comptador /> },
  { path: "acordio", titol: "🏮 Acordió", element: <Acordio /> },
  { path: "carrusel", titol: "🦲 Carrusel", element: <Carrusel /> },
  {
    path: "togglebutton",
    titol: "🎭 Toggle Button",
    element: <ToggleButton17F />,
  },
  {
    path: "groupbutton",
    titol: "👨‍👩‍👧‍👦 Group Button",
    element: <GroupButton17F />,
  },
  {
    path: "rellotgedigital",
    titol: "⌚ Rellotge Digital",
    element: <RellotgeDigital />,
  },
  {
    path: "vectorenters",
    titol: "🔢 Vector Enters",
    element: <VectorEnters />,
  },
  {
    path: "afegirelements",
    titol: "📥 Afegir Elements",
    element: <AfegirElements />,
  },
  {
    path: "treureelements",
    titol: "📤 Treure Elements",
    element: <TreureElements />,
  },
  {
    path: "concatenararrays",
    titol: "🤝 Concatenar Arrays",
    element: <ConcatenarArrays />,
  },
];

export default llista;
