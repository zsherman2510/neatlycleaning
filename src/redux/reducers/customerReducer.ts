const UPDATE_CUSTOMER_PERSONAL_DETAILS = 'UPDATE_CUSTOMER_PERSONAL_DETAILS';
const SELECT_CARE_TYPE = 'SELECT_CARE_TYPE';
const UPDATE_HOME_INFO = 'UPDATE_HOME_INFO';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

const initialCustomerState = {
  personalDetails: {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null
  },
  care: [{
    type: null,
    frequency: null,  
  }],
  home: [
    {
        street: null,
        zipcode: null,
        bedrooms: null,
        bathrooms: null,
        supplies: null,
        equipment: null,
        tasks: [],
        
    }
  ],
};

// Define the reducer
const customerReducer = (state = initialCustomerState, action: any) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_PERSONAL_DETAILS:
      return {
        ...state,
        personalDetails: { ...state.personalDetails, ...action.payload },
      };
      case SELECT_CARE_TYPE:
        return {
          ...state,
          care: [{
            type: action.payload.type,
            frequency: action.payload.frequency
          }],
        };
      
    case UPDATE_HOME_INFO:
      return {
        ...state,
        home: state.home.map((item, index) =>
          index === action.payload.index
            ? { ...item, ...action.payload.info }
            : item
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        home: state.home.map((item, index) =>
          index === action.payload.index
            ? { ...item, tasks: [...item.tasks, action.payload.task] }
            : item
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        home: state.home.map((item, index) =>
          index === action.payload.homeIndex
            ? {
                ...item,
                tasks: item.tasks.filter((_, taskIndex) => taskIndex !== action.payload.taskIndex),
              }
            : item
        ),
      };
    // ... handle other customer-specific actions
    default:
      return state;
  }
};

// Action creators
export const updateCustomerPersonalDetails = (personalDetails: any) => ({
  type: UPDATE_CUSTOMER_PERSONAL_DETAILS,
  payload: personalDetails,
});

export const selectCareType = (type: string, frequency: string) => ({
  type: SELECT_CARE_TYPE,
  payload: { type, frequency },
});

export const updateHomeInfo = (index: number, info: any) => ({
  type: UPDATE_HOME_INFO,
  payload: { index, info },
});

export const addTask = (task: Array<string>) => ({
  type: ADD_TASK,
  payload: task  ,
});

export const removeTask = (homeIndex: number, taskIndex: number) => ({
  type: REMOVE_TASK,
  payload: { homeIndex, taskIndex },
});

export default customerReducer;
