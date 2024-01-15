// Define the initial user state interface
const SET_USER_DATA = "SET_USER_DATA";
const RESET_USER = "RESET_USER";
// Define action types for authentication
const SET_AUTHENTICATED = "SET_AUTHENTICATED";
const SET_UNAUTHENTICATED = "SET_UNAUTHENTICATED";

// Modify the UserState interface to include isAuthenticated
interface UserState {
  userData: Record<string, any>; // Use a generic Record type for user data
  isAuthenticated: boolean;
}

// Define user action types
type UserAction =
  | { type: "SET_USER_DATA"; payload: Record<string, any> }
  | { type: "RESET_USER" }
  | { type: "SET_AUTHENTICATED" }
  | { type: "SET_UNAUTHENTICATED" };

// Define the user reducer
const userReducer = (
  state: UserState = { userData: {}, isAuthenticated: false },
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case RESET_USER:
      return { userData: {}, isAuthenticated: false };
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Add action creators for authentication
export const setAuthenticated = () => ({
  type: SET_AUTHENTICATED,
});

export const setUnauthenticated = () => ({
  type: SET_UNAUTHENTICATED,
});

// Continue with your existing action creators and exports
export const setUserData = (userData: Record<string, any>) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export default userReducer;
