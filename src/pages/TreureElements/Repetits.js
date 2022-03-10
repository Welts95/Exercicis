export default function Repetits({ array }) {
  let repetits = [];
  const tempArray = [...array].sort();

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      repetits.push(tempArray[i]);
    }
  }
  return (
    <>
      {"Vector dels repetits: "}
      <br />[
      {repetits.map((n, index) => (
        <label key={n}>{n + (index !== repetits.length - 1 ? ", " : "")}</label>
      ))}
      ]
      <br />
      <br />
    </>
  );
}
