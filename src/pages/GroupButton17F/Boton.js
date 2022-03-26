export default function Boton({ botons, clicat, setColor }) {
  return (
    <>
      {botons.map((n, index) => (
        <button
          className={
            n === clicat
              ? "GroupButton17F-boton--premut"
              : "GroupButton17F-boton"
          }
          key={index}
          onClick={() => setColor(n)}
        >
          {n}
        </button>
      ))}
    </>
  );
}
