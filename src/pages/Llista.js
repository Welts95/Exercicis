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
import CounterApp from "./CounterRedux/CounterApp";
import SumadorNumeros from "./SumadorNumeros/SumadorNumeros";
import TipCalculator from "./TipCalculator/TipCalculator";
import ToDoList from "./ToDoList/ToDo";
import TresEnRatlla from "./TresEnRatlla/TresEnRatlla";
import Calculadora from "./Calculadora/Calculadora";

const llista = [
  {
    path: "/",
    titol: "🏠 Home",
  },
  {
    path: "graella-fotos",
    titol: "🖼  Graella de Fotos",
    element: <Galeriafotos />,
  },
  { path: "comptador", titol: "0️⃣ Comptador", element: <Comptador /> },
  { path: "acordio", titol: "🏮 Acordió", element: <Acordio /> },
  { path: "carrusel", titol: "🦲 Carrusel", element: <Carrusel /> },
  {
    path: "toggle-button",
    titol: "🎭 Toggle Button",
    element: <ToggleButton17F />,
  },
  {
    path: "group-button",
    titol: "👨‍👩‍👧‍👦 Group Button",
    element: <GroupButton17F />,
  },
  {
    path: "sumador-numeros",
    titol: "➕ Sumador de Números",
    element: <SumadorNumeros />,
  },
  {
    path: "tres-en-ratlla",
    titol: "🧇 Tres en Ratlla",
    element: <TresEnRatlla />,
  },
  {
    path: "calculadora",
    titol: "🧮 Calculadora",
    element: <Calculadora />,
  },
  {
    path: "rellotge-digital",
    titol: "⌚ Rellotge Digital",
    element: <RellotgeDigital />,
  },
  {
    path: "tip-calculator",
    titol: "💶 Tip Calculator",
    element: <TipCalculator />,
  },
  {
    path: "vector-enters",
    titol: "🔢 Vector Enters",
    element: <VectorEnters />,
  },
  {
    path: "afegir-elements",
    titol: "📥 Afegir Elements",
    element: <AfegirElements />,
  },
  {
    path: "treure-elements",
    titol: "📤 Treure Elements",
    element: <TreureElements />,
  },
  {
    path: "concatenar-arrays",
    titol: "🤝 Concatenar Arrays",
    element: <ConcatenarArrays />,
  },
  {
    path: "counter-usereducer-redux",
    titol: "⚛	Counter useReducer Redux",
    element: <CounterApp />,
  },
  {
    path: "to-do-list-redux",
    titol: "🧾 To Do List Redux",
    element: <ToDoList />,
  },
];

export default llista;
