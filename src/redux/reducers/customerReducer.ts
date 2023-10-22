const initialCustomerState = {
  personalDetails: null,
  account: null,
  loading: false,
  error: null
};

 const customerReducer = (state = initialCustomerState, action: any) => {
  switch(action.type) {
      case "UPDATE_CUSTOMER_PERSONAL_DETAILS":
          return {
              ...state,
              personalDetails: action.payload
          };
      // ... handle other customer-specific actions

      case "REGISTER_CUSTOMER_REQUEST":
          return {
              ...state,
              loading: true
          };
      case "REGISTER_CUSTOMER_SUCCESS":
          return {
              ...state,
              loading: false,
              customer: action.payload,
              error: null
          };
      case "REGISTER_CUSTOMER_FAILURE":
          return {
              ...state,
              loading: false,
              error: action.payload
          };
      default:
          return state;
  }
}

export default customerReducer
