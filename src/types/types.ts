export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  emailVarified: boolean;
}

export interface TutorProfile {
  bio?: string;
  subjects: string[];
  experience?: string;
  qualification?: string;
  hourlyRate?: number;
  availability: string[];
  categoryName: string;
}