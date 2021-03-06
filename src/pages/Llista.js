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
    titol: "ð  Home",
  },
  {
    path: "graella-fotos",
    titol: "ð¼  Graella de Fotos",
    element: <Galeriafotos />,
  },
  { path: "comptador", titol: "0ï¸â£ Comptador", element: <Comptador /> },
  { path: "acordio", titol: "ð® AcordiÃ³", element: <Acordio /> },
  { path: "carrusel", titol: "ð¦² Carrusel", element: <Carrusel /> },
  {
    path: "toggle-button",
    titol: "ð­ Toggle Button",
    element: <ToggleButton17F />,
  },
  {
    path: "group-button",
    titol: "ð¨âð©âð§âð¦ Group Button",
    element: <GroupButton17F />,
  },
  {
    path: "sumador-numeros",
    titol: "â Sumador de NÃºmeros",
    element: <SumadorNumeros />,
  },
  {
    path: "tres-en-ratlla",
    titol: "ð§ Tres en Ratlla",
    element: <TresEnRatlla />,
  },
  {
    path: "calculadora",
    titol: "ð§® Calculadora",
    element: <Calculadora />,
  },
  {
    path: "rellotge-digital",
    titol: "â Rellotge Digital",
    element: <RellotgeDigital />,
  },
  {
    path: "tip-calculator",
    titol: "ð¶ Tip Calculator",
    element: <TipCalculator />,
  },
  {
    path: "vector-enters",
    titol: "ð¢ Vector Enters",
    element: <VectorEnters />,
  },
  {
    path: "afegir-elements",
    titol: "ð¥ Afegir Elements",
    element: <AfegirElements />,
  },
  {
    path: "treure-elements",
    titol: "ð¤ Treure Elements",
    element: <TreureElements />,
  },
  {
    path: "concatenar-arrays",
    titol: "ð¤ Concatenar Arrays",
    element: <ConcatenarArrays />,
  },
  {
    path: "counter-usereducer-redux",
    titol: "â	Counter useReducer Redux",
    element: <CounterApp />,
  },
  {
    path: "to-do-list-redux",
    titol: "ð§¾ To Do List Redux",
    element: <ToDoList />,
  },
];

export default llista;
