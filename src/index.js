import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';
import rootSaga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

// アプリケーションでの状態を保持する
// -> stateを保持する
// -> stateへアクセスするためのgetState()を提供する
// -> stateを更新するためのdispatch()を提供する
// -> listenerを登録ためのsubscribe()を提供する
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), devToolsEnhancer({})),
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // componentにstoreを渡すためにProviderでラップする
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
