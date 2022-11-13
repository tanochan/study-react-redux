import React from "react";

// Propsはconnect()でマッピングしたものが渡される
export default function Count({ count, onIncrement, onDecrement, onIncrementAsync }) {
    return (
        <div>
            <button onClick={onIncrementAsync}>
                Increment after 1 second
            </button>
            {' '}
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
