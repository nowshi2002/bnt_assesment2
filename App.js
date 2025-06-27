import Task1 from "./components/Task1.js";
import Task2 from "./components/Task2.js";
import Task3 from "./components/Task3.js";
import Task4 from "./components/Task4.js";
import Task5 from "./components/Task5.js";
import Task6 from "./components/Task6.js";
import Task7 from "./components/Task7.js";
import Task8 from "./components/Task8.js";
import Task9 from "./components/Task9.js";
import Task10 from "./components/Task10";
import Task11 from "./components/Task11";
import Task12 from "./components/Task12.js";
import './App.css';


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React 12 Tasks</h1>
     <div id="tasks-container" style={{ display: "flex", flexDirection: "column", gap: "10px" }}> 
       <Task1 /><hr />
      <Task2 /><hr />
      <Task3 /><hr />
      <Task4 /><hr />
      <Task5 /><hr />
      <Task6 /><hr />
      <Task7 /><hr />
      <Task8 /><hr />
      <Task9 /><hr />
      <Task10 /><hr />
      <Task11 /><hr />
      <Task12 />
     </div>
    </div>
  );
}

export default App;
