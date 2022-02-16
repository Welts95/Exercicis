export default function MostrarImatge({ imatge }) {
  return (
    <>
      <img className="Foto" src={imatge} alt="No ha cargat la foto :(" />
    </>
  );
}
