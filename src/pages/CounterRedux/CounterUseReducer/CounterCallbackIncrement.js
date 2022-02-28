import { increment } from "../store/counter";

export function CounterCallbackIncrement({ dispatch, amount }) {
  return <button onClick={() => dispatch(increment(+amount))}>{amount}</button>;
}
