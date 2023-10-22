import { UPDATE_CLEANER_PERSONAL_DATA, UPDATE_CLEANER_DETAILS, REGISTER_USER } from "../actions";

const initialCleanerState = {
  personalDetails: {
    username: null,
    password: null, // Note: Never store actual passwords in the frontend state.
    firstname: null,
    lastname: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
  },
  cleaningDetails: {
    cleaningExperience: null,
    cleaningSpecialty: null,
    daysAvailable: null,
    hourlyRate: null,
  },
  documents: null,
  picture: null,
  account: null,
  loading: false,
  error: null,
};

export const cleanerReducer = (state = initialCleanerState, action: any) => {
  switch (action.type) {
    case UPDATE_CLEANER_PERSONAL_DATA:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          ...action.payload,
        },
      };
    case UPDATE_CLEANER_DETAILS:
      return {
        ...state,
        cleaningDetails: {
          ...state.cleaningDetails,
          ...action.payload,
        },
      };
    case "UPDATE_CLEANER_DOCUMENTS": 
      return {
        ...state,
        documents: action.payload
      }

    case "UPLOAD_PROFILE_PICTURE":
      return {
        ...state,
        picture: action.payload
      }
    case "REGISTER_CLEANER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER:
      return {
        ...state,
        personalDetails: {
          ...state.personalDetails,
          ...action.payload,
        },
      }
    case "REGISTER_CLEANER_SUCCESS":
      return {
        ...state,
        loading: false,
        cleaner: action.payload,
        error: null,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default cleanerReducer;
