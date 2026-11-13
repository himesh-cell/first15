import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Users, 
  Building2, 
  AlertTriangle, 
  Sparkles, 
  Award, 
  GraduationCap, 
  Home, 
  Bus, 
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function OverviewDashboard() {
  const { 
    activeProfile, 
    tasks, 
    currentDay, 
    setActiveTab, 
    completionPercentage, 
    mandatoryTasks, 
    completedMandatoryTasks,
    buddies,
    navigateToLocation,
    setSelectedTask,
    setIsCertificateOpen
  } = useApp();

  const assignedBuddy = buddies.find(b => b.id === activeProfile.assignedBuddyId) || buddies[0];
  const todayTasks = tasks.filter(t => t.day === currentDay);
  const pendingMandatory = mandatoryTasks.filter(t => !t.isCompleted);

  return (
    <div className="space-y-8">
      
      {/* Integration Pipeline Visual Showcase Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-wider mb-3 backdrop-blur-sm border border-blue-400/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            End-to-End System Integration Architecture
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            Student Profile → Onboarding Checklist → Guidance &amp; Support
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            New students no longer struggle across scattered campus sources. Your student profile automatically personalizes required academic, hostel, and administrative milestones, backed by interactive building navigation and dedicated senior mentor support.
          </p>
        </div>

        {/* 3-Step Interactive Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-6 relative z-10">
          
          {/* Step 1: Student Profile */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-500 text-white">
                  Step 1
                </span>
                <span className="text-[11px] text-blue-200 font-semibold">Intake Profile</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {activeProfile.name}
              </h4>
              <p className="text-xs text-slate-300">
                {activeProfile.studentType} • {activeProfile.program}
              </p>
              <div className="mt-3 text-[11px] text-slate-400 space-y-0.5">
                <p>Reg No: <span className="text-white font-mono">{activeProfile.registrationNo}</span></p>
                <p>Residence: <span className="text-white">
                  {activeProfile.studentType === 'Hosteller' ? activeProfile.hostelDetails?.hostelName : activeProfile.commuteDetails?.busRouteNo}
                </span></p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-blue-200 flex items-center justify-between">
              <span>Auto-configures tasks</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* Step 2: Onboarding Tasks */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-500 text-white">
                  Step 2
                </span>
                <span className="text-[11px] text-indigo-200 font-semibold">Module 1 Checklist</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                15-Day Milestone Tasks
              </h4>
              <p className="text-xs text-slate-300">
                {tasks.length} Personalized Tasks ({tasks.filter(t => t.isCompleted).length} Cleared)
              </p>
              <div className="mt-3 text-[11px] text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>Readiness:</span>
                  <span className="text-emerald-300 font-bold">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${completionPercentage}%` }} />
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('checklist')}
              className="mt-3 pt-2 border-t border-white/10 text-[10px] text-indigo-200 hover:text-white flex items-center justify-between font-bold"
            >
              <span>Open Checklist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 3: Contextual Guidance & Buddy */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500 text-white">
                  Step 3
                </span>
                <span className="text-[11px] text-amber-200 font-semibold">Guidance &amp; Buddy</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Locations &amp; Mentorship
              </h4>
              <p className="text-xs text-slate-300">
                Senior Buddy: {assignedBuddy.name}
              </p>
              <div className="mt-3 text-[11px] text-slate-400 space-y-0.5">
                <p>Campus Map: <span className="text-white">Click any task to locate desk</span></p>
                <p>Curfew &amp; UMS: <span className="text-white">Attendance calculator &amp; rules</span></p>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
              <button 
                onClick={() => setActiveTab('campus')}
                className="text-amber-200 hover:text-white font-bold"
              >
                Campus Map
              </button>
              <span className="text-white/30">•</span>
              <button 
                onClick={() => setActiveTab('buddy')}
                className="text-amber-200 hover:text-white font-bold"
              >
                Buddy Chat
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Grid: Today's Priorities + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Today's Priority Action Items (Day X) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                Today's Agenda (Day {currentDay} of 15)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tasks scheduled for your current onboarding milestone day:
              </p>
            </div>

            <button
              onClick={() => setActiveTab('checklist')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View All 15 Days</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {todayTasks.length > 0 ? (
              todayTasks.map(task => (
                <div
                  key={task.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-400 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                        task.priority === 'Mandatory' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' 
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 uppercase">
                        {task.category}
                      </span>
                      {task.isCompleted && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {task.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{task.officeName}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <button
                      onClick={() => navigateToLocation(task.locationRef)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-xs font-semibold"
                    >
                      Locate
                    </button>
                    <button
                      onClick={() => setActiveTab('checklist')}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm"
                    >
                      Guide
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  All scheduled tasks for Day {currentDay} are clear!
                </p>
              </div>
            )}
          </div>

          {/* Mandatory Blockers Callout */}
          {pendingMandatory.length > 0 && (
            <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">
                  {pendingMandatory.length} Mandatory Onboarding Milestone{pendingMandatory.length > 1 ? 's' : ''} Still Pending
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Mandatory tasks (Document Verification, Biometrics, Fee Clearances) must be completed to ensure unhindered class attendance and examination admit card generation.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Senior Mentor & Fast Shortcuts */}
        <div className="space-y-4">
          
          {/* Senior Mentor Quick Widget */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Assigned Mentor
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                Available
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={assignedBuddy.avatar}
                alt={assignedBuddy.name}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                  {assignedBuddy.name}
                </h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 truncate">
                  {assignedBuddy.program}
                </p>
                <p className="text-[11px] text-slate-400 truncate">
                  {assignedBuddy.hostel}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('buddy')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Ask {assignedBuddy.name.split(' ')[0]} a Question</span>
            </button>
          </div>

          {/* Quick Helper Tools Widget */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Campus Utilities
            </h4>

            <button
              onClick={() => setActiveTab('campus')}
              className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 text-left border border-slate-100 dark:border-slate-800 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600">
                    Interactive Campus Map
                  </p>
                  <p className="text-[10px] text-slate-400">Explore Block 32, 34, UniMall</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </button>

            <button
              onClick={() => setActiveTab('campus')}
              className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 text-left border border-slate-100 dark:border-slate-800 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600">
                    Room Code Decipher &amp; 75% Attendance
                  </p>
                  <p className="text-[10px] text-slate-400">Timetable &amp; attendance buffer tool</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
