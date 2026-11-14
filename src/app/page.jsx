'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the main interactive App to prevent SSR localStorage issues
const MainApp = dynamic(() => import('../App'), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
        <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">Loading First15...</span>
      </div>
    </div>
  )
});

export default function HomePage() {
  return <MainApp />;
}
