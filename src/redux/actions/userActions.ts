import { REGISTER_USER, SET_USER, LOGOUT_USER, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './index';

export const registerUsernameAndPassword = (userData: any) => ({
    type: REGISTER_USER,
    payload: userData
});

export const setUser = (user: any) => ({
    type: SET_USER,
    payload: user
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const registerRequest = () => ({
    type: REGISTER_REQUEST
  });
  
  export const registerSuccess = (user: any) => ({
    type: REGISTER_SUCCESS,
    payload: user
  });
  
  export const registerFailure = (error: any) => ({
    type: REGISTER_FAILURE,
    payload: error
  });