import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import InteractiveCampusMap from './InteractiveCampusMap';
import LocationDirectory from './LocationDirectory';
import UmsTimetableGuide from './UmsTimetableGuide';
import HostelAndCommuteGuide from './HostelAndCommuteGuide';
import { 
  Compass, 
  MapPin, 
  Binary, 
  Home, 
  Layers, 
  Search,
  Sparkles
} from 'lucide-react';

export default function CampusGuidanceHub() {
  const { selectedLocationId, setSelectedLocationId } = useApp();
  const [subTab, setSubTab] = useState('map'); // 'map', 'directory', 'ums', 'hostel'

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              M2
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Campus &amp; Service Guidance
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Navigate campus buildings, decipher UMS timetable room codes, and master hostel &amp; commute rules.
          </p>
        </div>

        {/* Sub-tab pills */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSubTab('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              subTab === 'map'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Campus Map</span>
          </button>

          <button
            onClick={() => setSubTab('directory')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              subTab === 'directory'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Building Directory</span>
          </button>

          <button
            onClick={() => setSubTab('ums')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              subTab === 'ums'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Binary className="w-3.5 h-3.5" />
            <span>UMS &amp; Timetable</span>
          </button>

          <button
            onClick={() => setSubTab('hostel')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              subTab === 'hostel'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Hostel &amp; Commute</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {subTab === 'map' && (
        <div className="space-y-6">
          <InteractiveCampusMap 
            selectedId={selectedLocationId}
            onSelectLocation={(id) => setSelectedLocationId(id)}
          />
          <LocationDirectory 
            onSelectOnMap={(id) => {
              setSelectedLocationId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      )}

      {subTab === 'directory' && (
        <LocationDirectory 
          onSelectOnMap={(id) => {
            setSelectedLocationId(id);
            setSubTab('map');
          }}
        />
      )}

      {subTab === 'ums' && <UmsTimetableGuide />}

      {subTab === 'hostel' && <HostelAndCommuteGuide />}

    </div>
  );
}
