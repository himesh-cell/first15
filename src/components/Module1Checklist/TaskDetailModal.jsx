import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  CheckCircle, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Upload, 
  FileCheck, 
  HelpCircle, 
  Lightbulb, 
  Check, 
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function TaskDetailModal({ task, onClose }) {
  const { 
    toggleTaskCompletion, 
    navigateToLocation, 
    activeProfile, 
    buddies, 
    setActiveTab, 
    sendBuddyMessage 
  } = useApp();

  const [simulatedFileName, setSimulatedFileName] = useState(task.proofUploaded || '');
  const [isUploading, setIsUploading] = useState(false);

  if (!task) return null;

  const handleSimulateUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setSimulatedFileName(file.name);
        setIsUploading(false);
        // Automatically save proof
        toggleTaskCompletion(task.id, file.name);
      }, 800);
    }
  };

  const handleQuickBuddyAsk = () => {
    onClose();
    setActiveTab('buddy');
    sendBuddyMessage(
      activeProfile.assignedBuddyId,
      `Hey! I'm currently working on "${task.title}" (Day ${task.day}). Any quick advice on where to go or how to finish it fast?`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 uppercase">
                {task.category}
              </span>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                task.priority === 'Mandatory' 
                  ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' 
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
              }`}>
                {task.priority}
              </span>
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                Scheduled for Day {task.day}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {task.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* Description */}
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {task.shortDesc}
          </p>

          {/* Location & Navigation Card */}
          <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-900 dark:text-blue-300">
                  Designated Campus Location & Desk
                </p>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {task.officeName}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> Estimated time: ~{task.estimatedMinutes} minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                navigateToLocation(task.locationRef);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>View On Campus Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Step-by-Step Action Guide
            </h4>
            <div className="space-y-2.5">
              {task.steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Pro-Tip Box */}
          {task.tips && (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Senior Insider Advice:</span>
                <p className="leading-relaxed">{task.tips}</p>
              </div>
            </div>
          )}

          {/* Proof Upload Simulation */}
          {task.proofRequired && (
            <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex flex-col items-center gap-2">
                <FileCheck className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Verification Document / Slip Upload
                </h5>
                <p className="text-[11px] text-slate-500 max-w-sm">
                  Upload a photo or PDF of your fee receipt, stamped slip, or verification form to clear this requirement.
                </p>

                {simulatedFileName ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Uploaded: {simulatedFileName}</span>
                  </div>
                ) : (
                  <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all mt-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{isUploading ? 'Uploading...' : 'Upload Document'}</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={handleSimulateUpload}
                      disabled={isUploading}
                    />
                  </label>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          
          <button
            onClick={handleQuickBuddyAsk}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Ask Senior Buddy</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                toggleTaskCompletion(task.id);
                onClose();
              }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold shadow-md transition-all ${
                task.isCompleted
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
              }`}
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{task.isCompleted ? 'Mark as Incomplete' : 'Mark Task Completed'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
