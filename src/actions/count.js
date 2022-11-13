// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     increment: () => ({ type: "INCREMENT" }),
//     decrement: () => ({ type: "DECREMENT" }),
// }

// Action Creatorは、アクションを返す関数
export function increment() {
    // action
    return {
        type: "INCREMENT",
        text: "カウント増加"
    };
}
