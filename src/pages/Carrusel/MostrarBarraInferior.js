export default function MostrarBarraInferior({ imatges, id, puntclicat }) {
  return (
    <div className="BarraInferior">
      {imatges.map((n, index) => (
        <label key={n} className="Punt" onClick={() => puntclicat(n, index)}>
          {index === id ? "🚶" : " · "}
        </label>
      ))}
    </div>
  );
}
