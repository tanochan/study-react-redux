import React from "react";

// Propsはconnect()でマッピングしたものが渡される
export default function Count({ count, onIncrement, onDecrement }) {
    return (
        <div>
            <button onClick={onIncrement}>
                Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
                Decrement
            </button>
            <hr />
            <div>
                Clicked: {count}
            </div>
        </div>
    )
}
