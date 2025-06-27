import { useState } from "react";   
function Task2(){
    const [msg, setMsg] = useState(true);
    return (
        <div>
            <h2>Task 2:Toggle</h2>
            <button onClick={()=> setMsg(!msg)}>
                {msg ? "on" : "off"}
            </button>
        </div>
    );

}
export default Task2;