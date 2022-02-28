import { useSelector } from "react-redux";
import { getCount } from "../store/counter";

export function CounterReduxCount() {
  const count = useSelector(getCount);

  return (
    <>
      <h1>Counter Redux</h1>
      <div>{count}</div>
    </>
  );
}
