import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import MentorCard from './MentorCard';
import BuddyChatModal from './BuddyChatModal';
import HelpTicketDesk from './HelpTicketDesk';
import FaqKnowledgeBase from './FaqKnowledgeBase';
import { 
  Users, 
  LifeBuoy, 
  HelpCircle, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

export default function BuddySupportHub() {
  const { buddies, activeProfile } = useApp();
  const [subTab, setSubTab] = useState('buddies'); // 'buddies', 'tickets', 'faqs'
  const [activeChatMentor, setActiveChatMentor] = useState(null);

  const assignedBuddy = buddies.find(b => b.id === activeProfile.assignedBuddyId) || buddies[0];
  const otherBuddies = buddies.filter(b => b.id !== activeProfile.assignedBuddyId);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              M3
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Buddy &amp; Help Support Hub
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Connect with experienced senior mentors, submit administrative help tickets, or browse campus FAQs.
          </p>
        </div>

        {/* Sub-tab pills */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl">
          <button
            onClick={() => setSubTab('buddies')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'buddies'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Senior Mentors</span>
          </button>

          <button
            onClick={() => setSubTab('tickets')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'tickets'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Help Desk</span>
          </button>

          <button
            onClick={() => setSubTab('faqs')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'faqs'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQs</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Senior Mentors */}
      {subTab === 'buddies' && (
        <div className="space-y-6">
          {/* Assigned Mentor Feature Card */}
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Your Designated Freshman Buddy
            </h2>
            <MentorCard
              mentor={assignedBuddy}
              isAssigned={true}
              onOpenChat={(m) => setActiveChatMentor(m)}
            />
          </div>

          {/* Other Senior Mentors */}
          {otherBuddies.length > 0 && (
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                Peer Senior Mentors Across Other Schools &amp; Hostels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherBuddies.map(mentor => (
                  <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                    isAssigned={false}
                    onOpenChat={(m) => setActiveChatMentor(m)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Help Tickets */}
      {subTab === 'tickets' && <HelpTicketDesk />}

      {/* Tab 3: FAQs */}
      {subTab === 'faqs' && <FaqKnowledgeBase />}

      {/* Buddy Live Chat Modal */}
      {activeChatMentor && (
        <BuddyChatModal
          mentor={activeChatMentor}
          onClose={() => setActiveChatMentor(null)}
        />
      )}

    </div>
  );
}
