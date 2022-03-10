import { Provider } from "react-redux";
import { CounterUseReducer } from "./CounterUseReducer";
import { CounterUseRedux, CounterReduxIncrement } from "./CounterRedux";
import { store } from "./store/store";
import { ToggleRedux } from "./ToggleRedux";

// unic export default
export default function CounterApp() {
  return (
    <Provider store={store}>
      <>
        <ToggleRedux />
        <CounterUseReducer />
        <CounterUseReducer />
        <CounterUseRedux />
        <CounterReduxIncrement amount="+5" />
      </>
    </Provider>
  );
}
