import "./TresEnRatlla.css";

import {
  getTaulell,
  juga,
  gethihaGuanyador,
  getCasellesGuanyadores,
  reinicia,
  getFiDePartida,
} from "./reducers/tresEnRatllaReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const taulell = useSelector(getTaulell);
  const hihaGuanyador = useSelector(gethihaGuanyador);
  const casellesGuanyadores = useSelector(getCasellesGuanyadores) ?? [];
  const [casellesGuanyadoraA] = casellesGuanyadores;
  const fiDePartida = useSelector(getFiDePartida);

  return (
    <>
      <h1>Tres en Ratlla</h1>
      <div className="Container-Exterior">
        <div className="ContainerTresEnRatlla">
          {taulell.map((peça, indexCasella) => (
            <button
              key={indexCasella}
              className={
                "TresEnRatlla-casella" +
                (casellesGuanyadores.includes(indexCasella)
                  ? " TresEnRatlla-casella--winner"
                  : "")
              }
              onClick={() => dispatch(juga(indexCasella))}
            >
              {peça}
            </button>
          ))}
        </div>
      </div>
      {hihaGuanyador && (
        <div>
          <br />
          Guanya el jugador {taulell[casellesGuanyadoraA]}!
        </div>
      )}
      {fiDePartida && (
        <div>
          <button
            className="TresEnRatlla-butonAcabar"
            onClick={() => dispatch(reinicia())}
          >
            Torna a començar
          </button>
        </div>
      )}
    </>
  );
}

export default App;
