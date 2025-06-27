import { useState } from "react";
function Task11() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function addTodo() {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  }
  function deleteTodo(idx) {
    setTodos(todos.filter((_, i) => i !== idx));
  }
  return (
    <div>
      <h3>Task 11: Todo App</h3>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo} <button onClick={() => deleteTodo(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Task11;
