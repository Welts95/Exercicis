import { useDispatch, useSelector } from "react-redux";
import { getActivat, toggleActive, off, on } from "./store/toggle";

export function ToggleRedux() {
  const dispatch = useDispatch();
  const activat = useSelector(getActivat);

  return (
    <>
      <h1>Toggle Redux</h1>
      Activat: {activat ? "SI" : "NO"} <br />
      <button onClick={() => dispatch(toggleActive())}>Togglejar</button>
      <button onClick={() => dispatch(off())}>Off</button>
      <button onClick={() => dispatch(on())}>On</button>
    </>
  );
}
