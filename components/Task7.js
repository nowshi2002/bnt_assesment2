import { useState } from "react";
function Task7() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h3>Task 7: Controlled Input</h3>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type here"
      />
      <p>Value: {value}</p>
    </div>
  );
}
export default Task7;
