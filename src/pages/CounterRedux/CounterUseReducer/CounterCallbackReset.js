import { reset } from "../store/counter";

export function CounterCallbackReset({ dispatch }) {
  return <button onClick={() => dispatch(reset())}>Reset</button>;
}
