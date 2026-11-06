import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Compass, 
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';

export default function LocationDirectory({ onSelectOnMap }) {
  const { campusLocations, selectedLocationId, setSelectedLocationId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedBuildingId, setExpandedBuildingId] = useState(selectedLocationId || 'loc-block32');

  // Quick "Where to go for..." quick helper presets
  const contextualGuides = [
    { question: 'Where do I collect my Student RFID ID Card?', targetLocId: 'loc-block13', answer: 'Division of Student Welfare (Block 13, Ground Floor, Counter 4)' },
    { question: 'Where do I submit physical admission documents & certificates?', targetLocId: 'loc-block32', answer: 'Central Admissions Verification Hall (Block 32, Ground Floor Counters 1-14)' },
    { question: 'Where is fee clearance, receipts & scholarship desk?', targetLocId: 'loc-block32', answer: 'Division of Accounts (Block 32, 1st Floor, Counters 6-9)' },
    { question: 'Where do I reset my locked UMS password?', targetLocId: 'loc-block32', answer: 'Division of IT (Block 32, 2nd Floor, IT Helpdesk)' },
    { question: 'Where is the 24x7 free emergency clinic & ambulance?', targetLocId: 'loc-hospital', answer: 'University Healthcare Centre (Opposite Block 25)' },
    { question: 'Where do I get uniforms, lab coats, books & printouts?', targetLocId: 'loc-unimall', answer: 'UniMall Ground & Lower Ground Shops (Block 36)' },
    { question: 'Where do I register for campus buses or vehicle FASTag?', targetLocId: 'loc-transport', answer: 'Department of Transportation (Block 29, Room 104)' }
  ];

  const categories = ['All', 'Academic', 'Administration', 'Services', 'Healthcare', 'Residential', 'Sports'];

  const filteredLocations = campusLocations.filter(loc => {
    if (selectedCategory !== 'All' && loc.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = loc.name.toLowerCase().includes(q);
      const matchCode = loc.code.toLowerCase().includes(q);
      const matchDesc = loc.description.toLowerCase().includes(q);
      const matchFloors = loc.floors.some(f => f.services.toLowerCase().includes(q));
      if (!matchName && !matchCode && !matchDesc && !matchFloors) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Contextual "Where to go for..." Quick Navigator */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/50 rounded-3xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
            Freshman "Where Do I Go For...?" Quick Guide
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
          Click any common freshman requirement below to immediately highlight the exact campus block and office desk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {contextualGuides.map((guide, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedLocationId(guide.targetLocId);
                setExpandedBuildingId(guide.targetLocId);
                if (onSelectOnMap) onSelectOnMap(guide.targetLocId);
              }}
              className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.question}
                </span>
                <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                📍 {guide.answer}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Directory Search & Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        
        {/* Category tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search blocks, services, or floors (e.g. Accounts, Dean, Robotics, Laundry)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

      {/* Building Directory List */}
      <div className="space-y-4">
        {filteredLocations.map((loc) => {
          const isExpanded = expandedBuildingId === loc.id;
          const isSelected = selectedLocationId === loc.id;

          return (
            <div
              key={loc.id}
              className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-md ring-1 ring-blue-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {/* Building Card Header */}
              <div 
                onClick={() => setExpandedBuildingId(isExpanded ? null : loc.id)}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center shrink-0 font-black text-sm shadow-sm">
                    {loc.code.replace('Block ', 'B-')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-blue-600 dark:text-blue-400">
                        {loc.code}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {loc.category}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {loc.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLocationId(loc.id);
                      if (onSelectOnMap) onSelectOnMap(loc.id);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 text-xs font-bold border border-blue-200 dark:border-blue-900 transition-colors flex items-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Focus on Map</span>
                  </button>

                  <button
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label="Toggle Floor Plan Details"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Expanded Detailed Floor Breakdown */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 space-y-4">
                  
                  {/* Floor-by-Floor Directory */}
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-blue-500" />
                      Floor-by-Floor Directory
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {loc.floors.map((floor, fIdx) => (
                        <div 
                          key={fIdx}
                          className="p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs"
                        >
                          <span className="font-extrabold text-blue-600 dark:text-blue-400 block mb-0.5">
                            {floor.floor}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {floor.services}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <span className="text-[11px] font-bold text-slate-400 block mb-1 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        Timings
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 font-semibold">{loc.hours}</p>
                      <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-1">⚠️ Peak: {loc.peakHours}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <span className="text-[11px] font-bold text-slate-400 block mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-blue-500" />
                        Contact & Helpdesk
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 font-semibold">{loc.contacts.phone}</p>
                      <p className="text-slate-500 dark:text-slate-400 mt-0.5 truncate">{loc.contacts.email}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                      <span className="text-[11px] font-bold text-slate-400 block mb-1 flex items-center gap-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        Senior Tip
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{loc.tips}</p>
                    </div>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
