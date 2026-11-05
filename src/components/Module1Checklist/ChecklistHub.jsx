import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import TaskCard from './TaskCard';
import TaskDetailModal from './TaskDetailModal';
import { 
  CheckSquare, 
  Search, 
  Filter, 
  GraduationCap, 
  Home, 
  FileText, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  SlidersHorizontal,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';

export default function ChecklistHub() {
  const { 
    tasks, 
    activeProfile, 
    currentDay, 
    completionPercentage, 
    completedRelevantTasks, 
    totalRelevantTasks,
    mandatoryTasks,
    completedMandatoryTasks,
    setIsCertificateOpen
  } = useApp();

  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'today', 'academic', 'hostel', 'administrative'
  const [priorityFilter, setPriorityFilter] = useState('all'); // 'all', 'Mandatory', 'Recommended', 'Optional'
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'pending', 'completed'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTaskForModal, setSelectedTaskForModal] = useState(null);

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    // Category or Today filter
    if (activeCategory === 'today' && task.day !== currentDay) return false;
    if (activeCategory === 'academic' && task.category !== 'academic') return false;
    if (activeCategory === 'hostel' && task.category !== 'hostel') return false;
    if (activeCategory === 'administrative' && task.category !== 'administrative') return false;

    // Priority filter
    if (priorityFilter !== 'all' && task.priority !== priorityFilter) return false;

    // Status filter
    if (statusFilter === 'pending' && task.isCompleted) return false;
    if (statusFilter === 'completed' && !task.isCompleted) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = task.title.toLowerCase().includes(q);
      const matchDesc = task.shortDesc.toLowerCase().includes(q);
      const matchOffice = task.officeName.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchOffice) return false;
    }

    return true;
  });

  const mandatoryRemaining = mandatoryTasks.length - completedMandatoryTasks;

  return (
    <div className="space-y-6">
      
      {/* Module Title & Overview Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              M1
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Personalised Onboarding Checklist
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Tailored 15-day task schedule for <strong>{activeProfile.name}</strong> ({activeProfile.studentType} • {activeProfile.program})
          </p>
        </div>

        {/* Certificate / Readiness badge */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCertificateOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Readiness Certificate</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        
        {/* Metric 1: Overall Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                className="text-slate-100 dark:text-slate-800"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                className="text-blue-600 dark:text-blue-500 transition-all duration-700"
                fill="none"
                strokeDasharray="125.6"
                strokeDashoffset={125.6 - (125.6 * completionPercentage) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xs font-black text-slate-900 dark:text-white">
              {completionPercentage}%
            </span>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Campus Readiness
            </p>
            <p className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {completedRelevantTasks} of {totalRelevantTasks} Complete
            </p>
          </div>
        </div>

        {/* Metric 2: Mandatory Compliance */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
            mandatoryRemaining === 0 
              ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400' 
              : 'bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400'
          }`}>
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Mandatory Compliance
            </p>
            <p className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {mandatoryRemaining === 0 ? 'All Cleared!' : `${mandatoryRemaining} Pending Blocker${mandatoryRemaining > 1 ? 's' : ''}`}
            </p>
          </div>
        </div>

        {/* Metric 3: Current Day Target */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Today (Day {currentDay})
            </p>
            <p className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {tasks.filter(t => t.day === currentDay && !t.isCompleted).length} Tasks To-Do
            </p>
          </div>
        </div>

      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            All Tasks ({tasks.length})
          </button>

          <button
            onClick={() => setActiveCategory('today')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'today'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Today (Day {currentDay})</span>
            <span className="text-[10px] opacity-80">
              ({tasks.filter(t => t.day === currentDay).length})
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('academic')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'academic'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic</span>
            <span className="text-[10px] opacity-80">
              ({tasks.filter(t => t.category === 'academic').length})
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('hostel')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'hostel'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>{activeProfile.studentType === 'Day Scholar' ? 'Commute' : 'Hostel'}</span>
            <span className="text-[10px] opacity-80">
              ({tasks.filter(t => t.category === 'hostel').length})
            </span>
          </button>

          <button
            onClick={() => setActiveCategory('administrative')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeCategory === 'administrative'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Administrative</span>
            <span className="text-[10px] opacity-80">
              ({tasks.filter(t => t.category === 'administrative').length})
            </span>
          </button>
        </div>

        {/* Search & Sub-filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks, offices, keywords (e.g. UMS, biometrics, fee)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Priority Filter dropdown */}
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-2.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">Priority: All</option>
              <option value="Mandatory">⚠️ Mandatory</option>
              <option value="Recommended">Recommended</option>
              <option value="Optional">Optional</option>
            </select>

            {/* Status Filter dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="all">Status: All</option>
              <option value="pending">To-Do Only</option>
              <option value="completed">Completed Only</option>
            </select>
          </div>

        </div>

      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onOpenDetails={(t) => setSelectedTaskForModal(t)} 
            />
          ))
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 text-center border border-slate-200 dark:border-slate-800 shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No tasks found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1 mb-4">
              Try adjusting your search criteria or category filter to view other tasks.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setPriorityFilter('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Task Detail Modal */}
      {selectedTaskForModal && (
        <TaskDetailModal 
          task={selectedTaskForModal} 
          onClose={() => setSelectedTaskForModal(null)} 
        />
      )}

    </div>
  );
}
