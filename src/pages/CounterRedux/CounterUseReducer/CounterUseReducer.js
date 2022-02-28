import { useReducer } from "react";
import { counter } from "../store/counter";
import { CounterCallbackIncrement } from "./CounterCallbackIncrement";
import { CounterCallbackReset } from "./CounterCallbackReset";
import { CounterUseReducerCount } from "./CounterUseReducerCount";

export function CounterUseReducer() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <>
      <CounterUseReducerCount count={count} />
      <CounterCallbackIncrement dispatch={dispatch} amount={"+1"} />
      <CounterCallbackIncrement dispatch={dispatch} amount={"-1"} />
      <CounterCallbackReset dispatch={dispatch} amount={"Reset"} />
    </>
  );
}
