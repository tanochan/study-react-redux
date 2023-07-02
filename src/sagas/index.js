import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga/effects'

export function* incrementAsync() {
  console.log("saga: incrementAsync")
  yield delay(1000)
  // 指定したアクションをDispatchする
  yield put({ type: "INCREMENT"})
}

export default function* rootSaga() {
  console.log("saga: rootSaga")
  // 指定したActionがDispatchされたタイミングで実行します
  yield takeEvery("INCREMENT_ASYNC", incrementAsync)
}
