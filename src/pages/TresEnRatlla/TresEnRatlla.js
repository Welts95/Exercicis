import "./TresEnRatlla.css";
import { juga, reinicia } from "./actions/actions";

import {
  selectTaulell,
  selecthihaGuanyador,
  selectCasellesGuanyadores,
  selectFiDePartida,
} from "./selectors/selectors";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const taulell = useSelector(selectTaulell);
  const hihaGuanyador = useSelector(selecthihaGuanyador);
  const casellesGuanyadores = useSelector(selectCasellesGuanyadores) ?? [];
  const [casellesGuanyadoraA] = casellesGuanyadores;
  const fiDePartida = useSelector(selectFiDePartida);

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
