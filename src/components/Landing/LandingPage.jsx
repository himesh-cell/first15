import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  Users, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Clock, 
  Compass, 
  BookOpen, 
  Award, 
  HelpCircle, 
  ChevronRight, 
  Building, 
  Bus, 
  Home, 
  MessageCircle, 
  FileText, 
  Sun, 
  Moon, 
  LogIn, 
  Flame, 
  ExternalLink 
} from 'lucide-react';

export default function LandingPage({ onGoToLogin }) {
  const { 
    quickLogin, 
    profiles, 
    setCurrentView, 
    darkMode, 
    setDarkMode 
  } = useApp();

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is First15 and what problem does it solve?",
      a: "First15 is an integrated, student-centric onboarding platform built for INT257 (Problem Statement 03). It eliminates freshman disorientation during the critical first two weeks by coordinating campus building locations, UMS steps, timetable room codes, hostel curfews, and senior buddy support into one unified web hub."
    },
    {
      q: "How does the system distinguish between Hostellers and Day Scholars?",
      a: "The system features dynamic personalization. Hostellers receive milestones for room inventory, 7:30 PM biometric registration, mess slots, and parent OTP out-passes. Day Scholars receive bus pass bay allocation (Bays 1-35), vehicle FASTag parking permits, and campus daytime locker allotment."
    },
    {
      q: "How can I log into the student portal?",
      a: "Click 'Student Portal Login' at the top or hero section. You can enter any registered University Student Registration Number (e.g. 12401822 for Rahul or 12409841 for Sneha) with password 'student123', or click any 1-click demo profile."
    },
    {
      q: "Does the app save my completed tasks and tickets?",
      a: "Yes! Every marked task, uploaded proof, raised helpdesk ticket, and chat message persists automatically in browser storage, so your state is saved across reloads."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors flex flex-col">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-300">
                  First15
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  Orientation
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                University Newcomer Onboarding Hub
              </p>
            </div>
          </div>

          {/* Quick Nav & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onGoToLogin || (() => setCurrentView('login'))}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 active:scale-95 transition"
            >
              <LogIn className="w-4 h-4" />
              <span>Student Portal Login</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-blue-100/70 via-indigo-50/50 to-transparent dark:from-blue-950/30 dark:via-indigo-950/20 pointer-events-none" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Course INT257 • Problem Statement 03 Solution</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Master Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">First 15 Days</span> of University Life
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate newcomer struggles and administrative chaos. One integrated platform delivering personalized milestones, interactive campus navigation, timetable deciphering, and senior buddy support.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <button
              onClick={onGoToLogin || (() => setCurrentView('login'))}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 active:scale-95 transition"
            >
              <span>Access Student Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => quickLogin('rahul-verma')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 transition"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Instant Demo (Hosteller)</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">15 Days</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Structured Stepper Roadmap</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">2 Profiles</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Hosteller vs Day Scholar</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">3 Modules</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Checklist, Campus & Buddy</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">24x7 SOS</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Security & Medical Care</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Modules Breakdown */}
      <section className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Integrated Architectural Pillars
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              Everything A Fresher Needs To Thrive
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
              Designed according to university onboarding problem statements to bridge fragmented portals into one actionable workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-lg transition flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Module 1: Personalised Onboarding Checklist
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                Day-by-day milestone tracker with smart blockers. Tailored tasks for Hostellers (mess slots, biometric curfews) and Day Scholars (bus pass bays, lockers). Includes proof upload and downloadable Campus Readiness Certificate.
              </p>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">Milestone Stepper</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">Proof Uploads</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">Confetti Certificate</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Module 2: Campus & Academic Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                Interactive schematic campus map with building hotspots (Block 32 Admin, Block 34 CSE, UniMall). Classroom code decipher (e.g. 34-602), 75% attendance margin calculator, and complete hostel rules primer.
              </p>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">Interactive Map</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">Room Code Decoder</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">75% Calculator</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-lg transition flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Module 3: Buddy Support & Helpdesk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                Verified 3rd-year senior mentors, real-time simulated buddy chat with quick prompts, official SLA help ticket desk for UMS & hostel issues, plus 1-click 24x7 emergency contacts for campus security and ambulance.
              </p>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">Senior Mentors</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">SLA Help Tickets</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300">24x7 SOS Desk</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Demo Student Profiles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Personalized Student Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Select A Student To Explore Immediately
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Experience how the entire platform re-configures its tasks, curfew warnings, and commute details dynamically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {profiles.slice(0, 2).map((p) => {
              const isHosteller = p.studentType === 'Hosteller';
              return (
                <div 
                  key={p.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={p.avatar} 
                        alt={p.name} 
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/30"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">{p.name}</h4>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            isHosteller 
                              ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300' 
                              : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                          }`}>
                            {p.studentType}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Reg No: <span className="font-mono text-slate-700 dark:text-slate-300 font-semibold">{p.registrationNo}</span>
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {p.program}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 mb-5">
                      {isHosteller ? (
                        <>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-500">Hostel & Room:</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{p.hostelDetails.hostelName} ({p.hostelDetails.roomNo})</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-500">Biometric Curfew:</span>
                            <span className="font-semibold text-amber-600 dark:text-amber-400">7:30 PM Mandatory</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-500">Commute:</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{p.commuteDetails.busRouteNo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-500">Boarding Point:</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{p.commuteDetails.pickupPoint}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => quickLogin(p.id)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition shadow-sm"
                  >
                    <span>Launch Portal as {p.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-bold text-slate-900 dark:text-white gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Begin Your First 15 Days?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Log in with your university student ID or try the instant demo to experience a seamless freshman onboarding journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onGoToLogin || (() => setCurrentView('login'))}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-blue-700 hover:bg-blue-50 shadow-lg active:scale-95 transition"
            >
              Sign In to Student Portal
            </button>
            <button
              onClick={() => quickLogin('rahul-verma')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-800/60 hover:bg-blue-800 border border-blue-400/30 text-white shadow-lg active:scale-95 transition"
            >
              Launch Demo Experience
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              15
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-300">
              INT257 • Course Project: First Fifteen Days New Student Onboarding System
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Authored by <strong>himesh-cell</strong></span>
            <span>•</span>
            <button 
              onClick={onGoToLogin || (() => setCurrentView('login'))}
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Portal Login
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
