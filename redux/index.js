const { createStore } = require('redux');

const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

console.log('1st', store.getState());


const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
    // 액션에서 type오타날경우 return할 값이 없어서 에러가 난다
    // 에러가 나지 않기 위해 default로 return값을 써주는 것
  }
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // store.subscribe 화면이 바뀌는 것을 감지
  console.log('changed');
});

console.log('1st', store.getState());

const changeCompA = (data) => {
  return {
    type: 'CHANGE_COMP_A',
    data,
  };
};
store.dispatch(changeCompA('b'));

// 위의 코드와 똑같다
// store.dispatch({
//   type: 'CHANGE_COMP_A',
//   data: 'b',
// })

console.log('2nd', store.getState());