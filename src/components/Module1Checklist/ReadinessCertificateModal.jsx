import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Printer, 
  Download, 
  ShieldCheck, 
  GraduationCap,
  Calendar
} from 'lucide-react';

export default function ReadinessCertificateModal() {
  const { 
    isCertificateOpen, 
    setIsCertificateOpen, 
    activeProfile, 
    completionPercentage,
    completedRelevantTasks,
    totalRelevantTasks
  } = useApp();

  if (!isCertificateOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const isEligible = completionPercentage >= 50;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-amber-300 dark:border-amber-700/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              Freshman Onboarding Readiness Certificate
            </h3>
          </div>

          <button
            onClick={() => setIsCertificateOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Printable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="border-4 border-double border-amber-400/60 dark:border-amber-600/40 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-center relative shadow-inner">
            
            {/* Top Emblem */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 mb-4">
              <GraduationCap className="w-9 h-9" />
            </div>

            <p className="text-xs uppercase tracking-widest font-extrabold text-amber-600 dark:text-amber-400">
              First Fifteen Days Clearance Charter
            </p>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 mb-4">
              Certificate of Campus Readiness
            </h2>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
              This document certifies that the following new undergraduate/postgraduate scholar has successfully completed initial orientation and compliance onboarding:
            </p>

            {/* Student Name */}
            <div className="py-2 border-b-2 border-dashed border-amber-300 dark:border-amber-700 max-w-sm mx-auto mb-4">
              <h3 className="text-lg sm:text-xl font-black text-blue-700 dark:text-blue-400">
                {activeProfile.name}
              </h3>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-2 gap-3 text-left max-w-md mx-auto mb-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Registration No:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{activeProfile.registrationNo}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Program:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{activeProfile.program}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Category:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{activeProfile.studentType}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block text-[10px] uppercase">Readiness Score:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{completionPercentage}% ({completedRelevantTasks}/{totalRelevantTasks} Tasks)</span>
              </div>
            </div>

            {/* Signatures & Seal */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
              <div className="text-center">
                <div className="font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Dr. M. Sundaram
                </div>
                <p className="text-[10px] text-slate-400">Academic Proctor</p>
              </div>

              <div className="w-16 h-16 rounded-full border-2 border-amber-500/80 text-amber-600 dark:text-amber-400 flex flex-col items-center justify-center text-[8px] font-black uppercase rotate-[-12deg] tracking-tight p-1 bg-amber-50 dark:bg-amber-950/40">
                <span>VERIFIED</span>
                <ShieldCheck className="w-4 h-4 my-0.5" />
                <span>FIRST-15</span>
              </div>

              <div className="text-center">
                <div className="font-mono font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Dean of Student Welfare
                </div>
                <p className="text-[10px] text-slate-400">Division of Student Welfare</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            {isEligible ? '✅ Valid Onboarding Certificate' : '⚠️ Complete more tasks to reach 100%'}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
