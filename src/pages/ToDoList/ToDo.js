import "./ToDo.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  afegirTasca,
  borrarTasca,
  borrarTascaConcreta,
  canviarEstatTasca,
} from "./actions/counterActions";

function App() {
  const todolist = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const setInput = (e) => {
    setText(e.target.value);
  };

  const comprovarText = (text) => {
    text !== "" ? setTasca() : alert("No has introduit cap text");
  };

  const setTasca = () => {
    dispatch(afegirTasca(text));
    setText("");
  };

  const deleteTasca = () => {
    dispatch(borrarTasca());
  };

  const eliminarTascaConcreta = (index) => {
    dispatch(borrarTascaConcreta(index));
  };

  const mostrarEstatTasca = (estat) => {
    let mostrar = "";
    estat ? (mostrar = "DONE ✅") : (mostrar = "TO DO ❌");
    return mostrar;
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="ContainerToDo">
        <ul>
          {todolist.map((n, i) => (
            <li key={i} className="Llista">
              {n.tasca}
              <b
                className="Estat"
                onClick={() => dispatch(canviarEstatTasca(i))}
              >
                {mostrarEstatTasca(n.done)}
              </b>
              <b
                className="Icon_papelera"
                onClick={() => eliminarTascaConcreta(i)}
              >
                🗑️
              </b>
            </li>
          ))}
        </ul>
        Introdueix una tasca:
        <br />
        <input value={text} onChange={setInput}></input>
        <button className="ToDo__button-afegir" onClick={comprovarText}>
          INTRODUIR
        </button>
        <br />
        <button className="ToDo__button" onClick={deleteTasca}>
          BORRAR
        </button>
      </div>
    </>
  );
}

export default App;
