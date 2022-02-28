import { CounterReduxCount } from "./CounterReduxCount";
import { CounterReduxIncrement } from "./CounterReduxIncrement";
import { CounterReduxReset } from "./CounterReduxReset";

export function CounterUseRedux() {
  return (
    <>
      <CounterReduxCount />
      <CounterReduxIncrement amount={"+1"} />
      <CounterReduxIncrement amount={"-1"} />
      <CounterReduxReset />
    </>
  );
}
