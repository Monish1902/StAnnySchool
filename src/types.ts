export interface LevelInfo {
  id: string;
  name: string;
  grades: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  icon: string;
  curriculum: string[];
}

export interface Facility {
  id: string;
  category: 'Academic' | 'Medical' | 'Infrastructure' | 'Co-Curricular';
  name: string;
  description: string;
  iconName: string;
  image?: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  relation: string; // e.g. "Parent of Class 5 Student"
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ScheduleDay {
  day: string;
  hours: string;
  isOpen: boolean;
  notes?: string;
}

export interface Notice {
  id: string;
  date: string;
  title: string;
  category: 'Admission' | 'Academic' | 'Event' | 'Holiday';
  important: boolean;
  summary: string;
}

export interface AdmissionFormInputs {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  level: string;
  academicYear: string;
  previousSchool?: string;
  message?: string;
}
