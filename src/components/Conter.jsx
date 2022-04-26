import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const increment =() =>{
    console.log("incrementing");
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        increment
      </button>
    </div>
  );
}
