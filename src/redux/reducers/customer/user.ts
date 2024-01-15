// Define the initial user state interface
const SET_USER_TYPE = "SET_USER_TYPE";
const SET_USER_DATA = "SET_USER_DATA";
const RESET_USER = "RESET_USER";

interface UserState {
  userType: "cleaner" | "customer" | "";
  userData: Record<string, any>; // Use a generic Record type for user data
}

// Define user action types
type UserAction =
  | { type: "SET_USER_TYPE"; payload: "cleaner" | "customer" | "" }
  | { type: "SET_USER_DATA"; payload: Record<string, any> }
  | { type: "RESET_USER" };

// Define the user reducer
const userReducer = (
  state: UserState = { userType: "", userData: {} },
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case RESET_USER:
      return { userType: "", userData: {} };
    default:
      return state;
  }
};

export const setUserData = (userData: Record<string, any>) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export default userReducer;
