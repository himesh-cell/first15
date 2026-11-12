import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LifeBuoy, 
  PlusCircle, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Send, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Tag
} from 'lucide-react';

export default function HelpTicketDesk() {
  const { tickets, createHelpTicket, addTicketResponse, activeProfile } = useApp();
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  const [expandedTicketId, setExpandedTicketId] = useState(tickets[0]?.id || null);
  const [replyText, setReplyText] = useState('');

  // Form states
  const [category, setCategory] = useState('UMS Technical Issue');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('High');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim() || !description.trim()) return;

    const created = createHelpTicket({
      category,
      subject,
      description,
      priority
    });

    setSubject('');
    setDescription('');
    setIsCreatingTicket(false);
    setExpandedTicketId(created.id);
  };

  const handleSendReply = (ticketId) => {
    if (!replyText.trim()) return;
    addTicketResponse(ticketId, replyText, activeProfile.name);
    setReplyText('');
  };

  const statusBadge = {
    'Open': 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300',
    'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
    'Resolved': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
  };

  return (
    <div className="space-y-6">
      
      {/* Header & New Ticket Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <LifeBuoy className="w-5 h-5 text-blue-600" />
            Freshman Helpdesk &amp; Support Requests
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Submit official requests for UMS login errors, hostel room repairs, or academic timetable issues.
          </p>
        </div>

        <button
          onClick={() => setIsCreatingTicket(!isCreatingTicket)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{isCreatingTicket ? 'Cancel' : 'Submit New Request'}</span>
        </button>
      </div>

      {/* New Ticket Form Modal/Drawer */}
      {isCreatingTicket && (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-blue-300 dark:border-blue-800 shadow-lg space-y-4 animate-in fade-in duration-200"
        >
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
              Create Freshman Support Ticket
            </h3>
            <p className="text-xs text-slate-500">
              Guaranteed SLA: Freshman onboarding tickets are reviewed within 4 operating hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Issue Category:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="UMS Technical Issue">UMS Technical &amp; Login Issue</option>
                <option value="Hostel Maintenance">Hostel Room Maintenance / Electrical</option>
                <option value="Timetable Clash">Academic Timetable Slot Overlap</option>
                <option value="ID Card & Verification">ID Card &amp; Biometrics Registration</option>
                <option value="Transport & Bus Route">Bus Pass &amp; Commute Assistance</option>
                <option value="Other / Medical">Medical or Personal Emergency</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Urgency Priority:
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="High">⚠️ High (Blocker for classes or room stay)</option>
                <option value="Normal">Normal (Standard inquiry or task)</option>
                <option value="Low">Low (General suggestion)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Subject / Short Title:
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. UMS showing wrong section or room socket inactive"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Detailed Description:
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide exact room number, subject code, or error message..."
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsCreatingTicket(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md transition-all"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      )}

      {/* Tickets List */}
      <div className="space-y-4">
        {tickets.map((ticket) => {
          const isExpanded = expandedTicketId === ticket.id;

          return (
            <div
              key={ticket.id}
              className={`rounded-3xl border transition-all duration-200 overflow-hidden bg-white dark:bg-slate-900 ${
                isExpanded
                  ? 'border-blue-400 dark:border-blue-700 shadow-md ring-1 ring-blue-400/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {/* Ticket Summary Row */}
              <div
                onClick={() => setExpandedTicketId(isExpanded ? null : ticket.id)}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {ticket.ticketNo}
                    </span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${statusBadge[ticket.status]}`}>
                      {ticket.status}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {ticket.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {ticket.subject}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {ticket.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  <div className="text-right text-[11px] text-slate-400">
                    <p>{ticket.createdAt}</p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">{ticket.assignedTo}</p>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {/* Expanded Response Timeline */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 space-y-4">
                  
                  {/* Detailed Description */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block mb-1">
                      Reported Issue:
                    </span>
                    <p className="leading-relaxed">{ticket.description}</p>
                  </div>

                  {/* Responses Thread */}
                  <div className="space-y-2.5">
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                      Resolution Activity ({ticket.responses.length})
                    </h5>

                    {ticket.responses.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <span>{resp.author}</span>
                            <span className="text-[10px] font-normal px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                              {resp.role}
                            </span>
                          </span>
                          <span className="text-[10px] text-slate-400">{resp.time}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                          {resp.message}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Reply Input Box */}
                  <div className="pt-2 flex items-center gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Add an update or reply to staff..."
                      className="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleSendReply(ticket.id)}
                      disabled={!replyText.trim()}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Reply</span>
                    </button>
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
