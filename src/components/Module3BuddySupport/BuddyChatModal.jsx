import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Send, 
  Sparkles, 
  User, 
  CheckCheck, 
  HelpCircle,
  Clock
} from 'lucide-react';

export default function BuddyChatModal({ mentor, onClose }) {
  const { chatMessages, sendBuddyMessage, activeProfile } = useApp();
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const messages = chatMessages[mentor.id] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (textToSend = inputText) => {
    if (!textToSend.trim()) return;
    sendBuddyMessage(mentor.id, textToSend);
    setInputText('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1300);
  };

  // Quick prompt suggestions
  const suggestedQuestions = [
    'What is the hostel curfew rule and biometric penalty?',
    'How do I calculate 75% attendance on UMS?',
    'Where is the best place to get printouts on campus?',
    'How do parents verify the hostel night out-pass?'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full h-[600px] max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {mentor.name}
              </h3>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span>Online • Senior Buddy</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-sm">
          
          {/* Intro welcome timestamp */}
          <div className="text-center my-2">
            <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
              Connected with your designated onboarding mentor
            </span>
          </div>

          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-6 h-6 rounded-full object-cover shrink-0 mb-1"
                  />
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm space-y-1 ${
                    isUser
                      ? 'bg-blue-600 text-white rounded-br-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-xs'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <div className={`flex items-center justify-end gap-1 text-[9px] ${
                    isUser ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    <span>{msg.time}</span>
                    {isUser && <CheckCheck className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs pl-8">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              <span className="text-[11px] font-medium text-slate-500">
                {mentor.name.split(' ')[0]} is typing...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Question Pills */}
        <div className="px-3 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 shrink-0 transition-all text-left truncate max-w-[200px]"
            >
              💬 {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Message ${mentor.name.split(' ')[0]}...`}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-md shadow-blue-500/20 transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
