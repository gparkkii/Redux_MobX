const { createStore, compose, applyMiddleware } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');
const reducer = require('./reducers/index');

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log('액션 로깅', action);
  // 디스패치 전 기능 추가 공간
  next(action); // next = dispatch
  // 디스패치 후 기능 추가 공간
}

// 이것이 리덕스 thunk 코드다.
const thunkMiddleware = (store) => (next) => (action) => {
  if(typeof action === 'function') { // 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action);
}

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  );

const store = createStore(reducer, initialState, enhancer);
module.exports = store;