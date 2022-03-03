const InitialState = [
  { tasca: "Primera Tasca", done: false },
  { tasca: "Segona Tasca", done: true },
];

const todoReducer = (state = InitialState, action) => {
  let copy = [...state];
  switch (action.type) {
    case "AFEGIR_TASCA":
      copy.push(action.payload);
      return copy;
    case "BORRAR_TASCA":
      copy.pop();
      return copy;
    case "BORRAR_TASCA_CONCRETA":
      copy.splice(action.payload, 1);
      return copy;
    case "CANVIAR_ESTAT_TASCA":
      copy[action.payload].done === false
        ? (copy[action.payload].done = true)
        : (copy[action.payload].done = false);
      return copy;
    default:
      return state;
  }
};

export default todoReducer;
