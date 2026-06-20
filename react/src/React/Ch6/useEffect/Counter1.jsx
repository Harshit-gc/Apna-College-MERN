// useEffect with a function inside it.
import { useEffect, useState } from "react";

export default function Counter1() {
    const [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count+1);
    };

    useEffect(function printSomething(){
        console.log("Counter Increased");
    });

    return (
        <div>
            <h3>useEffect with function only</h3>
            <p>Count = {count}</p>
            <button onClick={incCount}>+1</button>
        </div>
    );
}