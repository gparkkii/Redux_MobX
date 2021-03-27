const { produce } = require('immer');

const initialState = [];

const postReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
  return produce(prevState, draft => {
    switch (action.type) {
      case 'ADD_POST':
        draft.push(action.data);
        break;
      default:
        break;
    }
    // switch (action.type) {
    //   case 'ADD_POST':
    //     return [...prevState, action.data];
    //   default:
    //     return prevState;
    // }
  });
};

module.exports = postReducer;