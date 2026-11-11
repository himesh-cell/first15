import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Star, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Mail, 
  Phone, 
  Award,
  Sparkles
} from 'lucide-react';

export default function MentorCard({ mentor, onOpenChat, isAssigned }) {
  return (
    <div className={`rounded-3xl p-5 sm:p-6 border transition-all duration-200 relative overflow-hidden ${
      isAssigned
        ? 'bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 border-blue-400 dark:border-blue-700 shadow-md ring-1 ring-blue-400/20'
        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300'
    }`}>
      
      {/* Top Banner Tag if Assigned */}
      {isAssigned && (
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-200/60 dark:border-blue-900/40">
          <span className="flex items-center gap-1.5 text-xs font-black text-blue-700 dark:text-blue-300">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            YOUR DESIGNATED FIRST-15 BUDDY
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
            Active Mentor
          </span>
        </div>
      )}

      {/* Profile Header */}
      <div className="flex items-start gap-4">
        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="w-16 h-16 rounded-2xl object-cover border-2 border-white dark:border-slate-800 shadow-md shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 truncate">
              {mentor.name}
            </h3>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{mentor.rating}</span>
            </div>
          </div>

          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            {mentor.program}
          </p>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">{mentor.hostel}</span>
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-xs text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
        "{mentor.bio}"
      </p>

      {/* Clubs & Societies */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {mentor.clubs.map((club, idx) => (
          <span 
            key={idx}
            className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {club}
          </span>
        ))}
      </div>

      {/* Office Hours & Contact Details */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
        <p className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span>Office Hours: <strong>{mentor.officeHours}</strong></span>
        </p>
        <p className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{mentor.email}</span>
        </p>
      </div>

      {/* Action: Open Chat */}
      <button
        onClick={() => onOpenChat(mentor)}
        className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Chat with {mentor.name.split(' ')[0]}</span>
      </button>

    </div>
  );
}
