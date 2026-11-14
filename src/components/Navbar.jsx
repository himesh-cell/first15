import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  Calendar, 
  ShieldAlert, 
  Award, 
  Sun, 
  Moon, 
  ChevronDown, 
  User, 
  Building, 
  Compass, 
  CheckSquare, 
  Users, 
  LayoutDashboard,
  Sparkles,
  PhoneCall,
  LogOut,
  Home
} from 'lucide-react';

export default function Navbar() {
  const { 
    activeProfile, 
    profiles, 
    switchProfile, 
    logout,
    setCurrentView,
    currentDay, 
    updateCurrentDay,
    activeTab, 
    setActiveTab, 
    completionPercentage,
    completedRelevantTasks,
    totalRelevantTasks,
    setIsSosOpen,
    setIsCertificateOpen,
    darkMode, 
    setDarkMode 
  } = useApp();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isDaySelectorOpen, setIsDaySelectorOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                    First15
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                    Onboarding
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  New Student Orientation Hub
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'checklist'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              Checklist
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                {completedRelevantTasks}/{totalRelevantTasks}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('campus')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'campus'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              Campus Guide
            </button>
            <button
              onClick={() => setActiveTab('buddy')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'buddy'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              Buddy & Help
            </button>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Day Selector Pill */}
            <div className="relative">
              <button
                onClick={() => setIsDaySelectorOpen(!isDaySelectorOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors text-xs font-bold"
                title="Simulate / Jump to Day"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Day {currentDay}</span>
                <span className="text-[11px] font-normal opacity-70">of 15</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-60" />
              </button>

              {isDaySelectorOpen && (
                <div className="absolute right-0 mt-2 w-64 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 z-50">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Jump to Onboarding Day
                    </span>
                    <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                      Day {currentDay}/15
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 mb-2">
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          updateCurrentDay(d);
                          setIsDaySelectorOpen(false);
                        }}
                        className={`h-8 rounded-lg text-xs font-bold transition-all ${
                          d === currentDay
                            ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/50'
                            : d < currentDay
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight">
                    Simulate your timeline to see day-specific tasks, curfew rules & deadlines.
                  </p>
                </div>
              )}
            </div>

            {/* Student Profile Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 transition-colors shadow-sm"
              >
                <img
                  src={activeProfile.avatar}
                  alt={activeProfile.name}
                  className="w-7 h-7 rounded-lg object-cover border border-slate-200 dark:border-slate-700"
                />
                <div className="hidden lg:block text-left text-xs">
                  <div className="font-bold text-slate-800 dark:text-slate-100 leading-tight flex items-center gap-1">
                    {activeProfile.name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {activeProfile.studentType}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50">
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1.5">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Switch Student Profile
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      View tailored tasks for different roles:
                    </p>
                  </div>

                  <div className="space-y-1">
                    {profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          switchProfile(p.id);
                          setIsProfileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-2 rounded-xl text-left transition-all ${
                          p.id === activeProfile.id
                            ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <img
                          src={p.avatar}
                          alt={p.name}
                          className="w-9 h-9 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                            {p.name}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {p.program}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                              p.studentType === 'Hosteller' 
                                ? 'bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300'
                                : 'bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300'
                            }`}>
                              {p.studentType}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              Day {p.currentDay}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        setCurrentView('landing');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <Home className="w-4 h-4 text-blue-500" />
                      <span>View Landing Page</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out (Exit Portal)</span>
                    </button>
                  </div>

                  <div className="mt-1 pt-1 border-t border-slate-100 dark:border-slate-800 px-2 py-1">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
                      Task checklist automatically reconfigures for Hosteller vs Day Scholar.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Certificate Modal Button */}
            <button
              onClick={() => setIsCertificateOpen(true)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 hover:border-amber-400 transition-colors shadow-sm relative group"
              title="View Onboarding Readiness Certificate"
            >
              <Award className="w-4 h-4" />
              {completionPercentage >= 70 && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping" />
              )}
            </button>

            {/* SOS Emergency Button */}
            <button
              onClick={() => setIsSosOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md shadow-red-500/20 active:scale-95 transition-all"
              title="Campus SOS & Emergency Contacts"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline">SOS</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Sign Out Button */}
            <button
              onClick={logout}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-sm"
              title="Sign Out / Exit Portal"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Mobile Tab Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
              activeTab === 'overview' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
              activeTab === 'checklist' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Checklist</span>
          </button>
          <button
            onClick={() => setActiveTab('campus')}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
              activeTab === 'campus' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Campus</span>
          </button>
          <button
            onClick={() => setActiveTab('buddy')}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${
              activeTab === 'buddy' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Buddy</span>
          </button>
        </div>

      </div>
    </header>
  );
}
