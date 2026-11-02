import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  FileText, 
  ChevronRight, 
  Check, 
  Upload, 
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function TaskCard({ task, onOpenDetails }) {
  const { toggleTaskCompletion, navigateToLocation, currentDay } = useApp();

  const isToday = task.day === currentDay;
  const isPastDue = task.day < currentDay && !task.isCompleted;

  // Category styles
  const categoryConfig = {
    academic: {
      label: 'Academic',
      badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800'
    },
    hostel: {
      label: task.targetAudience === 'Day Scholar' ? 'Commute & Travel' : 'Hostel & Living',
      badge: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800'
    },
    administrative: {
      label: 'Administrative',
      badge: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800'
    }
  };

  const priorityConfig = {
    Mandatory: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800 font-extrabold',
    Recommended: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800 font-bold',
    Optional: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 font-medium'
  };

  const cat = categoryConfig[task.category] || categoryConfig.academic;

  return (
    <div 
      className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-200 border ${
        task.isCompleted
          ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
          : isPastDue
            ? 'bg-rose-50/30 dark:bg-rose-950/15 border-rose-200 dark:border-rose-900 shadow-sm'
            : isToday
              ? 'bg-white dark:bg-slate-900 border-blue-400 dark:border-blue-700 shadow-md ring-1 ring-blue-400/20'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        
        {/* Checkbox Button */}
        <button
          onClick={() => toggleTaskCompletion(task.id)}
          className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
            task.isCompleted
              ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30 ring-2 ring-emerald-600/20'
              : 'border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 text-transparent hover:text-blue-500'
          }`}
          title={task.isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
        >
          <Check className="w-4 h-4 stroke-[3]" />
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border ${cat.badge}`}>
              {cat.label}
            </span>

            <span className={`text-[10px] px-2 py-0.5 rounded-md border ${priorityConfig[task.priority]}`}>
              {task.priority === 'Mandatory' && '⚠️ '}
              {task.priority}
            </span>

            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
              Day {task.day}
            </span>

            {isToday && (
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-blue-600 text-white animate-pulse">
                TODAY'S GOAL
              </span>
            )}

            {isPastDue && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400">
                Action Required
              </span>
            )}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenDetails(task)}
            className={`text-sm sm:text-base font-bold cursor-pointer transition-colors ${
              task.isCompleted
                ? 'line-through text-slate-500 dark:text-slate-400'
                : 'text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {task.title}
          </h3>

          {/* Short Desc */}
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
            {task.shortDesc}
          </p>

          {/* Location & Office info */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
            <button
              onClick={() => navigateToLocation(task.locationRef)}
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              title="Locate on Campus Map"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="truncate max-w-[200px] sm:max-w-xs">{task.officeName}</span>
            </button>

            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              ~{task.estimatedMinutes} mins
            </span>

            {task.proofRequired && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-600 dark:text-purple-400">
                <FileText className="w-3.5 h-3.5" />
                {task.proofUploaded ? 'Slip Uploaded' : 'Receipt Required'}
              </span>
            )}
          </div>

        </div>

        {/* View Details Action */}
        <button
          onClick={() => onOpenDetails(task)}
          className="self-center p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
          title="Open Step-by-Step Guide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}
