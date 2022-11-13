// saga: React/Redux アプリケーションにおける副作用（データ通信などの非同期処理、ブラウザキャッシュへのアクセスのようなピュアではない処理）をより簡単で優れたものにするためのライブラリ
import { put, takeEvery, all } from 'redux-saga/effects'
import { incrementAction } from './actions/count';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// eslint-disable-next-line require-yield
function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync() {
    // ジェネレーター関数を一時停止したり再開したりするために使用する(別途確認が必要)
    yield delay(1000)
    // 指定したActiosnをdispatchする
    yield put(incrementAction())
}
  
export function* watchIncrementAsync() {
    // 指定したActionがdispatchされたタイミングでタスクを実行する
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
