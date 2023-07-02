// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     increment: () => ({ type: "INCREMENT" }),
//     decrement: () => ({ type: "DECREMENT" }),
// }

// Action Creatorは、アクションを返す関数
export function increment() {
    console.log("action: increment")
    // action
    return {
        type: "INCREMENT",
        text: "カウント増加"
    };
}

export function decrement() {
    console.log("action: decrement")
    return {
        type: "DECREMENT",
        text: "カウント減少"
    };
}

// saga使わず実装
export function incrementAsync() {
    console.log("action: incrementAsync")
    return {
        type: "INCREMENT_ASYNC",
        text: "非同期カウント増加"
    }
}