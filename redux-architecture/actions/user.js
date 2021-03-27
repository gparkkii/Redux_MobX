const logIn = (data) => {// 비동기 액션 : 요청을 보낸 후 응답에 관계 없이 다음 동작을 실행
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess({
          userId: 1,
          nickname: 'JiYeon'
        }));
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  }
}

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  }
}

const logIn = (data) => { // 동기 액션: 요청을 보낸 후 해당 응답을 받아야 다음 동작을 실행
  return {
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};



module.exports = {
  logIn,
  logOut,
}