import { useDispatch, useSelector } from "react-redux";
import { increment, reset, getCount } from "./counter";

export default function CounterUseRedux() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter Redux</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
