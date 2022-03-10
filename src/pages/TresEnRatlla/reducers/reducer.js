import { JUGA, REINICIA } from "../actions/actions";
import { selecthihaGuanyador } from "../selectors/selectors";

export const initialTaulell = ["", "", "", "", "", "", "", "", ""];

export function tresEnRatlla(state = initialTaulell, action) {
  switch (action.type) {
    case JUGA: {
      const hihaGuanyador = selecthihaGuanyador({ tresEnRatlla: state });
      if (hihaGuanyador) return state;

      const jugadorActual = calculaJugadorActual(state);
      const indexCasella = action.indexCasella;
      if (state[indexCasella]) return state;

      const copy = [...state];
      copy[indexCasella] = jugadorActual;
      return copy;
    }
    case REINICIA:
      return initialTaulell;
    default:
      return state;
  }
}

function calculaJugadorActual(taulell) {
  const numeroDeJugades = taulell.filter((peça) => peça !== "").length;
  if (numeroDeJugades % 2 === 0) return "X";
  return "O";
}
