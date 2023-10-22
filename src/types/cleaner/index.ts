export type PersonalDetails = {
  // Define the structure of your personal details here, e.g.
  firstname: string;
  lastname: string;
  gender: "male" | "female";
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  // ... other personal details
};

export type CleaningDetails = {
  // Define the structure of your cleaning details here, e.g.
  cleaningExperience: string,
  cleaningSpecialty: string[],
  daysAvailable: string[],
  hourlyRate: string,
  // ... other cleaning details
};

export type AccountCreationData = {
  personalDetails: PersonalDetails;
  cleaningDetails: CleaningDetails;
  documents: any[] | null; // Assuming documents might be a more complex type. Define accordingly.
  account: any | null; // Define the shape of the 'account' based on your data structure.
};

export type ErrorPayload = {
  message: string;
};

