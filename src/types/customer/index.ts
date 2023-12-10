// FilterTypes.ts
// Personal Details Interface
export interface PersonalDetails {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  address: string | null;
  // ... other personal details
}

// Job Interface
export interface Job {
  id: string | null;
  customerId: string | null;
  typeOfCare: string | null;
  address: string | null;
  jobStatus: string | null;
  specialRequests: string | null;
  careDetails: CareDetail[];
  // ... other job-related fields
}

// Care Detail Interface
export interface CareDetail {
  id: string;
  jobId: string;
  frequency: string | null;
  duration: number | null;
  price: number | null;
  tasks: string[];
  
  // ... other care detail fields
}

// Property Interface
export interface Property {
  id: string | null;
  customerId: string | null;
  address: string | null;
  propertyType: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  suppliesRequired: boolean | null;
  equipmentRequired: boolean | null;
  isPrimary: boolean | null;
  // ... other property-related fields
}

// Customer State Interface
export interface CreateCustomerState {
  personalDetails: PersonalDetails;
  job: Job;
  property: Property;
}


export interface PayRateFilter {
  min: number;
  max: number;
}

export interface ServicesFilter {
  bathroomCleaning: boolean;
  carpetCleaning: boolean;
  kitchenCleaning: boolean;
  laundry: boolean;
  windowCleaning: boolean;
}
export interface Caregiver {
  id: string;
  name: string;
  location: string;
  rate: number;
  photoUrl: string;
}


