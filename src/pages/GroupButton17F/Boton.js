export default function Boton({ botons, clase, clicat }) {
  return (
    <>
      {botons.map((n, index) => (
        <button
          className={
            clase +
            (botons.includes(index) ? " GroupButton17F-boton--premut" : "")
          }
          key={index}
          onClick={() => clicat(n)}
        >
          {n}
        </button>
      ))}
    </>
  );
}
