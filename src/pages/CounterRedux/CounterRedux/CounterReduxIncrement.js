import { useDispatch } from "react-redux";
import { increment } from "../store/counter";

export function CounterReduxIncrement({ amount }) {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment(+amount))}>{amount}</button>;
}
