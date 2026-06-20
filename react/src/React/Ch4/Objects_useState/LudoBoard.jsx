import { useState } from "react";

export default function LudoBoard() {
    const [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    let handleBlue = () => {
        setMoves((prevMoves) => ( {...prevMoves, blue: prevMoves.blue+1} ));
    };

    let handleGreen = () => {
        setMoves((prevMoves) => ( {...prevMoves, green: prevMoves.green+1} ));
    };
    let handleYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow+1};
        });
    };
    let handleRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red+1};
        });
    };

    return(
        <div>
            <h3>Objects with useState</h3>
            <h5>Game Begins!</h5>
            <p>Blue Moves:{moves.blue}
                <button onClick={handleBlue} style={{backgroundColor: "blue", marginLeft: "10px"}}>+1</button></p>
            <p>Yellow Moves:{moves.yellow}
                <button onClick={handleYellow} style={{backgroundColor: "yellow", marginLeft: "10px"}}>+1</button></p>
            <p>Green Moves:{moves.green}
                <button onClick={handleGreen} style={{backgroundColor: "green", marginLeft: "10px"}}>+1</button></p>
            <p>Red Moves:{moves.red}
                <button onClick={handleRed} style={{backgroundColor: "red", marginLeft: "10px"}}>+1</button></p>
            
        </div>
    );
}