import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  Lock, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  HelpCircle, 
  Sparkles,
  Building2,
  Bus,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function LoginPage({ onBackToLanding }) {
  const { login, quickLogin, profiles, setCurrentView, darkMode, setDarkMode } = useApp();

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const res = login(studentId, password);
      if (!res.success) {
        setError(res.message);
        setIsLoading(false);
      }
    }, 400);
  };

  const handleQuickSelect = (profile) => {
    setStudentId(profile.registrationNo);
    setPassword('student123');
    setError('');
    quickLogin(profile.id);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent dark:from-blue-900/20 dark:via-indigo-900/10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

      {/* Top Navigation Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between max-w-7xl mx-auto w-full px-4 sm:px-6">
        <button
          onClick={onBackToLanding || (() => setCurrentView('landing'))}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/80 dark:bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Landing Page</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            Course INT257 • Problem 03
          </span>
        </div>
      </div>

      {/* Header Container */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mt-8 sm:mt-0 relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 mb-4 group hover:scale-105 transition-transform">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Student Orientation Portal
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Sign in to access your personalized 15-day university roadmap
        </p>
      </div>

      {/* Main Login Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0 relative z-10">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 rounded-2xl border border-slate-200/80 dark:border-slate-800 transition-colors">
          
          {/* Error Notice */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 flex items-start gap-3 text-red-700 dark:text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <div className="flex-1 font-medium leading-relaxed">{error}</div>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Student Registration Number */}
            <div>
              <label 
                htmlFor="studentId" 
                className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
              >
                Student Registration No. / ID
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  required
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g. 12401822 or rahul-verma"
                  className="block w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label 
                  htmlFor="password" 
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowHelp(!showHelp)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <HelpCircle className="w-3 h-3" />
                  <span>Demo hint</span>
                </button>
              </div>

              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {showHelp && (
                <p className="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                  🔑 <strong>Demo Access:</strong> All student accounts use password <code>student123</code>. You can also click any card below to log in with 1 click!
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span>Remember this device</span>
              </label>

              <span className="text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>SSL Secured</span>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] shadow-lg shadow-blue-500/25 transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Student Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Login Section */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                ⚡ 1-Click Instant Demo Login:
              </span>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/60">
                Fresher Profiles
              </span>
            </div>

            <div className="space-y-2.5">
              {profiles.map((p) => {
                const isHosteller = p.studentType === 'Hosteller';
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleQuickSelect(p)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition text-left group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img 
                        src={p.avatar} 
                        alt={p.name} 
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700 group-hover:ring-2 group-hover:ring-blue-500 transition" 
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {p.name}
                          </span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                            isHosteller 
                              ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' 
                              : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                          }`}>
                            {isHosteller ? 'BH-4' : 'Day Scholar'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          ID: <span className="font-mono text-slate-700 dark:text-slate-300">{p.registrationNo}</span> • {p.program.split(' ')[0]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100 shrink-0 ml-2">
                      <span>Login</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Info */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-500 mt-6">
          Need campus assistance? Contact freshman support desk at{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">first15@university.edu.in</span>
        </p>
      </div>

    </div>
  );
}
