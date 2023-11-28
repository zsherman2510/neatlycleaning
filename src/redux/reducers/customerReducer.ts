import { CustomerState, PersonalDetails } from "../../types/customer";

// Define Action Types
const UPDATE_CUSTOMER_PERSONAL_DETAILS = 'UPDATE_CUSTOMER_PERSONAL_DETAILS';
const ADD_JOB = 'ADD_JOB';
const UPDATE_JOB = 'UPDATE_JOB';
const UPDATE_CARE_DETAIL = 'UPDATE_CARE_DETAIL';
const ADD_PROPERTY = 'ADD_PROPERTY';
const UPDATE_PROPERTY_INFO = 'UPDATE_PROPERTY_INFO';
const UPDATE_HOME_INFO = 'UPDATE_HOME_INFO';

interface UpdateCustomerPersonalDetailsAction {
  type: typeof UPDATE_CUSTOMER_PERSONAL_DETAILS;
  payload: PersonalDetails;
}
// Define initial state
const initialCustomerState: CustomerState = {
  personalDetails: {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    address: null
  },
  jobs: [],
  properties: [],
  tempJob: null
  
};



// Define the reducer
const customerReducer = (state = initialCustomerState, action: any) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_PERSONAL_DETAILS:
      return {
        ...state,
        personalDetails: { ...state.personalDetails, ...action.payload },
      };

    case UPDATE_CARE_DETAIL:
      return {
        ...state,
        tempJob: {
          ...state.tempJob,
          ...action.payload
        } 
      };
      case "ADD_JOB_TASKS":
        return {
          ...state,
          tempJob: {
            ...state.tempJob,
            careDetails: {
              ...state.tempJob?.careDetails,
              tasks: action.payload
            }
          } 
        };
    case ADD_JOB:
      return {
        ...state, 
        tempJob: {
          ...state.tempJob,
          typeOfCare: action.payload.type,
          careDetails: {
            ...state.tempJob?.careDetails,
            frequency: action.payload.frequency
          }
        },
      };
    case UPDATE_JOB:
      // Logic to update a job
      break;
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, action.payload],
      };
    case UPDATE_PROPERTY_INFO:
      // Logic to update property information
      break;
    // ... handle other customer-specific actions
    default:
      return state;
  }
};

// Action creators
export const updateCustomerPersonalDetails = (
  personalDetails: PersonalDetails
): UpdateCustomerPersonalDetailsAction => ({
  type: UPDATE_CUSTOMER_PERSONAL_DETAILS,
  payload: personalDetails,
});

export const addJob = (type: string, frequency: string) => ({
  type: ADD_JOB,
  payload: { type, frequency },
});

export const updateHomeInfo = (index: number, info: any) => ({
  type: UPDATE_HOME_INFO,
  payload: { index, info },
});

export const updateCareDetails = (careDetails: any) => ({
  type: UPDATE_CARE_DETAIL,
  payload: careDetails
});

export const addJobTasks = (tasks: Array<string>) => ({
  type: "ADD_JOB_TASKS",
  payload: tasks
})



export default customerReducer;
