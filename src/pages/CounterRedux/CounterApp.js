import { combineReducers, createStore } from "redux";
import { counter } from "./counter";
import { Provider } from "react-redux";
import CounterUseRedux from "./CounterRedux";
import CounterUseReducer from "./CounterUseReducer";

const reducer = combineReducers({ counter });

const store = createStore(reducer);

export default function CounterApp() {
  return (
    <Provider store={store}>
      <>
        <CounterUseReducer />
        <CounterUseRedux />
      </>
    </Provider>
  );
}
