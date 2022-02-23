/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./VectorEnters.css";

export default function VectorEnters() {
  const vector = [10, 20, 30, 40, 50, 60, 70];
  const [major, setMajor] = useState(vector[0]);
  const [menor, setMenor] = useState(vector[0]);
  let suma = 0;
  let mitjana = 0;

  const operacions = (num) => {
    num > major ? setMajor(num) : null;
    num < menor ? setMenor(num) : null;
    suma = suma + num;
  };
  const calcularmitjana = () => {
    mitjana = suma / vector.length;
    return mitjana;
  };
  return (
    <>
      <h1>Vector d'Enters</h1>
      <div className="VectorEnters">
        {"Vector: "}
        {vector.map((n, index) => (
          <label key={n}>
            {n + (index !== vector.length - 1 ? ", " : "")}
            {operacions(n)}
          </label>
        ))}
        <br />
        <br />
        <label>
          Major: {major}
          <br />
        </label>
        <label>
          Menor: {menor}
          <br />
        </label>
        <label>
          Suma: {suma}
          <br />
        </label>
        <label>
          Mitjana: {calcularmitjana()}
          <br />
        </label>
      </div>
    </>
  );
}
