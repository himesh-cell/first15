import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import DayProgressBanner from './components/DayProgressBanner';
import OverviewDashboard from './components/OverviewDashboard';
import ChecklistHub from './components/Module1Checklist/ChecklistHub';
import CampusGuidanceHub from './components/Module2CampusGuidance/CampusGuidanceHub';
import BuddySupportHub from './components/Module3BuddySupport/BuddySupportHub';
import SosEmergencyModal from './components/Common/SosEmergencyModal';
import ReadinessCertificateModal from './components/Module1Checklist/ReadinessCertificateModal';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Auth/LoginPage';
import { GraduationCap, Heart, Sparkles, RefreshCw } from 'lucide-react';

function AppContent() {
  const { 
    currentView, 
    setCurrentView, 
    isAuthenticated, 
    activeTab, 
    resetAllProgress, 
    activeProfile 
  } = useApp();

  // If user is on landing page (or not authenticated and not explicitly on login)
  if (currentView === 'landing' || (!isAuthenticated && currentView !== 'login')) {
    return <LandingPage onGoToLogin={() => setCurrentView('login')} />;
  }

  // If user is on login page
  if (currentView === 'login' || (!isAuthenticated && currentView === 'login')) {
    return <LoginPage onBackToLanding={() => setCurrentView('landing')} />;
  }

  // Authenticated Student Dashboard
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      
      {/* Top App Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* 15-Day Milestone Tracker Banner */}
        <DayProgressBanner />

        {/* Dynamic Active Module */}
        <div className="transition-all duration-300">
          {activeTab === 'overview' && <OverviewDashboard />}
          {activeTab === 'checklist' && <ChecklistHub />}
          {activeTab === 'campus' && <CampusGuidanceHub />}
          {activeTab === 'buddy' && <BuddySupportHub />}
        </div>

      </main>

      {/* Common Global Modals */}
      <SosEmergencyModal />
      <ReadinessCertificateModal />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              15
            </div>
            <span className="font-bold text-slate-700 dark:text-slate-300">
              INT257 • Problem 03: First Fifteen Days – New Student Onboarding
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('landing')}
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Public Landing Page
            </button>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <button
              onClick={() => {
                if (window.confirm("Reset all tasks, tickets and chats to initial demo state?")) {
                  resetAllProgress();
                }
              }}
              className="flex items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-medium transition-colors"
              title="Reset initial state"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Demo State</span>
            </button>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <span>Built for university newcomers &amp; freshers</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
