import React from "react";

// Propsはconnect()でマッピングしたものが渡される
export default function Count({ count, handleClick }) {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => handleClick()}>Increment</button>
        </div>
    )
}
