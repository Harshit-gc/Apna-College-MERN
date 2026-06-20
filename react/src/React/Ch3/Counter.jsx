// useState hooks
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count+1);
    }

    return(
        <div>
            <h3>Hooks In React</h3>
            <h4>useState{'()'}</h4>
            <p style={{fontSize: "12px", fontWeight: "Bold"}}>Count = {count}</p>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}