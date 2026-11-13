import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  PhoneCall, 
  AlertOctagon, 
  ShieldAlert, 
  HeartPulse, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';

export default function SosEmergencyModal() {
  const { isSosOpen, setIsSosOpen, emergencyContacts } = useApp();

  if (!isSosOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-red-300 dark:border-red-900/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-red-100 dark:border-red-950 bg-red-50 dark:bg-red-950/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-red-950 dark:text-red-100">
                Campus SOS &amp; 24x7 Emergency Helplines
              </h3>
              <p className="text-xs text-red-700 dark:text-red-300">
                Direct phone numbers for campus security, hospital &amp; helplines
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSosOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Helplines List */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1 text-xs sm:text-sm">
          {emergencyContacts.map((contact, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-red-400 transition-colors"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                  {contact.name}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {contact.desc}
                </p>
              </div>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs flex items-center gap-1.5 shrink-0 self-start sm:self-auto shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{contact.phone}</span>
              </a>
            </div>
          ))}

          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
            <strong>Proctorial Notice:</strong> The university maintains 2,500+ CCTV surveillance cameras across all campus blocks and hostels with rapid action motorized patrol.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end">
          <button
            onClick={() => setIsSosOpen(false)}
            className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-300"
          >
            Close Emergency Panel
          </button>
        </div>

      </div>
    </div>
  );
}
