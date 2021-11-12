import { useReducer, useState } from "react";
import css from "./Counter.module.css";

const initCounterValue = { counterValue: 0 };

//funkcija kurios pagalba atnaujina state
// funkcija kurios pagalba atnaujinsim state
function counterReducer(state, action) {
  console.log("counterReducer fired. action is: ", action);

  switch (action.type) {
    case "daugiau":
      return { counterValue: state.counterValue + 1 };
    case "+2":
      return { counterValue: state.counterValue + 2 };
    case "maziau":
      if (state.counterValue <= 0) return state;
      return { counterValue: state.counterValue - 1 };
    default:
      console.log("type not found");
      return state;
  }

  // if (action.type === "daugiau") {
  //   return { counterValue: state.counterValue + 1 };
  // } else if (action.type === "maziau") {
  //   return { counterValue: state.counterValue - 1 };
  // }
  // return {
  //   counterValue: state.counterValue + 1,
  // };
}

function Counter(props) {
  //Logic
  // const [counterValue, setCounterValue] = useState(0)
  const [state, dispatch] = useReducer(counterReducer, initCounterValue);

  const handleIncrement = () => {
    dispatch({ type: "daugiau" });
    // setCounterValue(counterValue+1)
  };
  const handleDecrement = () => {
    if (state.counterValue > 0) {
      // setCounterValue(counterValue-1)
      dispatch({ type: "maziau" });
    }
  };

  const handle2plus = () => {
    dispatch({ type: "+2" });
  };
  //JSX
  return (
    <div className={css.counter}>
      <h3>{props.children}</h3>
      <h2>{state.counterValue}</h2>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handle2plus}>+2</button>
    </div>
  );
}
export default Counter;
