# First Fifteen Days: New Student Onboarding System 🎓
> **Course / Project INT257 • Problem Statement 03**  
> An integrated, student-centric web platform solving newcomer struggles during the critical first two weeks of university life.

---

## 📌 Problem Statement
New university students face severe friction and disorientation during their first fifteen days because essential information—campus building locations, University Management System (UMS) procedures, timetable classroom numbering, hostel curfew & biometric rules, and administrative clearance steps—is scattered across uncoordinated portals, notice boards, and physical desks.

---

## 🏗️ System Architecture & Modules

### 1. Integration Pipeline
```
[ Student Profile ]  --->  [ Required Onboarding Tasks ]  --->  [ Guidance & Senior Help ]
(Hosteller vs Day Scholar)   (Day 1–15 Milestone Checklists)     (Interactive Map, UMS Tools & Buddy)
```
- **Dynamic Personalization**: Switching between student profiles (e.g. *Rahul Verma* [Hosteller] vs. *Sneha Patel* [Day Scholar]) automatically re-filters and re-configures residential, dining, bus transport, and compliance milestones.
- **15-Day Milestone Roadmap**: An interactive day-by-day stepper that highlights "Today's Agenda" and keeps freshers focused without overwhelming them.

---

### 2. Module Breakdown

#### 🎓 Module 1 – Personalised Onboarding Checklist
- **Categorized Milestones**:
  - **Academic Tasks**: UMS login activation, section timetable extraction, LMS & official email setup, Central Library RFID cards, Class Representative elections, mentor allocation.
  - **Hostel & Living Tasks**: Room inventory sign-off, biometric fingerprint registration (7:30 PM curfew), dining hall mess slots, laundry token onboarding, UMS overnight out-pass workflow with parent OTP verification.
  - **Commute Tasks (for Day Scholars)**: University bus pass allocation (Bays 1–35), vehicle FASTag/parking permits, and campus daytime lockers.
  - **Administrative Tasks**: Physical document verification at Admissions Block 32, Smart RFID student ID collection at DSW (Block 13), UGC Anti-Ragging online affidavits, and DigiLocker Academic Bank of Credits (ABC ID) mapping.
- **Priority Tags**: Mandatory Blockers (⚠️), Recommended, and Optional.
- **Proof Attachment**: Simulate uploading fee receipts or signed verification slips to mark items cleared.
- **Celebratory Confetti & Readiness Score**: Real-time progress percentage bar and printable/downloadable **Campus Readiness Certificate**.

#### 🗺️ Module 2 – Campus & Service Guidance
- **Interactive Vector Campus Map**: Clickable schematic map featuring Block 32 (Admin/Admissions), Block 34 (Computer Science), UniMall (Commercial & Dining), Central Library, DSW (Block 13), University Hospital, Hostels (BH/GH), Sports Arena, and Gate 1 Security.
- **Contextual "Where Do I Go For...?" Quick Navigator**: Immediate answers and building pointers for common fresher questions (e.g., *Where do I get my ID card?*, *Where is fee clearance?*, *Where is 24x7 emergency medical care?*).
- **Classroom Room Code Decipher**: Tool to decode university room strings (e.g., `34-602` $\rightarrow$ Block 34, 6th Floor, Room 02, East Wing Elevator).
- **75% Attendance Calculator**: Calculates safe bunk margins or required consecutive attendances to maintain the university's strict 75% attendance rule.
- **Hostel Rules & Survival Primer**: Comprehensive breakdown of 7:30 PM curfews, mess meal hours, laundry turnaround, and prohibited items.

#### 🤝 Module 3 – Buddy & Help Support
- **Senior Buddy Mentorship**: Designated senior student mentor cards (Aarav Sharma - 3rd Year CSE, Priya Nair - 3rd Year BBA, Tanya Verma - 3rd Year Design) with ratings, bios, and consultation office hours.
- **Live In-App Buddy Chat**: Realistic interactive messaging with senior mentors featuring instant freshman FAQ quick prompts and auto-responses.
- **Freshman Helpdesk & Ticket Tracking**: Raise official support tickets across categories (*UMS Technical Issues*, *Hostel Maintenance*, *Timetable Clashes*, *ID Card Issues*) with SLA status tracking (*Open*, *In Progress*, *Resolved*) and threaded responses.
- **Freshman Knowledge Base & FAQs**: 10+ categorized FAQs covering exams, UMS password resets, healthcare, and out-passes.
- **24x7 Campus SOS & Emergency Desk**: One-click emergency contact cards for Campus Security, 24x7 Ambulance, Women Helpline, and Chief Warden.

---
