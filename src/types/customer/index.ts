// FilterTypes.ts
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
