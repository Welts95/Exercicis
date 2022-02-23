export default function NoRepetits({ array }) {
  const arrayNoRepes = array.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  return (
    <>
      {"Vector sense repetits: "}
      <br />
      {arrayNoRepes.map((n, index) => (
        <label key={n}>
          {n + (index !== arrayNoRepes.length - 1 ? ", " : "")}
        </label>
      ))}
      <br />
      <br />
    </>
  );
}
