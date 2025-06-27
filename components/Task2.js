import { useState } from "react";
function Task2() {
  const [msg, setMsg] = useState(false);
  return (
    <div>
      <h3>Task 2: Toggle Message</h3>
      <button onClick={() => setMsg(!msg)}>
        {msg ? "Hello" : "Welcome Back"}
      </button>
    </div>
  );
}
export default Task2;
