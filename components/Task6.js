import { useState } from "react";
function Task6() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h3>Task 6: Checkbox Message</h3>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <span> You checked the box!</span>}
    </div>
  );
}
export default Task6;
