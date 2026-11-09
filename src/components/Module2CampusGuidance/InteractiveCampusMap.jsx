import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  GraduationCap, 
  BookOpen, 
  ShoppingBag, 
  Users, 
  HeartPulse, 
  Home, 
  Trophy, 
  Bus, 
  Shield,
  MapPin,
  Compass,
  Navigation,
  Info
} from 'lucide-react';

export default function InteractiveCampusMap({ onSelectLocation, selectedId }) {
  const { campusLocations } = useApp();

  const iconMap = {
    Building2,
    GraduationCap,
    BookOpen,
    ShoppingBag,
    Users,
    HeartPulse,
    Home,
    Trophy,
    Bus,
    Shield
  };

  const selectedLoc = campusLocations.find(l => l.id === selectedId) || campusLocations[0];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm">
      
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            Interactive University Campus Map
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Click any campus block or service hub to view floor directories, operating hours & office desks.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
          <span>Click a pin to inspect building</span>
        </div>
      </div>

      {/* SVG Vector Map Container */}
      <div className="relative mt-4 w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br from-slate-100 via-emerald-50/30 to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
        
        {/* Campus Roads and Paths SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="roadGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Main Grand Avenue (North-South spine) */}
          <path
            d="M 500,900 L 500,450 Q 500,300 420,280 L 260,320"
            stroke="currentColor"
            strokeWidth="18"
            className="text-slate-300 dark:text-slate-800"
            fill="none"
          />
          {/* Avenue divider line */}
          <path
            d="M 500,900 L 500,450 Q 500,300 420,280 L 260,320"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeDasharray="8 6"
            fill="none"
          />

          {/* East-West Academic Ring Road */}
          <path
            d="M 180,650 Q 320,750 500,750 Q 700,750 780,550 L 720,220"
            stroke="currentColor"
            strokeWidth="14"
            className="text-slate-300/80 dark:text-slate-800/80"
            fill="none"
          />

          {/* Central Green Lawn */}
          <ellipse
            cx="440"
            cy="400"
            rx="110"
            ry="70"
            className="fill-emerald-200/40 dark:fill-emerald-950/20 stroke-emerald-300 dark:stroke-emerald-900/40"
            strokeWidth="2"
          />
          <text x="440" y="405" textAnchor="middle" className="text-[12px] font-bold fill-emerald-800 dark:fill-emerald-400 opacity-60">
            Central University Lawns
          </text>
        </svg>

        {/* Map Location Pins */}
        {campusLocations.map((loc) => {
          const isSelected = loc.id === selectedId;
          const IconComp = iconMap[loc.icon] || Building2;

          return (
            <button
              key={loc.id}
              onClick={() => onSelectLocation(loc.id)}
              style={{
                left: `${loc.coordinates.x}%`,
                top: `${loc.coordinates.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              className={`absolute group transition-all duration-300 z-20 ${
                isSelected ? 'scale-125 z-30' : 'hover:scale-110'
              }`}
            >
              {/* Pulsing ring for selected pin */}
              {isSelected && (
                <span className="absolute -inset-2 rounded-2xl bg-blue-500/30 animate-ping pointer-events-none" />
              )}

              {/* Pin Container */}
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold shadow-lg transition-all border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-500/50 shadow-blue-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                <span className="text-[11px] whitespace-nowrap">{loc.code}</span>
              </div>

              {/* Tooltip on hover */}
              <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-xl shadow-xl pointer-events-none text-center z-40">
                <p className="font-bold">{loc.name}</p>
                <p className="text-slate-400 text-[9px] mt-0.5">{loc.category}</p>
              </div>
            </button>
          );
        })}

        {/* Legend Overlay in corner */}
        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-[10px] space-y-1 shadow-md">
          <p className="font-bold text-slate-700 dark:text-slate-300">Quick Legend:</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Academic (34, 37)
            </span>
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Admin (32)
            </span>
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-orange-500" /> Hostels
            </span>
          </div>
        </div>

      </div>

      {/* Selected Location Card Preview below Map */}
      {selectedLoc && (
        <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-blue-600 dark:text-blue-400">
                  {selectedLoc.code}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {selectedLoc.category}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                {selectedLoc.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {selectedLoc.description}
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
              Operating Hours:
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedLoc.hours}
            </p>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-0.5">
              ⚠️ Peak: {selectedLoc.peakHours}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
