// src/types/user.ts

// This defines the shape of the user object within the application.
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  phoneNumber?: string;  // Optional property
}
// Types related to the user's profile.
export interface UserProfile {
  avatarUrl?: string;
  bio?: string;
  joinedDate: Date;
  //... other profile fields.
}
// If you have user settings in your app, they can also be defined here.
export interface UserSettings {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
  emailSubscriptions: boolean;
}

// If you use Redux or another state management library, you might define 
// the shape of the user-related portion of the global state here as well.
export interface UserState {
  currentUser: User | null;
  settings: UserSettings;
  loading: boolean;
  error: string | null;
}

// Any other user-related types can also be defined and exported from this file.
