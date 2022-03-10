import { createSelector } from "reselect";

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

export function selectTaulell(state) {
  return state.tresEnRatlla;
}

export function selecthihaGuanyador(state) {
  return !!selectCasellesGuanyadores(state);
}

export const selectCasellesGuanyadores = createSelector(
  selectTaulell,
  (taulell) => {
    return combinacionsGuanyadores.find(
      ([a, b, c]) =>
        taulell[a] && taulell[a] === taulell[b] && taulell[a] === taulell[c]
    );
  }
);

export function selectFiDePartida(state) {
  const taulell = selectTaulell(state);
  return taulell.every((peça) => peça !== "" || selecthihaGuanyador(state));
}
