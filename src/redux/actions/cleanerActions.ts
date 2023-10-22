import { UPDATE_CLEANER_PERSONAL_DATA, UPDATE_CLEANER_DETAILS } from ".";
import { PersonalDetails, CleaningDetails } from "../../types/cleaner";

export const updateCleanerPersonalData = (userData: PersonalDetails) => ({
  type: UPDATE_CLEANER_PERSONAL_DATA,
  payload: userData
});

export const updateCleanerSpeciality = (userData: CleaningDetails) => ({
  type: UPDATE_CLEANER_DETAILS,
  payload: userData
});

export const updateCleanerDocuments = (documents: any) => ({
  type: "UPDATE_CLEANER_DOCUMENTS",
  payload: documents
})

export const uploadProfilePicture = (picture: any) => ({
  type: "UPLOAD_PROFILE_PICTURE",
  payload: picture
})