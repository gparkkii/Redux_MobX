const { createStore } = require('redux');
const reducer = require('./reducers/index');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
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
    return action(store.next, store.getState);
  }
  return next(action);
}

const enhancer = compose(
  applyMiddleware(firstMiddleware),
  thunkMiddleware(),
  // devtool,
  // chrome dev tool 붙이는거
)

const store = createStore(reducer, initialState, enhancer);
store.subscribe(() => { 
  console.log('changed');
});

console.log('1st', store.getState());

store.dispatch({
  type: 'LOG_IN_REQUEST',
});

store.dispatch(logIn({
  id: 1,
  name: 'zerocho',
  admin: true,
}));
console.log('2nd', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요. 리덕스',
}));
console.log('3rd', store.getState());
store.dispatch(addPost({
  userId: 1,
  id: 2,
  content: '두번째 리덕스',
}));
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());