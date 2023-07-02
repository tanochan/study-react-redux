import React from "react";

// Propsはconnect()でマッピングしたものが渡される
export default function Count({ count, onIncrement, onDecrement, onIncrementAsync }) {
    return (
        <div>
            <button onClick={onIncrement}>
                Increment
            </button>
            {' '}
            <button onClick={onDecrement}>
                Decrement
            </button>
            {' '}
            <button onClick={onIncrementAsync}>
                IncrementAsync
            </button>
            <hr />
            <div>
                Clicked: {count}
            </div>
        </div>
    )
}
