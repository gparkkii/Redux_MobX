const { produce } = require('immer');

const initialState = {
  isLoggingIn: false,
  data: null,
};

// immer의 기본형태
// nextState = produce(prevState, (draft) => {})

const userReducer = (prevState = initialState, action) => { // 새로운 state 만들어주기
  return produce(prevState, draft => {
    switch (action.type) {
      case 'LOG_IN_REQUEST':
        draft.data = null;
        draft.isLoggingIn = true;
        break;
        // return {
        //   ...prevState,
        //   data: null,
        //   isLoggingIn: true,
        // };
      case 'LOG_IN_SUCCESS':
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
        // return {
        //   ...prevState,
        //   data: action.data,
        //   isLoggingIn: false,
        // };
      case 'LOG_IN_FAILURE':
        draft.data = null;
        draft.isLoggingIn = false;
        break;
        // return {
        //   ...prevState,
        //   data: null,
        //   isLoggingIn: false,
        // };
      case 'LOG_OUT':
        draft.data = null;
        break;
        // return {
        //   ...prevState,
        //   data: null,
        // };
      default:
        return prevState;
    }
  })
};

module.exports = userReducer;