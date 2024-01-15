import { PersonalDetails } from "../../../types/cleaner";
import { CreateCustomerState } from "../../../types/customer";

// Define Action Types
const UPDATE_CUSTOMER_PERSONAL_DETAILS = "UPDATE_CUSTOMER_PERSONAL_DETAILS";
const ADD_JOB = "ADD_JOB";
const UPDATE_JOB = "UPDATE_JOB";
const UPDATE_CARE_DETAIL = "UPDATE_CARE_DETAIL";
const ADD_PROPERTY = "ADD_PROPERTY";
const UPDATE_PROPERTY_INFO = "UPDATE_PROPERTY_INFO";
const UPDATE_HOME_INFO = "UPDATE_HOME_INFO";

// Define initial state
const initialCustomerState: CreateCustomerState = {
  personalDetails: {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    address: null,
  },
  job: {
    id: null,
    customerId: null,
    typeOfCare: null,
    address: null,
    jobStatus: null,
    specialRequests: null,
    frequency: null,
    duration: null,
    tasks: [],
    price: null,
  },
  property: {
    id: null,
    customerId: null,
    address: null,
    propertyType: null,
    bedrooms: null,
    bathrooms: null,
    isPrimary: null,
  },
};

// Define the reducer
const createCustomerReducer = (state = initialCustomerState, action: any) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_PERSONAL_DETAILS:
      return {
        ...state,
        personalDetails: { ...state.personalDetails, ...action.payload },
      };

    case UPDATE_CARE_DETAIL:
      return {
        ...state,
        job: {
          ...state.job,
          ...action.payload,
        },
      };
    case "ADD_JOB_TASKS":
      return {
        ...state,
        job: {
          ...state.job,
          tasks: [...action.payload.selectedTasks],
          duration: action.payload.duration,
          price: action.payload.price,
        },
      };
    case ADD_JOB:
      return {
        ...state,
        job: {
          ...state.job,
          typeOfCare: action.payload.type,
          frequency: action.payload.frequency,
        },
      };
    case UPDATE_JOB:
      // Logic to update a job
      break;
    case ADD_PROPERTY:
      return {
        ...state,
        property: { ...state.property, ...action.payload },
      };
    case UPDATE_PROPERTY_INFO:
      // Logic to update property information
      break;
    default:
      return state;
  }
};

// Action creators
export const updateCustomerPersonalDetails = (personalDetails: any) => ({
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
  payload: careDetails,
});

export const addJobTasks = (tasks: any) => ({
  type: "ADD_JOB_TASKS",
  payload: tasks,
});

export const addProperty = (property: any) => ({
  type: ADD_PROPERTY,
  payload: property,
});

export const createAccount = (account: any) => ({
  type: "CREATE_ACCOUNT",
  payload: account,
});

export const selectCustomer = (state: any) => state.CreateAccountCustomer;

export const selectCustomerPersonalDetails = (state: CreateCustomerState) =>
  state.personalDetails;
export default createCustomerReducer;
