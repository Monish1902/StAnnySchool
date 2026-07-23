import { Facility, LevelInfo, Notice, Review, ScheduleDay } from '../types';
import heroBuildingImg from '../assets/images/school_hero_building_1784743753089.jpg';

export const SCHOOL_DETAILS = {
  name: 'St Anny High School',
  tagline: 'Nursery to Class 5 ICSE Syllabus & Class 6 to Class 10 State Syllabus English Medium Education',
  location: 'Murali Nagar, Visakhapatnam',
  fullAddress: 'Murali Nagar, Visakhapatnam, Andhra Pradesh 530007',
  establishedYear: 1996,
  affiliation: 'Nursery – Class 5: ICSE Syllabus | Class 6 – 10: State Syllabus (Govt. Recognized)',
  medium: 'English Medium',
  rating: 4.1,
  totalReviewsCount: 31,
  phone: '9515773040',
  altPhone: '+91 9515773040',
  email: 'stannyeducational@gmail.com',
  infoEmail: 'stannyeducational@gmail.com',
  officeHours: 'Nursery to 5th: ICSE Syllabus | 6th to 10th: State Syllabus',
  heroImage: heroBuildingImg,
};

export const SCHEDULE_DAYS: ScheduleDay[] = [
  { day: 'Monday', hours: 'School Working Day', isOpen: true },
  { day: 'Tuesday', hours: 'School Working Day', isOpen: true },
  { day: 'Wednesday', hours: 'School Working Day', isOpen: true },
  { day: 'Thursday', hours: 'School Working Day', isOpen: true },
  { day: 'Friday', hours: 'School Working Day', isOpen: true },
  { day: 'Saturday', hours: 'School Working Day', isOpen: true },
  { day: 'Sunday', hours: 'Closed', isOpen: false, notes: 'Campus closed on Sundays' },
];

export const SCHOOL_LEVELS: LevelInfo[] = [
  {
    id: 'preschool',
    name: 'Preschool & Nursery (ICSE Pattern)',
    grades: 'Playgroup & Nursery (ICSE Syllabus)',
    ageGroup: '2.5 – 3.5 Years',
    description: 'A cheerful, safe play-way foundation following the ICSE learning pattern designed to ignite curiosity, sensory skills, and early language development.',
    highlights: ['ICSE Pattern Early Childhood Learning', 'Child-friendly Tactile Play Areas', 'Phonics & Basic Numeracy', 'Nutritional & Hygiene Routine'],
    icon: 'Baby',
    curriculum: ['ICSE Play-Way Methodology', 'Sensory & Activity Play', 'Storytelling & Rhymes', 'Creative Crafts & Social Skills']
  },
  {
    id: 'kindergarten',
    name: 'Kindergarten (ICSE Pattern)',
    grades: 'LKG & UKG (ICSE Syllabus)',
    ageGroup: '3.5 – 5.5 Years',
    description: 'ICSE aligned kindergarten program transitioning young learners into structured, fun-filled literacy, mathematical concept formation, and motor skills.',
    highlights: ['ICSE Pattern Foundational Syllabus', 'English Phonics Mastery', 'Cognitive Skill Building', 'Interactive Storytelling & Puppetry'],
    icon: 'Sparkles',
    curriculum: ['ICSE Phonics & Pre-reading', 'Number Sense & Counting', 'Environmental Awareness', 'Art, Music & Movement']
  },
  {
    id: 'primary',
    name: 'Primary Schooling (ICSE Syllabus)',
    grades: 'Class 1 to Class 5 (ICSE Syllabus)',
    ageGroup: '6 – 10 Years',
    description: 'Comprehensive ICSE Syllabus for Class 1 to 5 building robust academic fundamentals in English, Mathematics, Environmental Science, and Languages.',
    highlights: ['ICSE Syllabus for Class 1 to 5', '100% English Medium Core Curriculum', 'Computer Literacy & Language Lab', 'Sports & Physical Fitness Daily'],
    icon: 'BookOpen',
    curriculum: ['ICSE English Literature & Grammar', 'Mathematics & Logical Thinking', 'Environmental Studies (EVS)', 'Second Language (Telugu/Hindi)', 'Computer Science Basics']
  },
  {
    id: 'middle',
    name: 'Middle Schooling (State Syllabus)',
    grades: 'Class 6 to Class 8 (State Syllabus)',
    ageGroup: '11 – 13 Years',
    description: 'State Board Syllabus for Class 6 to 8 fostering analytical problem-solving, scientific inquiry, and strong conceptual foundations.',
    highlights: ['Andhra Pradesh State Board Syllabus', 'Interactive Science & Computer Labs', 'Hands-on Learning Activities', 'Math Competitions & Logic Training'],
    icon: 'GraduationCap',
    curriculum: ['State Board Physics, Chemistry & Biology', 'Mathematics & Algebra', 'Social Sciences & Geography', 'English Communication', 'Coding & IT Fundamentals']
  },
  {
    id: 'highschool',
    name: 'High School (State Syllabus & SSC Board)',
    grades: 'Class 9 & Class 10 (State Syllabus)',
    ageGroup: '14 – 16 Years',
    description: 'State Board (SSC) curriculum preparation for Class 9 & 10 with structured mentoring, mock exams, and 100% pass track record.',
    highlights: ['AP State Board (SSC) High School Curriculum', 'Comprehensive Board Exam Preparation', '100% Board Exam Pass Track Record', 'Special Remedial & Advanced Coaching'],
    icon: 'Award',
    curriculum: ['State Board Physics, Chemistry, Biology', 'Mathematics & Problem Solving', 'Social Sciences & History', 'English Communicative & Grammar', 'Information Technology']
  }
];

export const SCHOOL_FACILITIES: Facility[] = [
  {
    id: 'medical',
    category: 'Medical',
    name: 'Medical Support Facility',
    description: 'A dedicated on-campus first-aid clinic staffed with trained medical support professionals to handle immediate health needs, routine wellness checks, and emergency care.',
    iconName: 'HeartPulse',
    features: ['First-Aid & Emergency Response Desk', 'Trained Nursing Support Staff', 'Comfortable recovery beds', 'Annual student health & vision checkups']
  },
  {
    id: 'infrastructure',
    category: 'Infrastructure',
    name: 'Hygienic Sanitation & Washrooms',
    description: 'Meticulously maintained, sanitized, separate washrooms for boys, girls, and young toddlers with continuous running water and strict hygiene protocols.',
    iconName: 'Building2',
    features: ['Separate floor-wise washroom blocks', 'Touchless hand sanitizing stations', 'Dedicated housekeeping staff per block', 'Child-accessible fixtures for kindergarten']
  },
  {
    id: 'science_labs',
    category: 'Academic',
    name: 'Science & Computer Labs',
    description: 'State-of-the-art physics, chemistry, biology, and IT laboratories providing hands-on practical experiment experiences and digital coding exposure.',
    iconName: 'Microscope',
    features: ['Safety-equipped Science Workstations', 'Modern PC computers with high-speed web', 'Interactive Smart Boards for digital lessons', 'Individual lab kits for practicals']
  },
  {
    id: 'sports',
    category: 'Co-Curricular',
    name: 'Sports Arena & Athletic Ground',
    description: 'Spacious outdoor play field for cricket, football, basketball, badminton, and track events encouraging physical health, teamwork, and sportsmanship.',
    iconName: 'Trophy',
    features: ['Multi-sport outdoor play court', 'Indoor games (Chess, Carrom, Table Tennis)', 'Certified Physical Education Instructors', 'Annual Sports Meet & Inter-house Tournaments']
  }
];

export const REVIEWS_LIST: Review[] = [
  {
    id: '1',
    author: 'Srinivas Rao K.',
    relation: 'Parent of Class 8 Student',
    rating: 5,
    date: '2 months ago',
    comment: 'St Anny High School in Murali Nagar has been exceptional for my son. The teachers are polite, well-experienced, and pay equal attention to academics and moral discipline. Highly recommended English medium school in Vizag!',
    verified: true
  },
  {
    id: '2',
    author: 'Priya Sharma',
    relation: 'Parent of UKG Student',
    rating: 5,
    date: '3 months ago',
    comment: 'The kindergarten and preschool teachers are very patient and caring. My daughter adapted so quickly. Safe infrastructure and clean washroom facilities give us great peace of mind.',
    verified: true
  },
  {
    id: '3',
    author: 'Ramesh Varma',
    relation: 'Alumnus & Local Resident',
    rating: 4,
    date: '5 months ago',
    comment: 'Great school in Murali Nagar with a solid academic foundation since 1996. Excellent dual syllabus offering ICSE for Nursery to 5th and AP State Board for 6th to 10th.',
    verified: true
  },
  {
    id: '4',
    author: 'Lakshmi Narayana',
    relation: 'Parent of Class 10 Student',
    rating: 5,
    date: '6 months ago',
    comment: 'Strong academic support for 10th board exams. Regular unit tests, mock exam practice, and individual parent-teacher updates kept my daughter prepared and confident.',
    verified: true
  },
  {
    id: '5',
    author: 'Anitha Devi',
    relation: 'Parent of Class 3 Student',
    rating: 4,
    date: '8 months ago',
    comment: 'Very disciplined school environment. The English medium instruction standard is high, and co-curricular activities like public speaking and arts are given good emphasis.',
    verified: true
  }
];

export const SCHOOL_NOTICES: Notice[] = [
  {
    id: 'n1',
    date: 'July 20, 2026',
    title: 'Admissions Open for Academic Session 2026–27',
    category: 'Admission',
    important: true,
    summary: 'Registrations are open for Preschool, Nursery, Kindergarten, and Classes 1 to 9. Contact the office in Murali Nagar.'
  },
  {
    id: 'n2',
    date: 'July 15, 2026',
    title: 'Inter-House Science & Craft Exhibition',
    category: 'Event',
    important: false,
    summary: 'Students from Class 5 to 10 will showcase innovative science models and creative arts on Saturday, August 1st.'
  },
  {
    id: 'n3',
    date: 'July 10, 2026',
    title: 'First Periodic Assessment Schedule Released',
    category: 'Academic',
    important: false,
    summary: 'Classwise date sheet for Periodic Assessment 1 is posted on the school notice board and student handbook.'
  },
  {
    id: 'n4',
    date: 'July 01, 2026',
    title: 'Annual Student Health & Medical Checkup',
    category: 'Event',
    important: false,
    summary: 'Our medical support facility team will conduct vision, dental, and general health screenings for all primary classes.'
  }
];

export const SCHOOL_FORMS = [
  {
    id: 'f1',
    title: 'Student Admission Inquiry & Registration Form',
    category: 'Admissions',
    description: 'Official application form for requesting student enrollment across Preschool, Nursery, Kindergarten, and Classes 1-10.',
    fileSize: '180 KB',
    format: 'PDF'
  },
  {
    id: 'f2',
    title: 'Student Health & Emergency Medical Form',
    category: 'Medical',
    description: 'Comprehensive health declaration and emergency contact record for the campus medical support facility.',
    fileSize: '140 KB',
    format: 'PDF'
  },
  {
    id: 'f3',
    title: 'Leave Request & Absence Application Form',
    category: 'Academic',
    description: 'Form required by parents when requesting short-term or extended leave for students during regular academic terms.',
    fileSize: '120 KB',
    format: 'PDF'
  },
  {
    id: 'f4',
    title: 'Transfer Certificate (TC) Application Form',
    category: 'Administrative',
    description: 'Official application form to request issuance of Transfer Certificate upon school completion or relocation.',
    fileSize: '150 KB',
    format: 'PDF'
  }
];

