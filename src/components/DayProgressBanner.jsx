import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Clock, 
  AlertCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function DayProgressBanner() {
  const { 
    currentDay, 
    updateCurrentDay, 
    activeProfile, 
    tasks,
    completionPercentage,
    completedRelevantTasks,
    totalRelevantTasks
  } = useApp();

  // Find tasks scheduled specifically for the current simulated day
  const todayTasks = tasks.filter(t => t.day === currentDay);
  const completedTodayTasks = todayTasks.filter(t => t.isCompleted);

  // Day highlight titles
  const dayTheme = {
    1: 'Day 1: Arrival, Hostel Room Allotment & Document Verification',
    2: 'Day 2: Biometrics Setup, Timetable Decipher & Smart RFID ID Card',
    3: 'Day 3: UMS Deep-Dive, LMS University Email & Fee Receipts',
    4: 'Day 4: Central Library RFID Tour & Mechanized Laundry Onboarding',
    5: 'Day 5: Anti-Ragging Affidavit Submission & Class CR Elections',
    6: 'Day 6: Academic Faculty Mentor One-on-One Introduction',
    7: 'Day 7: University Hospital Medical Registration & Emergency Info',
    8: 'Day 8: Engineering Laboratories Safety & Lab Equipment Kit',
    9: 'Day 9: Hostel Floor Wing Meet & Grievance Council Session',
    10: 'Day 10: DigiLocker Academic Bank of Credits (ABC ID) Mapping',
    11: 'Day 11: Elective Courses Confirmation & Section Changes',
    12: 'Day 12: Indoor Sports Complex & Swimming Pool Enrollment',
    13: 'Day 13: Cultural Clubs, Technical Societies & Audition Drives',
    14: 'Day 14: Continuous Assessment (CA) Pattern & 75% Attendance Review',
    15: 'Day 15: Final Milestone Clearance & Readiness Certification'
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-indigo-900/10 mb-8 transition-all relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm">
                15-Day Freshman Roadmap
              </span>
              <span className="text-xs text-blue-200">
                • {activeProfile.name} ({activeProfile.studentType})
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {dayTheme[currentDay] || `Day ${currentDay} Milestone Orientation`}
            </h2>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => updateCurrentDay(currentDay - 1)}
              disabled={currentDay <= 1}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-white backdrop-blur-sm"
              title="Previous Day"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md text-xs font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>Day {currentDay} of 15</span>
            </div>
            <button
              onClick={() => updateCurrentDay(currentDay + 1)}
              disabled={currentDay >= 15}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-white backdrop-blur-sm"
              title="Next Day"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 15 Days Visual Tracker Stepper */}
        <div className="pt-4 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center justify-between min-w-[620px] gap-1 relative">
            
            {/* Connecting line behind circles */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/20 -translate-y-1/2 z-0" />

            {Array.from({ length: 15 }, (_, i) => i + 1).map((dayNum) => {
              const isPast = dayNum < currentDay;
              const isCurrent = dayNum === currentDay;
              const dayTasks = tasks.filter(t => t.day === dayNum);
              const allDoneForDay = dayTasks.length > 0 && dayTasks.every(t => t.isCompleted);

              return (
                <button
                  key={dayNum}
                  onClick={() => updateCurrentDay(dayNum)}
                  className="flex flex-col items-center gap-1.5 relative z-10 group"
                  title={`Click to view tasks for Day ${dayNum}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-900 ring-4 ring-amber-400/40 scale-110 shadow-lg'
                        : allDoneForDay
                          ? 'bg-emerald-400 text-slate-950 font-extrabold'
                          : isPast
                            ? 'bg-white/40 text-white'
                            : 'bg-white/15 text-white/70 hover:bg-white/30'
                    }`}
                  >
                    {allDoneForDay ? (
                      <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                    ) : (
                      dayNum
                    )}
                  </div>
                  <span className={`text-[10px] font-semibold tracking-tight transition-opacity ${
                    isCurrent ? 'text-amber-300 font-extrabold' : 'text-white/70 group-hover:text-white'
                  }`}>
                    D{dayNum}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Day Stat Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-100">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Day {currentDay} Agenda:
            </span>
            <span className="font-bold text-white">
              {todayTasks.length} task{todayTasks.length !== 1 ? 's' : ''} assigned
            </span>
            <span className="text-white/60">
              ({completedTodayTasks.length} completed)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-white/90">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Overall Campus Readiness: <strong>{completionPercentage}%</strong></span>
            </div>
            <div className="w-24 sm:w-32 bg-white/20 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
