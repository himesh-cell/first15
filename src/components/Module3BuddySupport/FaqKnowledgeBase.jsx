import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function FaqKnowledgeBase() {
  const { faqs } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaqId, setExpandedFaqId] = useState(faqs[0]?.id || null);

  const categories = ['All', 'UMS & Tech', 'Academics', 'Hostel & Residential', 'Administration', 'Healthcare & Safety', 'Day Scholar & Commute'];

  const filteredFaqs = faqs.filter(faq => {
    if (selectedCategory !== 'All' && faq.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchQ = faq.question.toLowerCase().includes(q);
      const matchA = faq.answer.toLowerCase().includes(q);
      const matchTag = faq.tags.some(t => t.toLowerCase().includes(q));
      if (!matchQ && !matchA && !matchTag) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            Freshman Knowledge Base &amp; FAQs
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Instant answers to the top questions asked by university newcomers during their first two weeks.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        
        {/* Category Pills */}
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

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. curfew, attendance, ID card, laundry, bus)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isExpanded = expandedFaqId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white dark:bg-slate-900 ${
                isExpanded
                  ? 'border-blue-400 dark:border-blue-700 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                className="w-full p-4 sm:p-5 flex items-start justify-between gap-3 text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                      {faq.category}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {faq.question}
                  </h4>
                </div>
                <div className="p-1 rounded-lg text-slate-400 shrink-0">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                    {faq.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md"
                      >
                        #{t}
                      </span>
                    ))}
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
