export default function MostrarArray({ array }) {
  return (
    <>
      {"Vector: "}[
      {array.map((n, index) => (
        <label key={n}>{n + (index !== array.length - 1 ? ", " : "")}</label>
      ))}
      ]
    </>
  );
}
