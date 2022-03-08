import React from "react";
import "./App2.scss"
import boxes from "./boxes"

export default function App2() {
    const [boxesArray, setBoxesArray] = React.useState(boxes)
    
const boxesElements = boxesArray.map(item =>
     (
        <div className="box" key={boxesArray.id}></div>
    )
)

    return (
        <main>
               {boxesElements}
        </main>
    )
}