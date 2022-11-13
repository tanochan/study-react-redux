import React from "react";
import { connect } from "react-redux";
import Count from "../components/Count";
import { increment } from "../actions/count";

// StoreのStateをPropsにマッピング（state取得）
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Dispatch(Action関数)をPropsにマッピング(stateを書き換える)
function mapDispatchToProps(dispatch) {
  return {
      // Action関数をStoreにDispatchする
      onIncrement: () => dispatch(increment()),
  }
}

// componentとStoreを接続
// -> storeからstateを取得し、componentに渡す
// -> storeのstateを書き換えるためのAction関数をcomponentに渡す
export default connect(mapStateToProps, mapDispatchToProps)(Count);

// export default connect(
//   state => ({ count: state.count }),
//   dispatch => ({ handleClick: () => dispatch(increment()) })
// )(Count);
