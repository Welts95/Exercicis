export default function Boton({ botons, clase, clicat }) {
  return (
    <>
      {botons.map((n, index) => (
        <button className={clase} key={n} onClick={() => clicat(n)}>
          {/*PASAR VARIAS FUNCIONES OJTIO!*/}
          {n}
        </button>
      ))}
    </>
  );
}
