export default function MostrarArray({ text, array }) {
  return (
    <>
      {text}
      <br />
      {array.map((n, index) => (
        <label key={n}>{n + (index !== array.length - 1 ? ", " : "")}</label>
      ))}
      <br />
      <br />
    </>
  );
}
