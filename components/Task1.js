import { useState } from "react";
function Task1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Task 1: Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click TO Increase</button>
    </div>
  );
}
export default Task1;
