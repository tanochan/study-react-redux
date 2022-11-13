import React from "react";

// Propsはconnect()でマッピングしたものが渡される
export default function Count({ count, onIncrement }) {
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => onIncrement()}>Increment</button>
        </div>
    )
}
