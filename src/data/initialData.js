export const initialProfiles = [
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    registrationNo: '12401822',
    rollNo: 'RK24ABC12',
    program: 'B.Tech Computer Science & Engineering',
    school: 'School of Computer Science & Engineering',
    studentType: 'Hosteller', // 'Hosteller' or 'Day Scholar'
    hostelDetails: {
      hostelName: 'Boys Hostel 4 (BH-4)',
      roomNo: '412-B',
      wardenName: 'Dr. R. K. Sharma',
      wardenContact: '+91 98765 43210',
      messSlot: 'North Indian Mess - Slot 2'
    },
    currentDay: 3,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    hometown: 'Lucknow, Uttar Pradesh',
    assignedBuddyId: 'buddy-aarav',
    academicMentor: {
      name: 'Dr. Meenakshi Sundaram',
      designation: 'Associate Professor, CSE',
      cabin: 'Block 34, Cabin 408',
      email: 'meenakshi.cse@university.edu.in'
    }
  },
  {
    id: 'sneha-patel',
    name: 'Sneha Patel',
    registrationNo: '12409841',
    rollNo: 'RB24MKT09',
    program: 'Bachelor of Business Administration (BBA)',
    school: 'Mittal School of Business',
    studentType: 'Day Scholar',
    commuteDetails: {
      busRouteNo: 'Route 14 (Jalandhar Model Town)',
      pickupPoint: 'Model Town Gurudwara Chowk (7:15 AM)',
      busCoordinator: 'Mr. Gurpreet Singh (+91 98140 11223)',
      parkingPermit: 'Pending Registration'
    },
    currentDay: 4,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    hometown: 'Jalandhar, Punjab',
    assignedBuddyId: 'buddy-priya',
    academicMentor: {
      name: 'Prof. Rajesh K. Bansal',
      designation: 'Assistant Dean, Business School',
      cabin: 'Block 32, Cabin 214',
      email: 'rajesh.mgmt@university.edu.in'
    }
  },
  {
    id: 'ananya-sengupta',
    name: 'Ananya Sengupta',
    registrationNo: '12411099',
    rollNo: 'RD24DES34',
    program: 'B.Des (Fashion & Lifestyle Design)',
    school: 'School of Design',
    studentType: 'Hosteller',
    hostelDetails: {
      hostelName: 'Girls Hostel 3 (GH-3)',
      roomNo: '518-A',
      wardenName: 'Mrs. Suman Lata',
      wardenContact: '+91 98881 22334',
      messSlot: 'Special Multi-Cuisine Mess - Slot 1'
    },
    currentDay: 2,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    hometown: 'Kolkata, West Bengal',
    assignedBuddyId: 'buddy-tanya',
    academicMentor: {
      name: 'Ar. Sunita Roy',
      designation: 'Head, Fashion Technology',
      cabin: 'Block 38, Cabin 102',
      email: 'sunita.roy@university.edu.in'
    }
  }
];

export const initialBuddies = [
  {
    id: 'buddy-aarav',
    name: 'Aarav Sharma',
    program: '3rd Year B.Tech CSE',
    specialization: 'Artificial Intelligence & Cloud Computing',
    hostel: 'Boys Hostel 4 (BH-4, Room 610)',
    contactNumber: '+91 98721 99001',
    email: 'aarav.122041@university.edu.in',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    bio: 'Hi! I remember feeling totally lost when I first arrived at Block 34. I have been through the UMS glitches, hostel biometric lines, and library cards. Always happy to guide freshers!',
    clubs: ['Google Developer Student Club', 'Robotics Society', 'Campus Cycling Club'],
    rating: 4.9,
    reviewsCount: 38,
    officeHours: 'Mon & Thu: 5:00 PM - 7:00 PM @ UniMall Cafe Coffee Day'
  },
  {
    id: 'buddy-priya',
    name: 'Priya Nair',
    program: '3rd Year BBA (Marketing & Analytics)',
    specialization: 'Strategic Management',
    hostel: 'Day Scholar (Local Commute Expert)',
    contactNumber: '+91 98112 33445',
    email: 'priya.122099@university.edu.in',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    bio: 'Day-scholar life is super chill if you know the exact bus stop timings and cafeteria quiet corners! Reach out anytime for class schedules, notes, or canteen food recommendations.',
    clubs: ['Management Fest Organizing Committee', 'Rotaract Club', 'Literary Society'],
    rating: 5.0,
    reviewsCount: 42,
    officeHours: 'Tue & Fri: 4:30 PM - 6:00 PM @ Central Library Lawn'
  },
  {
    id: 'buddy-tanya',
    name: 'Tanya Verma',
    program: '3rd Year B.Des (Interior & Product Design)',
    specialization: 'Ergonomic Architecture',
    hostel: 'Girls Hostel 2 (GH-2, Room 304)',
    contactNumber: '+91 97765 88990',
    email: 'tanya.design@university.edu.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: 'Proud GH-resident! I can help you with hostel gate pass workflows, curfew permissions, studio workshops, and art supply shops in UniMall.',
    clubs: ['Design Guild', 'Fine Arts Society', 'Women In Tech'],
    rating: 4.8,
    reviewsCount: 29,
    officeHours: 'Wed: 4:00 PM - 6:00 PM @ Design Studio 38-201'
  }
];

export const initialTasks = [
  // DAY 1
  {
    id: 'task-101',
    day: 1,
    category: 'academic',
    targetAudience: 'All', // 'All', 'Hosteller', 'Day Scholar'
    title: 'UMS Account Activation & Password Setup',
    shortDesc: 'Activate your University Management System (UMS) portal login credentials.',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 1, 10:15 AM',
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block32',
    officeName: 'Division of Information Technology (Block 32, 2nd Floor)',
    steps: [
      'Locate your provisional Registration Number in your admission letter.',
      'Navigate to ums.university.edu.in or open the UMS Mobile App.',
      'Click on "First Time Login" and enter your registered email/phone number for OTP verification.',
      'Set a secure password complying with criteria (8+ characters, special symbol, uppercase).',
      'Verify that your registered program, section, and photo appear correctly.'
    ],
    tips: 'UMS is your daily nerve center: attendance, timetables, fee receipts, and marks will all appear here. Never share your password with anyone.',
    estimatedMinutes: 15
  },
  {
    id: 'task-102',
    day: 1,
    category: 'administrative',
    targetAudience: 'All',
    title: 'Physical Document Verification & File Submission',
    shortDesc: 'Present original 10th/12th certificates, migration and transfer papers at Admission Block.',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 1, 02:30 PM',
    proofRequired: true,
    proofUploaded: 'verification-slip-12401822.pdf',
    locationRef: 'loc-block32',
    officeName: 'Central Admissions Verification Hall (Block 32, Ground Floor Counters 1-14)',
    steps: [
      'Collect tokens at Counter 1 inside Block 32 foyer.',
      'Ensure you carry original Class 10 & 12 marksheets along with 3 sets of self-attested photocopies.',
      'Carry your Transfer Certificate (TC) and Migration Certificate.',
      'Submit 8 recent passport-size photographs with your name and registration number on the back.',
      'Collect the stamped "Document Verification Slip" and keep it securely.'
    ],
    tips: 'Morning sessions (9:00 AM - 11:30 AM) have shorter queues than afternoon sessions.',
    estimatedMinutes: 60
  },
  {
    id: 'task-103',
    day: 1,
    category: 'hostel',
    targetAudience: 'Hosteller',
    title: 'Hostel Room Allotment & Furniture Inventory Check',
    shortDesc: 'Collect hostel room keys, inspect mattress, cupboard, fan, and sign the inventory form.',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 1, 06:00 PM',
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-hostels',
    officeName: 'Hostel Caretaker Office (Respective Hostel Ground Floor)',
    steps: [
      'Report to the Warden / Chief Caretaker counter with your Hostel Fee Receipt.',
      'Receive your room keys, biometric badge placeholder, and room inventory checklist sheet.',
      'Check all electrical switches, light fixtures, fan regulator, and door latch in your allocated room.',
      'Inspect your mattress, study desk, chair, and almirah locker key.',
      'Sign the inventory checklist and submit the duplicate copy back to the Caretaker within 24 hours.'
    ],
    tips: 'If anything is damaged or missing, immediately mark it on the form before signing so you are not held liable at year-end clearance.',
    estimatedMinutes: 45
  },
  {
    id: 'task-104',
    day: 1,
    category: 'hostel', // Used as Commute for Day Scholars
    targetAudience: 'Day Scholar',
    title: 'Campus Bus Pass & Route Onboarding',
    shortDesc: 'Verify bus route number, designated boarding stop, and collect semester transport card.',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 1, 04:15 PM',
    proofRequired: true,
    proofUploaded: 'bus-pass-route14.pdf',
    locationRef: 'loc-transport',
    officeName: 'Department of Transportation (Block 29, Room 104)',
    steps: [
      'Visit Block 29 Transport Helpdesk with your student ID or fee receipt.',
      'Select your designated morning boarding stop and evening return route.',
      'Save the Bus Driver and Route Coordinator phone numbers in your phone.',
      'Collect your laminated QR-coded Bus Pass for daily turnstile entry at campus transit gates.'
    ],
    tips: 'Buses depart strictly on time at 5:10 PM from the Central Bus Terminal behind Block 36.',
    estimatedMinutes: 30
  },

  // DAY 2
  {
    id: 'task-201',
    day: 2,
    category: 'administrative',
    targetAudience: 'All',
    title: 'Permanent Student RFID Identity Card Collection',
    shortDesc: 'Collect your high-security smart RFID card at Division of Student Welfare (DSW).',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 2, 11:45 AM',
    proofRequired: true,
    proofUploaded: 'id-card-scan.jpg',
    locationRef: 'loc-block13',
    officeName: 'Division of Student Welfare (Block 13, Counter 4)',
    steps: [
      'Show your stamped Document Verification Slip from Day 1.',
      'Get your biometric facial photo and thumbprint captured at the ID station.',
      'Receive your permanent smart RFID Student Identity Card.',
      'Test your RFID card at the Block 13 turnstiles to ensure electronic activation.'
    ],
    tips: 'Always wear your ID card on campus lanyard. It is strictly required for library checkouts, hostel entry, and entering exam halls.',
    estimatedMinutes: 40
  },
  {
    id: 'task-202',
    day: 2,
    category: 'academic',
    targetAudience: 'All',
    title: 'Master Timetable Download & Room Code Decoding',
    shortDesc: 'Extract your section timetable from UMS and understand campus classroom location codes.',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 2, 03:20 PM',
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block34',
    officeName: 'UMS Portal / Academic Department Foyer',
    steps: [
      'Open UMS > Academic Module > View My Timetable.',
      'Take a screenshot or download the weekly PDF schedule.',
      'Decode room numbers: The first two digits represent the Block, third digit represents the floor, and last two digits represent room number (e.g., 34-602 = Block 34, 6th Floor, Room 02).',
      'Note your tutorial sections, practical lab hours, and designated faculty initials.'
    ],
    tips: 'Allow 8-10 minutes between consecutive lectures if walking across different campus blocks.',
    estimatedMinutes: 25
  },
  {
    id: 'task-203',
    day: 2,
    category: 'hostel',
    targetAudience: 'Hosteller',
    title: 'Hostel Gate Biometric Punching & Mess Slot Enrollment',
    shortDesc: 'Enroll fingerprint at hostel security turnstiles and confirm your dining hall meal card.',
    priority: 'Mandatory',
    isCompleted: true,
    completedAt: 'Day 2, 07:15 PM',
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-hostels',
    officeName: 'Hostel Security Desk & Mess Management Office',
    steps: [
      'Present your Smart ID Card to the Hostel Security Supervisor.',
      'Complete left and right index finger biometric scans at the turnstile machine.',
      'Review the hostel curfew rule: 7:30 PM biometric in-time is mandatory every night.',
      'Visit the hostel mess counter and collect your weekly meal coupon RFID tag.'
    ],
    tips: 'Failing to punch biometric before 7:30 PM triggers an automated SMS notification to registered parents.',
    estimatedMinutes: 35
  },
  {
    id: 'task-204',
    day: 2,
    category: 'hostel',
    targetAudience: 'Day Scholar',
    title: 'Vehicle Parking Sticker & FASTag Registration',
    shortDesc: 'Register your motorcycle or car with Campus Security for Gate 1 / Gate 4 parking authorization.',
    priority: 'Recommended',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-security',
    officeName: 'Chief Proctorial Office / Gate 1 Security Counter',
    steps: [
      'Carry vehicle RC copy, valid Driving License, and Student ID card.',
      'Fill in the 1-page Student Commute Registration form.',
      'Pay standard one-time campus parking sticker fee (Rs. 150).',
      'Affix the reflective holographic security sticker onto the front windshield or mudguard.'
    ],
    tips: 'Helmets are strictly mandatory for both rider and pillion entering campus gates.',
    estimatedMinutes: 20
  },

  // DAY 3 (Current Day for Rahul)
  {
    id: 'task-301',
    day: 3,
    category: 'academic',
    targetAudience: 'All',
    title: 'LMS Platform Walkthrough & University Email Activation',
    shortDesc: 'Set up your official university Google Workspace email (@university.edu.in) and LMS access.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block34',
    officeName: 'Online Portal / IT Helpdesk Block 32',
    steps: [
      'Log into Gmail using your Registration Number format: reg12401822@university.edu.in.',
      'Change default credentials and configure 2-Step Verification with Google Authenticator.',
      'Open the University Learning Management System (LMS) at lms.university.edu.in.',
      'Verify that all 5 first-semester theory courses and 3 laboratory modules are listed under "My Courses".',
      'Download syllabus PDF and initial lecture handouts uploaded by course instructors.'
    ],
    tips: 'Official circulars, placement drives, and holiday announcements are only broadcast to this official email address.',
    estimatedMinutes: 30
  },
  {
    id: 'task-302',
    day: 3,
    category: 'administrative',
    targetAudience: 'All',
    title: 'Fee Clearance Receipt & Scholarship Verification',
    shortDesc: 'Verify semester fee receipt status on UMS and validate any pending scholarship concessions.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: true,
    proofUploaded: null,
    locationRef: 'loc-block32',
    officeName: 'Division of Accounts & Finance (Block 32, 1st Floor Counter 6-9)',
    steps: [
      'Log into UMS > Fee Module > Fee Status.',
      'Verify that tuition fee, hostel fee (if applicable), and examination fee show "Cleared / Paid".',
      'If you have a merit scholarship or sports concession, ensure the discount voucher is deducted.',
      'Download the official stamped Fee Receipt PDF for your family records and tax filings.'
    ],
    tips: 'Any fee discrepancy should be brought to Counter 8 in Block 32 before Day 7 to avoid late registration holds.',
    estimatedMinutes: 25
  },
  {
    id: 'task-303',
    day: 3,
    category: 'hostel',
    targetAudience: 'Hosteller',
    title: 'Hostel Night Leave & Out-Pass Workflow Walkthrough',
    shortDesc: 'Learn how to generate overnight leave passes on UMS with automated parental OTP verification.',
    priority: 'Recommended',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-hostels',
    officeName: 'Hostel Warden Office / UMS Leave Management',
    steps: [
      'Log into UMS > Leave Management > Apply Hostel Night Out-Pass.',
      'Select Leave Type: Home Visit, Academic Event, or Local Guardian Visit.',
      'Provide destination address and departure/return datetime.',
      'UMS sends an automated 6-digit OTP to your registered parents phone number.',
      'Once parent confirms via SMS or web portal, Warden automatically grants electronic barcode approval.'
    ],
    tips: 'Always apply leave at least 24 hours prior to travel. Gate security will not permit exit without green digital pass status.',
    estimatedMinutes: 20
  },
  {
    id: 'task-304',
    day: 3,
    category: 'hostel',
    targetAudience: 'Day Scholar',
    title: 'Day-Scholar Campus Locker Booking',
    shortDesc: 'Reserve a secure personal steel locker at UniMall or Central Library for heavy books and laptops.',
    priority: 'Optional',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-unimall',
    officeName: 'Student Convenience Center (UniMall 1st Floor)',
    steps: [
      'Visit UniMall Level 1 Customer Desk with your Student ID card.',
      'Choose preferred locker bank (Block 34 Basement, Central Library, or UniMall).',
      'Pay standard refundable semester key deposit (Rs. 500).',
      'Receive your numbered key and combination padlock.'
    ],
    tips: 'Lockers are limited and allocated first-come, first-served. Extremely handy during rainy days and lab days.',
    estimatedMinutes: 15
  },

  // DAY 4
  {
    id: 'task-401',
    day: 4,
    category: 'academic',
    targetAudience: 'All',
    title: 'Central Library Tour & RFID Punching Activation',
    shortDesc: 'Tour the 4-floor Central Library (Block 37) and activate your 4-book checkout quota.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-library',
    officeName: 'Central Library Circulation Desk (Block 37, Ground Floor)',
    steps: [
      'Visit Block 37 Central Library Circulation Desk.',
      'Hand over your Smart RFID Student ID card for digital barcode encoding.',
      'Learn how the self-service book checkout and return kiosks work on Floor 1.',
      'Explore the 24x7 Air-Conditioned Silent Reading Hall on Floor 2.',
      'Access IEEE Xplore, ScienceDirect, and EBSCO digital library credentials via campus Wi-Fi.'
    ],
    tips: 'Undergraduate students can issue up to 4 textbooks simultaneously for a duration of 14 days without renewal penalties.',
    estimatedMinutes: 45
  },
  {
    id: 'task-402',
    day: 4,
    category: 'hostel',
    targetAudience: 'Hosteller',
    title: 'Laundry Service Onboarding & RFID Garment Tags',
    shortDesc: 'Collect your laundry bag and learn the weekly pickup schedule (40 washes per semester).',
    priority: 'Recommended',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-unimall',
    officeName: 'Central Mechanized Laundry Hub (UniMall Lower Ground)',
    steps: [
      'Present your hostel allotment slip at the UniMall laundry counter.',
      'Receive your designated barcoded heavy canvas laundry bag.',
      'Note your wings allocated laundry days (e.g., BH-4 Wing A: Monday & Thursday mornings).',
      'Understand laundry turnaround time: Washed, dried, and steam-pressed within 48 hours.'
    ],
    tips: 'Never send delicate woolen fabrics or shoes in the mechanized industrial laundry.',
    estimatedMinutes: 20
  },

  // DAY 5
  {
    id: 'task-501',
    day: 5,
    category: 'administrative',
    targetAudience: 'All',
    title: 'UGC Anti-Ragging Affidavit Online Submission',
    shortDesc: 'Fill mandatory Government of India anti-ragging undertaking and input reference ID on UMS.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: true,
    proofUploaded: null,
    locationRef: 'loc-block32',
    officeName: 'Online Portal / Division of Student Welfare (Block 13)',
    steps: [
      'Visit the national portal: www.antiragging.in.',
      'Fill student and parental details, university affiliation, and emergency contacts.',
      'Receive your unique National Anti-Ragging Reference Number via email.',
      'Open UMS > Compliance > Anti-Ragging Declaration and submit the reference number along with signed PDF.'
    ],
    tips: 'University maintains strict zero-tolerance policy against ragging with immediate suspension and police FIR.',
    estimatedMinutes: 25
  },
  {
    id: 'task-502',
    day: 5,
    category: 'academic',
    targetAudience: 'All',
    title: 'Class Representative (CR) Election & Section WhatsApp Group',
    shortDesc: 'Meet your section classmates, elect Academic CRs, and join the verified faculty announcements group.',
    priority: 'Recommended',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block34',
    officeName: 'Section Classroom (Check your Timetable room code)',
    steps: [
      'Attend the designated tutorial hour in your section classroom.',
      'Participate in the introduction session moderated by the Section Mentor.',
      'Cast vote or volunteer for Class Representative (1 Boy CR & 1 Girl CR per section).',
      'Scan the official WhatsApp/Telegram community invite link shared on the blackboard.'
    ],
    tips: 'The CR directly communicates timetable changes, extra classes, and quiz dates with faculty.',
    estimatedMinutes: 50
  },

  // DAY 6 - 8
  {
    id: 'task-601',
    day: 6,
    category: 'academic',
    targetAudience: 'All',
    title: 'Academic Mentor & Proctor One-on-One Introduction',
    shortDesc: 'Schedule introductory meeting with your assigned faculty mentor to review course plan.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block34',
    officeName: 'Faculty Cabins (Check student profile mentor details)',
    steps: [
      'Check your assigned Faculty Mentor name and cabin location on your UMS Profile.',
      'Visit during official mentor consulting hours.',
      'Discuss elective selections, career interests, and academic background.',
      'Obtain mentor initial signoff in your Academic Orientation Diary.'
    ],
    tips: 'Your mentor is your primary academic advisor throughout your entire 4-year degree journey.',
    estimatedMinutes: 30
  },
  {
    id: 'task-701',
    day: 7,
    category: 'administrative',
    targetAudience: 'All',
    title: 'University Health Centre Registration & Blood Group Record',
    shortDesc: 'Register your medical file at University Hospital for 24x7 free campus OPD & emergency care.',
    priority: 'Recommended',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-hospital',
    officeName: 'University Hospital & Healthcare Centre (Opposite Block 25)',
    steps: [
      'Visit the University Hospital reception with your Student ID card.',
      'Complete brief general health checkup (height, weight, BP, verified blood group).',
      'Declare any pre-existing chronic conditions or medication allergies.',
      'Save the 24x7 Campus Ambulance Hotline: +91 98888 11222 in your phone favorites.'
    ],
    tips: 'The campus hospital provides free basic medicines, doctor consultations, physiotherapy, and 24-hour ambulance transport.',
    estimatedMinutes: 30
  },
  {
    id: 'task-801',
    day: 8,
    category: 'academic',
    targetAudience: 'All',
    title: 'Laboratory Safety Briefing & Equipment Kit Issuance',
    shortDesc: 'Attend mandatory lab safety walkthrough for engineering labs and obtain lab coat/apron.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block34',
    officeName: 'Department Science & Engineering Laboratories',
    steps: [
      'Attend safety lecture in the workshop/computing/electronics laboratory.',
      'Purchase approved white cotton lab coat and safety glasses from UniMall Stationery.',
      'Sign the Laboratory Safety Charter declaring adherence to equipment handling protocols.'
    ],
    tips: 'Open-toed footwear and shorts are strictly prohibited inside chemistry and mechanical labs.',
    estimatedMinutes: 45
  },

  // DAY 9 - 11
  {
    id: 'task-901',
    day: 9,
    category: 'hostel',
    targetAudience: 'Hosteller',
    title: 'Hostel Wing Meet & Student Grievance Committee Session',
    shortDesc: 'Attend common hall floor meeting with Warden, Chief Caretaker, and Wing Prefects.',
    priority: 'Optional',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-hostels',
    officeName: 'Hostel Recreation Hall / Common Room',
    steps: [
      'Gather in the Ground Floor Common Hall at 8:30 PM.',
      'Meet your Wing Prefects and note their room numbers for immediate water/electricity help.',
      'Suggest improvements for mess menus and weekend sports tournaments.'
    ],
    tips: 'A great way to make friends across different branches living on your floor!',
    estimatedMinutes: 40
  },
  {
    id: 'task-1001',
    day: 10,
    category: 'administrative',
    targetAudience: 'All',
    title: 'National Academic Depository (ABC ID / DigiLocker) Linking',
    shortDesc: 'Create 12-digit Academic Bank of Credits (ABC) ID on DigiLocker and map onto UMS.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: true,
    proofUploaded: null,
    locationRef: 'loc-block32',
    officeName: 'Online Portal / Examination Branch',
    steps: [
      'Log into www.abc.gov.in using your DigiLocker / Aadhaar OTP credentials.',
      'Generate your 12-digit Academic Bank of Credits (ABC) Account ID.',
      'Open UMS > Academic Bank of Credits > Enter ABC ID.',
      'Click Verify and verify linked student name matches university records.'
    ],
    tips: 'Mandated by UGC: University examination credits cannot be officially transcribed without verified ABC ID.',
    estimatedMinutes: 20
  },
  {
    id: 'task-1101',
    day: 11,
    category: 'academic',
    targetAudience: 'All',
    title: 'Elective / Open Minor Final Course Confirmation',
    shortDesc: 'Review elective courses and language options before the final add/drop deadline closes.',
    priority: 'Optional',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block34',
    officeName: 'UMS Portal > Course Registration Desk',
    steps: [
      'Open UMS > Course Management > View Registered Electives.',
      'Check choice of foreign languages (French/German/Spanish/Japanese) or open minor tracks.',
      'If you wish to change section or elective, submit add/drop change request before 5:00 PM.'
    ],
    tips: 'Check with senior buddies which professors have the best practical teaching style!',
    estimatedMinutes: 20
  },

  // DAY 12 - 15
  {
    id: 'task-1201',
    day: 12,
    category: 'administrative',
    targetAudience: 'All',
    title: 'Sports Complex & Olympic Swimming Pool Membership Card',
    shortDesc: 'Enroll at Shanti Devi Mittal Indoor Sports Complex for gym, badminton, and pool access.',
    priority: 'Optional',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-sports',
    officeName: 'Sports Complex Reception Desk',
    steps: [
      'Visit Indoor Stadium Reception with your Student RFID Card.',
      'Present medical clearance stamp from University Hospital.',
      'Choose sports access plan (Indoor Badminton, Squash, Gym, Olympic Pool).',
      'Receive your Sports Pass hologram sticker on ID card.'
    ],
    tips: 'Gym slots fill up fast: early morning 6:00 AM - 7:30 AM slots are the most refreshing.',
    estimatedMinutes: 25
  },
  {
    id: 'task-1301',
    day: 13,
    category: 'academic',
    targetAudience: 'All',
    title: 'Student Club & Society Recruitment Orientation',
    shortDesc: 'Explore 80+ student organizations across Tech, Dance, Music, Drama, Coding, and NSS.',
    priority: 'Recommended',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block13',
    officeName: 'Division of Student Welfare (Block 13 Open Air Amphitheatre)',
    steps: [
      'Walk through the Club Stalls set up along Baldev Raj Mittal Unipolis.',
      'Talk to student leads of Coding Clubs, Formula Racing, Drama, and Media societies.',
      'Submit online audition/interview forms for up to 2 clubs of your interest.'
    ],
    tips: 'Active club involvement builds leadership, friends, and valuable CV bullet points.',
    estimatedMinutes: 60
  },
  {
    id: 'task-1401',
    day: 14,
    category: 'academic',
    targetAudience: 'All',
    title: 'First Continuous Assessment (CA) Pattern & 75% Attendance Review',
    shortDesc: 'Understand examination weightage, CA test calendars, and strict 75% attendance rule.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block32',
    officeName: 'Academic Portal / Proctor Guidelines',
    steps: [
      'Review the university grading policy: 30% CA, 20% Mid-Term Exam (MTE), 50% End-Term (ETE).',
      'Check the 75% mandatory attendance threshold: Falling below 75% leads to automatic exam debarment.',
      'Learn how duty leaves for official hackathons, medical leaves, and sports competitions are claimed on UMS within 3 days.'
    ],
    tips: 'Always maintain attendance at 80%+ early on as buffer against seasonal sickness or unexpected emergencies.',
    estimatedMinutes: 20
  },
  {
    id: 'task-1501',
    day: 15,
    category: 'administrative',
    targetAudience: 'All',
    title: 'First-15 Onboarding Milestone Clearance & Certificate',
    shortDesc: 'Complete all pending tasks to unlock your verified Student Onboarding Completion Certificate.',
    priority: 'Mandatory',
    isCompleted: false,
    completedAt: null,
    proofRequired: false,
    proofUploaded: null,
    locationRef: 'loc-block32',
    officeName: 'OnboardMe System Completion Desk',
    steps: [
      'Ensure all mandatory academic, residential, and administrative tasks show green completed checkmarks.',
      'Resolve any outstanding verification flags with Admissions or Accounts.',
      'Download your formal "First 15 Days Onboarding Completion Badge & Certificate".',
      'Congratulations, you are now 100% campus-ready and fully oriented for your university journey!'
    ],
    tips: 'Keep your onboarding completion certificate saved in your DigiLocker/Google Drive.',
    estimatedMinutes: 15
  }
];

export const initialCampusLocations = [
  {
    id: 'loc-block32',
    code: 'Block 32',
    name: 'Administrative Headquarters & Admissions Block',
    category: 'Administration',
    icon: 'Building2',
    color: 'emerald',
    coordinates: { x: 38, y: 46 }, // Percentage coordinates on campus map
    description: 'Central hub for university administration, admissions, registrar, fee payments, and UMS IT servers.',
    floors: [
      { floor: 'Ground Floor', services: 'Central Admissions Verification, Reception, Information Counter, Waiting Foyer' },
      { floor: '1st Floor', services: 'Division of Accounts, Fee Payment Counters 1-12, Scholarship Helpdesk, Education Loan Desk' },
      { floor: '2nd Floor', services: 'Division of Information Technology, UMS Server Team, Biometrics Central Server Room' },
      { floor: '3rd Floor', services: 'Office of the Registrar, Dean of Academic Affairs, International Student Cell' }
    ],
    hours: 'Monday – Saturday: 9:00 AM – 5:30 PM (Lunch 1:30 PM – 2:00 PM)',
    peakHours: '10:30 AM – 1:00 PM (Heavy rush in early semester)',
    contacts: {
      phone: '+91 1824 517000',
      email: 'admissions@university.edu.in',
      helpdesk: 'Counter 2 in Ground Floor Foyer'
    },
    tips: 'Early mornings before 10:00 AM have minimal queues for fee or certificate stamping.'
  },
  {
    id: 'loc-block34',
    code: 'Block 34',
    name: 'School of Computer Science & Engineering (Engineering Hub)',
    category: 'Academic',
    icon: 'GraduationCap',
    color: 'blue',
    coordinates: { x: 26, y: 32 },
    description: 'Academic block housing CSE, IT, Computer Applications, robotics centers, AI labs, and auditorium.',
    floors: [
      { floor: 'Ground Floor', services: 'Audi 34-101, Robotics Workshop, Apple Mac Developer Lab, Cisco Networking Academy' },
      { floor: '1st - 3rd Floors', services: 'Multimedia Classrooms 34-101 to 34-315, Faculty Cabins' },
      { floor: '4th - 5th Floors', services: 'High Performance Computing Cluster, Cloud Computing Labs, Hackathon Lab' },
      { floor: '6th - 7th Floors', services: 'Dean Office (34-601), Final Year Project Incubation Chambers, Quiet Study Terraces' }
    ],
    hours: 'Monday – Saturday: 8:00 AM – 7:00 PM (Labs open till 8:00 PM)',
    peakHours: 'Between lecture switchovers (10:50 AM, 12:50 PM, 3:50 PM)',
    contacts: {
      phone: '+91 1824 517134',
      email: 'cse.support@university.edu.in',
      helpdesk: 'Ground floor atrium helpdesk'
    },
    tips: 'Look at classroom door labels: 34-402 means Block 34, 4th Floor, Room 2. High-speed lifts are situated on the East wing.'
  },
  {
    id: 'loc-library',
    code: 'Block 37',
    name: 'Central University Library',
    category: 'Academic',
    icon: 'BookOpen',
    color: 'indigo',
    coordinates: { x: 42, y: 28 },
    description: 'Modern 4-story knowledge reservoir holding 1.5 million volumes, private study carrels, and 24x7 reading halls.',
    floors: [
      { floor: 'Ground Floor', services: 'Circulation Desk, RFID Kiosks, New Arrivals Gallery, Newspaper Lounge, Bag Cloakroom' },
      { floor: '1st Floor', services: 'Engineering & Technology Stacks, Book Bank Section, Self-Issue Return Terminals' },
      { floor: '2nd Floor', services: 'Management, Social Sciences & Law Collection, Silent Discussion Rooms (pre-booking needed)' },
      { floor: '3rd Floor', services: 'Digital Library (150 High-End Terminals), Research Scholar Cube, Rare Book Archives' },
      { floor: 'Basement', services: '24x7 Air-Conditioned Study Arena (Open all night during examination weeks)' }
    ],
    hours: 'General Library: 8:00 AM – 10:00 PM | 24x7 Silent Hall: Always Open with RFID Card',
    peakHours: '5:00 PM – 9:00 PM',
    contacts: {
      phone: '+91 1824 517037',
      email: 'library@university.edu.in',
      helpdesk: 'Front circulation desk'
    },
    tips: 'Keep cellphones on vibration. Bags are not permitted inside stack areas; deposit them at the RFID lockers near entrance.'
  },
  {
    id: 'loc-unimall',
    code: 'Block 36',
    name: 'UniMall – Central Shopping & Student Services Complex',
    category: 'Services',
    icon: 'ShoppingBag',
    color: 'amber',
    coordinates: { x: 50, y: 44 },
    description: 'Comprehensive 4-floor on-campus commercial hub providing all daily essentials, food courts, and utility shops.',
    floors: [
      { floor: 'Lower Ground', services: 'Central Mechanized Laundry Hub, Student Courier/Speed Post Service, Bicycle Repair Depot' },
      { floor: 'Ground Floor', services: 'University Departmental Supermarket, Stationery World, Uniforms & Lab Coats, Apple Store' },
      { floor: '1st Floor', services: 'Student Convenience Center, Unisex Hair Salon, Optical Clinic, Hardware & Electronics Repair' },
      { floor: '2nd Floor', services: 'Multi-Cuisine Food Court (Domino’s, Subway, CCD, Roll Xpress, Baskin Robbins, Chai Point)' }
    ],
    hours: 'Daily: 8:30 AM – 10:00 PM',
    peakHours: '1:00 PM – 3:00 PM & 5:30 PM – 8:30 PM',
    contacts: {
      phone: '+91 1824 517036',
      email: 'unimall@university.edu.in',
      helpdesk: 'Ground floor security office'
    },
    tips: 'You can get textbook photocopies, passport photos, and spiral bindings done here at subsidized university rates.'
  },
  {
    id: 'loc-block13',
    code: 'Block 13',
    name: 'Division of Student Welfare (DSW) & Unipolis',
    category: 'Services',
    icon: 'Users',
    color: 'purple',
    coordinates: { x: 58, y: 36 },
    description: 'Nerve center for extracurricular life: cultural societies, NCC, NSS, ID cards, grievances, and open auditorium.',
    floors: [
      { floor: 'Ground Floor', services: 'Smart RFID ID Card Printing Counters, Lost & Found Hub, Cultural Affairs Desk' },
      { floor: '1st Floor', services: 'Dean DSW Office, Student Grievance Redressal Cell, Anti-Ragging Special Taskforce' },
      { floor: '2nd Floor', services: 'Dance Rehearsal Studios, Music Jamming Rooms, Dramatics Society Green Rooms' }
    ],
    hours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
    peakHours: '3:00 PM – 5:30 PM',
    contacts: {
      phone: '+91 1824 517013',
      email: 'dsw@university.edu.in',
      helpdesk: 'Counter 1 in DSW Lobby'
    },
    tips: 'If you lose your RFID ID card, report here immediately to block electronic access and obtain a duplicate card.'
  },
  {
    id: 'loc-hospital',
    code: 'Uni-Hospital',
    name: 'University Healthcare Centre & Emergency Hospital',
    category: 'Healthcare',
    icon: 'HeartPulse',
    color: 'rose',
    coordinates: { x: 72, y: 22 },
    description: '50-bed accredited on-campus medical facility with full-time doctors, emergency resuscitation, and 24x7 pharmacy.',
    floors: [
      { floor: 'Ground Floor', services: '24x7 Emergency Casualty Ward, Ambulance Dispatch Bay, Free Dispensary & Pharmacy' },
      { floor: '1st Floor', services: 'Specialist OPDs (General Medicine, Orthopedics, Dental Clinic, ENT, Ophthalmology)' },
      { floor: '2nd Floor', services: 'Inpatient Recovery Rooms, Physiotherapy Clinic, Pathology Laboratory (Blood/Urine Tests)' }
    ],
    hours: 'Casualty / Emergency: 24 Hours / 365 Days | OPD: 9:00 AM – 7:00 PM',
    peakHours: '9:30 AM – 12:00 PM',
    contacts: {
      phone: '+91 1824 517112 / +91 98888 11222 (Ambulance)',
      email: 'hospital@university.edu.in',
      helpdesk: 'Emergency Triage Counter'
    },
    tips: 'Consultations, routine vital checkups, and standard oral medications are 100% free for all registered students.'
  },
  {
    id: 'loc-hostels',
    code: 'Residences',
    name: 'Boys Hostels (BH 1-8) & Girls Hostels (GH 1-6)',
    category: 'Residential',
    icon: 'Home',
    color: 'orange',
    coordinates: { x: 78, y: 55 },
    description: 'Modern residential sector with multi-tier biometric security, dining halls, study lofts, and sports courts.',
    floors: [
      { floor: 'Boys Sector (East)', services: 'BH-1 to BH-8 (Capacity: 12,000 students), In-house gymnasium, basketball courts' },
      { floor: 'Girls Sector (West)', services: 'GH-1 to GH-6 (Biometric access gates, high security perimeter, mini-mart, salon)' },
      { floor: 'Each Building', services: 'Warden Office, Resident Doctor Desk, Dining Mess, Reading Room, Table Tennis Room' }
    ],
    hours: 'Turnstile Gates: Open 5:00 AM | Mandatory Evening Curfew: 7:30 PM (Biometric Punch)',
    peakHours: '7:00 PM – 7:30 PM (Curfew queue at biometric turnstiles)',
    contacts: {
      phone: '+91 1824 517099 (Chief Warden Helpline)',
      email: 'hostelcare@university.edu.in',
      helpdesk: 'Hostel Ground Floor Reception Desk'
    },
    tips: 'Always punch before 7:25 PM to avoid long biometric queues. Deliveries from Swiggy/Zomato are received at main security gates.'
  },
  {
    id: 'loc-sports',
    code: 'Sports Arena',
    name: 'Shanti Devi Mittal Indoor Stadium & Sports Complex',
    category: 'Sports',
    icon: 'Trophy',
    color: 'teal',
    coordinates: { x: 18, y: 65 },
    description: 'World-class sporting infrastructure with Olympic swimming pool, indoor synthetic badminton courts, and gyms.',
    floors: [
      { floor: 'Ground Floor', services: 'Olympic Size Heated Swimming Pool, 8 Synthetic Badminton Courts, Squash Courts' },
      { floor: '1st Floor', services: 'State-of-the-Art Fitness Gymnasium, Cardio Deck, Yoga & Aerobics Studio' },
      { floor: 'Outdoor Grounds', services: 'Floodlit Football Field, 400m Synthetic Athletic Track, Cricket Stadium, Volleyball Courts' }
    ],
    hours: 'Morning: 6:00 AM – 9:00 AM | Evening: 4:30 PM – 8:30 PM',
    peakHours: '5:30 PM – 7:30 PM',
    contacts: {
      phone: '+91 1824 517045',
      email: 'sports@university.edu.in',
      helpdesk: 'Stadium main gate reception'
    },
    tips: 'Non-marking gum-sole sports shoes are mandatory for indoor badminton and squash wooden courts.'
  },
  {
    id: 'loc-transport',
    code: 'Block 29',
    name: 'Central Transportation Terminal & Bus Fleet Depot',
    category: 'Administration',
    icon: 'Bus',
    color: 'cyan',
    coordinates: { x: 32, y: 75 },
    description: 'Dedicated fleet depot managing 200+ university air-conditioned buses connecting 25+ cities and towns.',
    floors: [
      { floor: 'Ground Floor', services: 'Bus Route Registration Desk, Driver Shift Log, Fleet Maintenance Workshop' },
      { floor: 'Terminal Bay', services: 'Numbered boarding platforms (Bays 1-35) with digital departure screens' }
    ],
    hours: 'Monday – Saturday: 7:00 AM – 6:30 PM',
    peakHours: '4:45 PM – 5:30 PM (Evening campus dispersal)',
    contacts: {
      phone: '+91 1824 517029',
      email: 'transport@university.edu.in',
      helpdesk: 'Room 104, Block 29'
    },
    tips: 'Buses depart promptly at 5:10 PM. Always arrive at your platform by 5:00 PM.'
  },
  {
    id: 'loc-security',
    code: 'Main Security',
    name: 'Chief Security Office & Main Gate 1 Control Post',
    category: 'Services',
    icon: 'Shield',
    color: 'red',
    coordinates: { x: 50, y: 88 },
    description: '24x7 campus surveillance hub with 2,500+ CCTV camera monitoring room and emergency quick-reaction team.',
    floors: [
      { floor: 'Ground Floor', services: 'Visitor Pass Processing, Vehicle FASTag Scanning, Lost ID Drop Box, 24x7 Security Control' }
    ],
    hours: '24 Hours / 365 Days',
    peakHours: '8:00 AM – 9:30 AM (Morning traffic ingress)',
    contacts: {
      phone: '+91 1824 517001 / +91 98760 00111 (SOS Emergency)',
      email: 'security@university.edu.in',
      helpdesk: 'Main Gate 1 Control Room'
    },
    tips: 'Outside visitors, parents, and vehicles must register with Aadhaar ID at Gate 1 reception.'
  }
];

export const initialFaqs = [
  {
    id: 'faq-1',
    category: 'UMS & Tech',
    question: 'How do I decipher my classroom code from the UMS timetable (e.g., 34-602)?',
    answer: 'Classroom codes follow the format: [Block Number]-[Floor Number][Room Number]. In "34-602", "34" is Block 34 (Computer Science Building), "6" is the 6th Floor, and "02" is Room 2. If you see "32-G04", "G" stands for Ground Floor.',
    tags: ['UMS', 'Timetable', 'Classrooms']
  },
  {
    id: 'faq-2',
    category: 'Academics',
    question: 'What is the minimum attendance requirement, and what happens if I fall below it?',
    answer: 'The university mandates a minimum of 75% aggregate attendance in every individual theory and laboratory course. If your attendance falls below 75%, UMS automatically debars you from appearing in the End-Term Examination (ETE), resulting in an "I" (Incomplete/Debarred) grade and having to re-register the course.',
    tags: ['Attendance', '75% Rule', 'Exams']
  },
  {
    id: 'faq-3',
    category: 'Hostel & Residential',
    question: 'What is the hostel gate curfew time, and how do I apply for an overnight out-pass?',
    answer: 'Hostel in-time is strictly 7:30 PM. All hostellers must scan their biometric thumbprint at the hostel turnstiles before 7:30 PM. For weekend or overnight leave, you must apply at least 24 hours prior via UMS > Leave Management. Your parents will receive an automated OTP via SMS to approve the leave request before the warden grants approval.',
    tags: ['Curfew', 'Biometrics', 'Out-pass', 'Hostel']
  },
  {
    id: 'faq-4',
    category: 'UMS & Tech',
    question: 'What should I do if my UMS password is not working or my account is locked?',
    answer: 'Click "Forgot Password" on the UMS login screen to reset your password via your registered email/phone OTP. If your account is locked due to multiple incorrect attempts or fee hold, visit the IT Helpdesk at Block 32, 2nd Floor, or submit a ticket through this app’s Help Support desk.',
    tags: ['UMS', 'Password', 'Account Locked']
  },
  {
    id: 'faq-5',
    category: 'Administration',
    question: 'Where do I collect my permanent RFID Student Identity Card?',
    answer: 'Permanent Smart RFID ID cards are issued at the Division of Student Welfare (Block 13, Ground Floor, Counter 4) after your physical documents are verified at Block 32. Bring your stamped verification slip and one photo.',
    tags: ['ID Card', 'DSW', 'Block 13']
  },
  {
    id: 'faq-6',
    category: 'Healthcare & Safety',
    question: 'Is healthcare free on campus, and who do I call during a late-night medical emergency?',
    answer: 'Yes! Consultations, routine vital checkups, and standard medications are completely free for all students at the 50-bed University Healthcare Centre (opposite Block 25). For medical emergencies, call the 24x7 Campus Ambulance Hotline: +91 98888 11222. An ambulance will reach your hostel within 5 minutes.',
    tags: ['Hospital', 'Emergency', 'Ambulance', 'Free Care']
  },
  {
    id: 'faq-7',
    category: 'Hostel & Residential',
    question: 'Can I keep an electric kettle, induction plate, or iron in my hostel room?',
    answer: 'No. High-wattage heating appliances (heaters, immersion rods, induction plates, electric kettles) are strictly prohibited inside hostel rooms due to electrical safety and fire regulations. Hostellers can use the hot water dispensers in the corridor and the central laundry service at UniMall.',
    tags: ['Hostel Rules', 'Appliances', 'Safety']
  },
  {
    id: 'faq-8',
    category: 'Day Scholar & Commute',
    question: 'How do university buses operate, and where do they depart from in the evening?',
    answer: 'University AC buses arrive at campus between 8:15 AM – 8:40 AM. In the evening, all buses assemble at the Central Bus Terminal behind Block 36 (UniMall) and depart strictly at 5:10 PM. Be at your assigned bus bay by 5:00 PM with your RFID Bus Pass.',
    tags: ['Bus Route', 'Day Scholar', 'Transport']
  },
  {
    id: 'faq-9',
    category: 'Academics',
    question: 'What is Continuous Assessment (CA) and how is my grade calculated?',
    answer: 'Your course grade is evaluated out of 100 marks: Continuous Assessment (CA) accounts for 30 marks (best 2 out of 3 quizzes/assignments + attendance bonus), Mid-Term Exam (MTE) accounts for 20 marks, and the End-Term Exam (ETE) accounts for 50 marks.',
    tags: ['Grades', 'CA', 'Mid-Term', 'Exam Pattern']
  },
  {
    id: 'faq-10',
    category: 'Administration',
    question: 'What is the UGC Anti-Ragging undertaking and is it compulsory?',
    answer: 'Yes, it is legally mandated by the Supreme Court of India and UGC. Every freshman and their parents must fill the online undertaking at www.antiragging.in, obtain a reference number, and upload it on UMS before Day 5. The campus has an active Anti-Ragging flying squad and CCTV surveillance.',
    tags: ['Anti-Ragging', 'UGC', 'Legal']
  }
];

export const initialHelpTickets = [
  {
    id: 'tkt-101',
    ticketNo: 'TKT-2024-8841',
    studentId: 'rahul-verma',
    studentName: 'Rahul Verma',
    category: 'UMS Technical Issue',
    subject: 'Timetable section showing overlapping lecture slots on Wednesday',
    description: 'On Wednesdays from 11:00 AM - 12:00 PM, both CSE205 (Data Structures) in 34-402 and MTH108 in 34-201 appear simultaneously on my UMS timetable.',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 'Academic Scheduling Cell (Mr. V. Ramanathan)',
    createdAt: '2024-09-02 11:20 AM',
    responses: [
      {
        author: 'System Auto-Ack',
        role: 'Bot',
        time: '2024-09-02 11:21 AM',
        message: 'Your ticket has been logged and assigned to the Academic Scheduling Cell.'
      },
      {
        author: 'Mr. V. Ramanathan',
        role: 'Academic Officer',
        time: '2024-09-02 02:45 PM',
        message: 'We are rectifying the tutorial overlap for Section K24AB. An updated sync will reflect on your UMS portal by tomorrow morning 9:00 AM.'
      }
    ]
  },
  {
    id: 'tkt-102',
    ticketNo: 'TKT-2024-7934',
    studentId: 'rahul-verma',
    studentName: 'Rahul Verma',
    category: 'Hostel Maintenance',
    subject: 'Room 412-B study desk lamp electrical socket not receiving power',
    description: 'The wall socket next to bed B in BH-4 Room 412 is inactive. Unable to charge laptop or plug study lamp.',
    priority: 'Normal',
    status: 'Resolved',
    assignedTo: 'Hostel Maintenance Team (Electrician Sunil)',
    createdAt: '2024-09-01 04:30 PM',
    responses: [
      {
        author: 'Caretaker BH-4',
        role: 'Hostel Staff',
        time: '2024-09-01 05:15 PM',
        message: 'Job card #412-E has been assigned to Electrician Sunil.'
      },
      {
        author: 'Electrician Sunil',
        role: 'Maintenance',
        time: '2024-09-02 10:00 AM',
        message: 'Fuse replaced on the 4th floor distribution board. Socket tested with multimeter, functioning normally.'
      }
    ]
  }
];

export const initialChatMessages = {
  'buddy-aarav': [
    {
      id: 'msg-1',
      sender: 'buddy',
      time: '10:00 AM',
      text: 'Hey Rahul! Welcome to the university and to BH-4! I am Aarav, your assigned 3rd-year buddy for your first 15 days.'
    },
    {
      id: 'msg-2',
      sender: 'buddy',
      time: '10:01 AM',
      text: 'How did your room allotment go yesterday? Did you manage to activate your UMS login yet?'
    },
    {
      id: 'msg-3',
      sender: 'user',
      time: '10:14 AM',
      text: 'Hey Aarav bhaiya! Yes, got into Room 412. Just activated UMS! But the campus is huge, getting confused between Block 32 and 34.'
    },
    {
      id: 'msg-4',
      sender: 'buddy',
      time: '10:16 AM',
      text: 'Haha totally normal! Remember: Block 32 is the big white building with glass panels near the main lawn (Admin & Admissions). Block 34 is the red brick tower with all the CSE labs. If you ever get lost, open the Campus Guidance tab here—it has full maps and room decoders!'
    }
  ],
  'buddy-priya': [
    {
      id: 'msg-p1',
      sender: 'buddy',
      time: '09:30 AM',
      text: 'Hi Sneha! Welcome to Mittal School of Business! As a fellow day scholar on Bus Route 14, let me know if you need any tips on commute or locker bookings.'
    }
  ],
  'buddy-tanya': [
    {
      id: 'msg-t1',
      sender: 'buddy',
      time: '11:00 AM',
      text: 'Hi Ananya! Welcome to School of Design! GH-3 is great. Make sure you get your lab kit from UniMall before our first studio class.'
    }
  ]
};

export const emergencyContacts = [
  {
    name: 'Campus Main Security Control (24x7)',
    phone: '+91 1824 517001',
    altPhone: '+91 98760 00111',
    desc: 'For on-campus security, unauthorized entry, lost belongings, and emergency patrol.'
  },
  {
    name: 'University Healthcare Ambulance (24x7)',
    phone: '+91 98888 11222',
    altPhone: '+91 1824 517112',
    desc: 'Instant ambulance dispatch to any hostel or campus block within 5 minutes.'
  },
  {
    name: 'Women Safety & Proctorial Helpline',
    phone: '+91 98784 55667',
    altPhone: '+91 1824 517013',
    desc: 'Dedicated round-the-clock helpline for female students and security escorts after dark.'
  },
  {
    name: 'Anti-Ragging Squad Rapid Response Cell',
    phone: '1800-180-5522',
    altPhone: '+91 98144 00999',
    desc: 'National & University Anti-Ragging toll-free rapid action helpline.'
  },
  {
    name: 'Hostel Chief Warden Emergency Desk',
    phone: '+91 1824 517099',
    altPhone: '+91 98765 43210',
    desc: 'For urgent room issues, medical emergencies at night, or parental emergency visits.'
  }
];
