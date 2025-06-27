import { useState } from "react";
function Task10() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  function handleDelete(idx) {
    setItems(items.filter((_, i) => i !== idx));
  }
  return (
    <div>
      <h3>Task 10: Delete Item</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item} <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Task10;
