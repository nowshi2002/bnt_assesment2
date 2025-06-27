import { useState } from "react";
function Task9() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <h3>Task 9: Login Form</h3>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <button disabled={!user || !pass}>Login</button>
    </div>
  );
}
export default Task9;
