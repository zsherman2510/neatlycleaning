const initialCleanerState = {
  personalDetails: {
    firstname: null,
    lastname: null,
    phoneNumber: null,
  },

  cleaningDetails: {
    cleaningExperience: null,
    cleaningServices: null,
    preferredServiceArea: null,
    payRate: null,
  },
  picture: null,
};

export const cleanerReducer = (state = initialCleanerState, action: any) => {
  switch (action.type) {
    case "UPDATE_CLEANER_PERSONAL_DETAILS":
      return {
        ...state,
        personalDetails: {
          ...action.payload,
        },
      };
    case "UPDATE_CLEANER_DETAILS":
      return {
        ...state,
        cleaningDetails: {
          ...action.payload,
        },
      };
    case "UPLOAD_PROFILE_PICTURE":
      return {
        ...state,
        picture: action.payload,
      };

    default:
      return state;
  }
};

export const updateCleanerPersonalDetails = (personalDetails: any) => ({
  type: "UPDATE_CLEANER_PERSONAL_DETAILS",
  payload: personalDetails,
});

export const updateCleanerDetails = (cleanerDetails: any) => ({
  type: "UPDATE_CLEANER_DETAILS",
  payload: cleanerDetails,
});

export const updateProfilePicture = (photo: any) => ({
  type: "UPLOAD_PROFILE_PICTURE",
  payload: photo,
});

export const updatePreferredServiceArea = (serviceArea: any) => ({
  type: "UPDATE_PREFERRED_SERVICEAREA",
  payload: serviceArea,
});

export const selectCleaner = (state: any) => state.CreateAccountCleaner;

export default cleanerReducer;
