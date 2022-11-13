const initialState = {
    count: 1
}

// アクションによって新しいstateを作成する
// 関数のデフォルト引数は、関数に値が渡されない場合や undefined が渡された場合に、デフォルト値で初期化される形式上の引数を指定することができる
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}
