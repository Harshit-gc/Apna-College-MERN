// useEffect with a function and dependencies inside it.
import { useEffect, useState } from "react";

export default function Counter2() {
    const [countx, setCountx] = useState(0);
    const [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx(countx+1);
    };
    let incCounty = () => {
        setCounty(county+1);
    };

    useEffect(function printSomething(){
        console.log("Counter Increased");
    }, [countx]);

    return (
        <div>
            <h3>useEffect with function and dependencies</h3>
            <p>CountX = {countx}</p>
            <button onClick={incCountx}>+1</button>
            <p>CountY = {county}</p>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}