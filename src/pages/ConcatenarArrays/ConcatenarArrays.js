import "./ConcatenarArrays.css";
import MostrarArray from "./MostrarArray";

export default function ConcatenarArrays() {
  const array1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const Concatenar = ({ a1, a2 }) => {
    let concatenada = [];
    for (let i = 0; i < a1.length; i++) {
      concatenada.push(a1[i] + a2[i]);
    }
    return (
      <>
        {concatenada.map((n, index) => (
          <label key={n}>
            {n + (index !== concatenada.length - 1 ? ", " : "")}
          </label>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Concatenar Arrays</h1>
      <div className="ConcatenarArrays">
        <MostrarArray text={"1a Array:"} array={array1} />
        <MostrarArray text={"2a Array:"} array={array2} />
        Array Concatenada:
        <br />
        <Concatenar a1={array1} a2={array2} />
        <br />
      </div>
    </>
  );
}
