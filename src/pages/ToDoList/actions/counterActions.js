export const afegirTasca = (tasca) => {
  return {
    type: "AFEGIR_TASCA",
    payload: { tasca: tasca, done: false },
  };
};

export const borrarTasca = () => {
  return {
    type: "BORRAR_TASCA",
  };
};

export const borrarTascaConcreta = (posicio) => {
  return {
    type: "BORRAR_TASCA_CONCRETA",
    payload: posicio,
  };
};

export const canviarEstatTasca = (id) => {
  return {
    type: "CANVIAR_ESTAT_TASCA",
    payload: id,
  };
};
