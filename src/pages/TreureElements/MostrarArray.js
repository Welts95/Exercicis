export default function MostrarArray({ array }) {
  return (
    <>
      {"Vector original: "}
      <br />[
      {array.map((n, index) => (
        <label key={index}>
          {n + (index !== array.length - 1 ? ", " : "")}
        </label>
      ))}
      ]
      <br />
      <br />
    </>
  );
}
