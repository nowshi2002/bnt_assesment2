import { useState } from "react";
function Task12() {
  const [count, setCount] = useState(0);
  function handleClick() {
    if (count === 9) setCount(0);
    else setCount(count + 1);
  }
  return (
    <div>
      <h3>Task 12: Counter Reset at 10</h3>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
export default Task12;
