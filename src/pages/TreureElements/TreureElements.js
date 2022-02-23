import "./TreureElements.css";
import MostrarArray from "./MostrarArray";
import Repetits from "./Repetits";
import NoRepetits from "./NoRepetits";

export default function TreureElements() {
  const vector = [
    45, 155, 8, 85, 79, 85, 46, 15, 95, 65, 32, 15, 6, 48, 79, 45, 8, 155, 98,
  ];

  return (
    <>
      <h1>Treure Elements</h1>
      <div className="TreureElements">
        <MostrarArray array={vector} />
        <Repetits array={vector} />
        <NoRepetits array={vector} />
        <br />
      </div>
    </>
  );
}
