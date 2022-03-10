const JUGA = "tresEnRatlla/JUGA";
export function juga(indexCasella) {
  return { type: JUGA, indexCasella };
}

const REINICIA = "tresEnRatlla/REINICIA";
export function reinicia() {
  return { type: REINICIA };
}

const combinacionsGuanyadores = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

export function getTaulell(state) {
  return state.tresEnRatlla;
}

export function gethihaGuanyador(state) {
  return !!getCasellesGuanyadores(state);
}

export function getCasellesGuanyadores(state) {
  const taulell = getTaulell(state);
  return combinacionsGuanyadores.find(
    ([a, b, c]) =>
      taulell[a] && taulell[a] === taulell[b] && taulell[a] === taulell[c]
  );
}

export function getFiDePartida(state) {
  const taulell = getTaulell(state);
  return taulell.every((peça) => peça !== "" || gethihaGuanyador(state));
}

export const initialTaulell = ["", "", "", "", "", "", "", "", ""];

export function tresEnRatlla(state = initialTaulell, action) {
  switch (action.type) {
    case JUGA: {
      const hihaGuanyador = gethihaGuanyador({ tresEnRatlla: state });
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
