export default function Imatges({ galeria, clicat }) {
  return (
    <>
      {galeria.map((n) => (
        <img
          className="Imatge-graella"
          src={n}
          alt="Imatge"
          key={n}
          onClick={() => clicat(n)}
        />
      ))}
    </>
  );
}
