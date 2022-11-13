// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     increment: () => ({ type: "INCREMENT" }),
//     decrement: () => ({ type: "DECREMENT" }),
// }

// Action Creatorは、アクションを返す関数
export function incrementAction() {
    // action
    return {
        type: "INCREMENT",
        text: "カウント増加"
    };
}

export function decrementAction() {
    return {
        type: "DECREMENT",
        text: "カウント減少"
    };
}

export function incrementAsyncAction() {
    return {
        type: "INCREMENT_ASYNC",
        text: "1000ms遅延"
    }
}
