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
  AlertCircle,
  KeyRound,
  UserPlus,
  LogIn,
  Home,
  RefreshCw,
  Mail,
  ShieldAlert
} from 'lucide-react';

export default function LoginPage({ onBackToLanding }) {
  const { 
    login, 
    quickLogin, 
    register, 
    resetPassword, 
    profiles, 
    setCurrentView 
  } = useApp();

  // Mode: 'login' | 'register' | 'forgot'
  const [mode, setMode] = useState('login');

  // Login form state
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Register form state
  const [regData, setRegData] = useState({
    name: '',
    registrationNo: '',
    rollNo: '',
    program: 'B.Tech Computer Science & Engineering',
    studentType: 'Hosteller', // 'Hosteller' or 'Day Scholar'
    hostelName: 'Boys Hostel 2 (BH-2)',
    roomNo: '204-B',
    busRouteNo: 'Route 14 (Model Town)',
    pickupPoint: 'Model Town Gurudwara Chowk (7:15 AM)',
    password: '',
    confirmPassword: ''
  });

  // Forgot Password state
  const [forgotId, setForgotId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // Feedback states
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoHint, setShowDemoHint] = useState(false);

  // Handle Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const res = login(loginId, loginPassword);
      if (!res.success) {
        setError(res.message);
        setIsLoading(false);
      }
    }, 350);
  };

  // Handle Register
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (regData.password !== regData.confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    if (regData.password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const res = register(regData);
      if (!res.success) {
        setError(res.message);
        setIsLoading(false);
      }
      // If success, register() automatically logs them in and sets view to 'dashboard'
    }, 450);
  };

  // Handle Quick Fill Register Form
  const handleQuickFillRegister = () => {
    const randomId = '1241' + Math.floor(1000 + Math.random() * 9000);
    setRegData({
      name: 'Tanmay Saxena',
      registrationNo: randomId,
      rollNo: 'RK24CSE' + randomId.slice(-2),
      program: 'B.Tech Computer Science & Engineering',
      studentType: 'Hosteller',
      hostelName: 'Boys Hostel 1 (BH-1)',
      roomNo: '302-A',
      busRouteNo: 'Route 05 (Civil Lines)',
      pickupPoint: 'City Clock Tower (7:25 AM)',
      password: 'student123',
      confirmPassword: 'student123'
    });
    setError('');
  };

  // Handle Forgot Password Submit
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!otpSent) {
      // Step 1: Verify ID and send OTP
      const cleanId = forgotId.trim().toLowerCase();
      const matched = profiles.find(p => 
        p.registrationNo.toLowerCase() === cleanId ||
        p.id.toLowerCase() === cleanId
      );

      if (!matched) {
        setError('No student found with this Registration Number. Try 12401822 or 12409841.');
        return;
      }

      setOtpSent(true);
      setOtpCode('152570'); // Simulated verification OTP
      setSuccessMsg(`Verification code sent to registered mobile linked to ${matched.name}! (Use simulated OTP: 152570)`);
      return;
    }

    // Step 2: Validate OTP and New Password
    if (otpCode !== '152570') {
      setError('Invalid OTP code. Please enter 152570.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = resetPassword(forgotId, newPassword);
      setIsLoading(false);
      if (res.success) {
        setSuccessMsg(res.message);
        setLoginId(forgotId);
        setLoginPassword(newPassword);
        setTimeout(() => {
          setMode('login');
          setOtpSent(false);
        }, 1200);
      } else {
        setError(res.message);
      }
    }, 400);
  };

  // Quick 1-click login handler
  const handleQuickSelect = (profile) => {
    setLoginId(profile.registrationNo);
    setLoginPassword('student123');
    setError('');
    quickLogin(profile.id);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-10 sm:px-6 lg:px-8 relative overflow-hidden transition-colors">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent dark:from-blue-900/20 dark:via-indigo-900/10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

      {/* Top Header Controls */}
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

      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mt-12 sm:mt-2 relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 mb-3 group hover:scale-105 transition-transform">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {mode === 'login' && 'Student Orientation Portal'}
          {mode === 'register' && 'New Student Registration'}
          {mode === 'forgot' && 'Reset Student Credentials'}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          {mode === 'login' && 'Sign in to access your personalized 15-day university onboarding'}
          {mode === 'register' && 'Create your fresher account to receive personalized milestones & mentors'}
          {mode === 'forgot' && 'Recover your UMS password using your University Registration Number'}
        </p>

        {/* Mode Switch Tabs */}
        <div className="mt-5 inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              mode === 'login' 
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); setSuccessMsg(''); }}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              mode === 'register' 
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Register Account</span>
          </button>
        </div>
      </div>

      {/* Auth Card Container */}
      <div className={`mt-6 sm:mx-auto sm:w-full ${mode === 'register' ? 'sm:max-w-xl' : 'sm:max-w-md'} px-4 sm:px-0 relative z-10 transition-all`}>
        <div className="bg-white dark:bg-slate-900 py-7 px-6 sm:px-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 rounded-2xl border border-slate-200/80 dark:border-slate-800 transition-colors">
          
          {/* Error Banner */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 flex items-start gap-2.5 text-red-700 dark:text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <div className="flex-1 font-medium leading-relaxed">{error}</div>
            </div>
          )}

          {/* Success Banner */}
          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2.5 text-emerald-700 dark:text-emerald-300 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
              <div className="flex-1 font-medium leading-relaxed">{successMsg}</div>
            </div>
          )}

          {/* -------------------- 1. LOGIN FORM -------------------- */}
          {mode === 'login' && (
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <label 
                  htmlFor="loginId" 
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                >
                  Student Registration No. / ID
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    id="loginId"
                    type="text"
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="e.g. 12401822 or rahul-verma"
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="loginPassword" 
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setError(''); setSuccessMsg(''); setForgotId(loginId); }}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    id="loginPassword"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
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

                <div className="mt-2 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setShowDemoHint(!showDemoHint)}
                    className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 font-medium"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
                    <span>Demo Credentials Hint</span>
                  </button>

                  <span className="text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>SSL Secured</span>
                  </span>
                </div>

                {showDemoHint && (
                  <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                    🔑 <strong>Default Password:</strong> All student accounts use <code>student123</code>. You can also click any 1-click card below!
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="remember" className="text-slate-600 dark:text-slate-400 cursor-pointer select-none">
                  Keep me signed in on this computer
                </label>
              </div>

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

              {/* Quick Demo Section */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    ⚡ 1-Click Demo Profiles:
                  </span>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/60">
                    Instant Access
                  </span>
                </div>

                <div className="space-y-2">
                  {profiles.slice(0, 3).map((p) => {
                    const isHosteller = p.studentType === 'Hosteller';
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleQuickSelect(p)}
                        className="w-full flex items-center justify-between p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition text-left group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img 
                            src={p.avatar} 
                            alt={p.name} 
                            className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700 group-hover:ring-2 group-hover:ring-blue-500 transition" 
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                {p.name}
                              </span>
                              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                                isHosteller 
                                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' 
                                  : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                              }`}>
                                {p.studentType}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                              ID: <span className="font-mono text-slate-700 dark:text-slate-300">{p.registrationNo}</span>
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                          Enter →
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </form>
          )}

          {/* -------------------- 2. REGISTER FORM -------------------- */}
          {mode === 'register' && (
            <form className="space-y-3.5" onSubmit={handleRegisterSubmit}>
              
              {/* Quick Fill Button */}
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Fill details below or use quick sample:
                </span>
                <button
                  type="button"
                  onClick={handleQuickFillRegister}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Auto-Fill Sample</span>
                </button>
              </div>

              {/* Student Name & Registration No */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Full Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={regData.name}
                    onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                    placeholder="e.g. Tanmay Saxena"
                    className="block w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Registration No. (Student ID) *
                  </label>
                  <input
                    type="text"
                    required
                    value={regData.registrationNo}
                    onChange={(e) => setRegData({ ...regData, registrationNo: e.target.value })}
                    placeholder="e.g. 12415588"
                    className="block w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Program & Student Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Academic Program *
                  </label>
                  <select
                    value={regData.program}
                    onChange={(e) => setRegData({ ...regData, program: e.target.value })}
                    className="block w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="B.Tech Computer Science & Engineering">B.Tech CSE</option>
                    <option value="Bachelor of Business Administration (BBA)">BBA (Management)</option>
                    <option value="B.Des (Fashion & Lifestyle Design)">B.Des (Design)</option>
                    <option value="Master of Computer Applications (MCA)">MCA</option>
                    <option value="B.Sc Biotechnology">B.Sc Biotechnology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Student Category *
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => setRegData({ ...regData, studentType: 'Hosteller' })}
                      className={`py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition ${
                        regData.studentType === 'Hosteller'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Hosteller</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRegData({ ...regData, studentType: 'Day Scholar' })}
                      className={`py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition ${
                        regData.studentType === 'Day Scholar'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <Bus className="w-3.5 h-3.5" />
                      <span>Day Scholar</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Conditional: Hostel vs Commute */}
              {regData.studentType === 'Hosteller' ? (
                <div className="p-3 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200/80 dark:border-blue-900/40 grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-blue-900 dark:text-blue-200 mb-1">
                      Assigned Hostel
                    </label>
                    <input
                      type="text"
                      value={regData.hostelName}
                      onChange={(e) => setRegData({ ...regData, hostelName: e.target.value })}
                      placeholder="e.g. Boys Hostel 2"
                      className="block w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-blue-900 dark:text-blue-200 mb-1">
                      Room No.
                    </label>
                    <input
                      type="text"
                      value={regData.roomNo}
                      onChange={(e) => setRegData({ ...regData, roomNo: e.target.value })}
                      placeholder="e.g. 204-B"
                      className="block w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                      Bus Route
                    </label>
                    <input
                      type="text"
                      value={regData.busRouteNo}
                      onChange={(e) => setRegData({ ...regData, busRouteNo: e.target.value })}
                      placeholder="e.g. Route 14"
                      className="block w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                      Pickup Point
                    </label>
                    <input
                      type="text"
                      value={regData.pickupPoint}
                      onChange={(e) => setRegData({ ...regData, pickupPoint: e.target.value })}
                      placeholder="e.g. Model Town"
                      className="block w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 rounded-lg text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              )}

              {/* Password & Confirm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Create Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={regData.password}
                    onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                    placeholder="Min 4 characters"
                    className="block w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={regData.confirmPassword}
                    onChange={(e) => setRegData({ ...regData, confirmPassword: e.target.value })}
                    placeholder="Repeat password"
                    className="block w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Register Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] shadow-lg shadow-blue-500/25 transition disabled:opacity-70 disabled:cursor-not-allowed mt-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Creating Student Account...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Register Account & Enter Orientation</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    Sign in here
                  </button>
                </span>
              </div>
            </form>
          )}

          {/* -------------------- 3. FORGOT PASSWORD FORM -------------------- */}
          {mode === 'forgot' && (
            <form className="space-y-4" onSubmit={handleForgotSubmit}>
              <div>
                <label 
                  htmlFor="forgotId" 
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                >
                  Student Registration No. / ID
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    id="forgotId"
                    type="text"
                    required
                    value={forgotId}
                    onChange={(e) => setForgotId(e.target.value)}
                    placeholder="e.g. 12401822 or 12409841"
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              {!otpSent ? (
                <>
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                    💡 Click below to simulate sending a verification code (OTP) to the mobile number registered with your student profile.
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 active:scale-95 transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Verification Code</span>
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Verification Code (OTP)
                    </label>
                    <input
                      type="text"
                      required
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="Enter 152570"
                      className="block w-full px-3.5 py-2.5 text-sm font-mono tracking-widest bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        New Password *
                      </label>
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New password"
                        className="block w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Confirm New *
                      </label>
                      <input
                        type="password"
                        required
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        placeholder="Confirm password"
                        className="block w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md active:scale-95 transition"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Updating Password...</span>
                      </>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>Reset Password & Return to Login</span>
                      </>
                    )}
                  </button>
                </>
              )}

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Support Help Contact */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-500 mt-6">
          Need campus assistance? Contact freshman support desk at{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">first15@university.edu.in</span>
        </p>
      </div>

    </div>
  );
}
