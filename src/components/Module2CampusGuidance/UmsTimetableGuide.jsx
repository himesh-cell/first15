import React, { useState } from 'react';
import { 
  Binary, 
  Calculator, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Calendar, 
  Clock, 
  HelpCircle,
  FileSpreadsheet,
  GraduationCap
} from 'lucide-react';

export default function UmsTimetableGuide() {
  // Room code decrypter state
  const [inputCode, setInputCode] = useState('34-602');
  
  // Attendance calculator state
  const [classesConducted, setClassesConducted] = useState(24);
  const [classesAttended, setClassesAttended] = useState(20);

  // Decipher logic
  const parseRoomCode = (raw) => {
    const clean = raw.trim().toUpperCase();
    const parts = clean.split('-');
    
    if (parts.length >= 2) {
      const blockNum = parts[0];
      const rest = parts[1];
      const floorDigit = rest.charAt(0);
      const roomDigits = rest.slice(1);

      let blockName = `Block ${blockNum}`;
      if (blockNum === '32') blockName = 'Block 32 (Administrative & Admissions Building)';
      else if (blockNum === '34') blockName = 'Block 34 (School of Computer Science & Engineering)';
      else if (blockNum === '36') blockName = 'Block 36 (UniMall Commercial Complex)';
      else if (blockNum === '37') blockName = 'Block 37 (Central University Library)';
      else if (blockNum === '13') blockName = 'Block 13 (Division of Student Welfare)';
      else if (blockNum === '29') blockName = 'Block 29 (Transportation & Fleet Depot)';

      let floorName = `${floorDigit}${floorDigit === '1' ? 'st' : floorDigit === '2' ? 'nd' : floorDigit === '3' ? 'rd' : 'th'} Floor`;
      if (floorDigit === 'G' || floorDigit === '0') floorName = 'Ground Floor';
      if (floorDigit === 'B') floorName = 'Basement Level';

      return {
        valid: true,
        block: blockName,
        floor: floorName,
        room: `Room / Lab #${roomDigits}`,
        elevators: floorDigit !== 'G' && floorDigit !== '0' ? 'Take the East Wing High-Speed Elevators' : 'Accessible via Main Foyer Entrance'
      };
    }

    return { valid: false };
  };

  const parsed = parseRoomCode(inputCode);

  // Attendance calculation
  const currentAttendancePct = classesConducted > 0 
    ? Math.round((classesAttended / classesConducted) * 100) 
    : 0;

  // Calculate classes to bunk or attend
  // For 75%: (attended) / (conducted + x) >= 0.75  => conducted + x <= attended / 0.75 => x = floor(attended / 0.75 - conducted)
  let safeBunks = 0;
  let mustAttend = 0;

  if (currentAttendancePct >= 75) {
    safeBunks = Math.max(0, Math.floor((classesAttended / 0.75) - classesConducted));
  } else {
    // (attended + y) / (conducted + y) >= 0.75 => attended + y >= 0.75 conducted + 0.75 y => 0.25 y >= 0.75 conducted - attended => y = ceil((3*conducted - 4*attended))
    mustAttend = Math.max(0, Math.ceil(3 * classesConducted - 4 * classesAttended));
  }

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs">
            UMS
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
            UMS & Academic Timetable Navigator
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Crack your timetable codes, understand university assessment rules, and monitor your mandatory 75% attendance quota.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Tool 1: Interactive Room Code Decipher */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Binary className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
                Classroom Room Code Decipher
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Enter any lecture hall or lab code printed on your UMS timetable to reveal the exact block, floor, and elevator path.
            </p>

            {/* Input & Quick Presets */}
            <div className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="e.g. 34-602"
                className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-mono font-bold text-slate-900 dark:text-slate-100 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 w-36 text-center"
              />
              <div className="flex items-center gap-1.5 flex-wrap">
                {['34-602', '32-104', '37-201', '13-G04'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setInputCode(sample)}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* Deciphered Result Box */}
            {parsed.valid ? (
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2 mt-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-blue-200/60 dark:border-blue-900/40">
                  <span className="font-bold text-blue-900 dark:text-blue-300">Decoded Location:</span>
                  <span className="font-mono font-extrabold px-2 py-0.5 rounded bg-blue-600 text-white text-xs">
                    {inputCode.toUpperCase()}
                  </span>
                </div>
                <p className="text-slate-800 dark:text-slate-200">
                  🏛️ <strong>Building:</strong> {parsed.block}
                </p>
                <p className="text-slate-800 dark:text-slate-200">
                  🪜 <strong>Level:</strong> {parsed.floor}
                </p>
                <p className="text-slate-800 dark:text-slate-200">
                  🚪 <strong>Designation:</strong> {parsed.room}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs pt-1 border-t border-blue-200/40 dark:border-blue-900/40">
                  💡 <em>{parsed.elevators}</em>
                </p>
              </div>
            ) : (
              <p className="text-xs text-rose-500 mt-2">
                Format must be [Block]-[Floor][Room], e.g., 34-602
              </p>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
            Formula: <code className="text-blue-600 dark:text-blue-400 font-mono">[Block]-[Floor][RoomNumber]</code>
          </div>
        </div>

        {/* Tool 2: 75% Attendance Buffer Calculator */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-indigo-600" />
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
                75% Attendance Buffer Calculator
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Enter your class counts to calculate your safety margin or how many classes you must attend to avoid exam debarment.
            </p>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1">
                  Classes Conducted:
                </label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={classesConducted}
                  onChange={(e) => setClassesConducted(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1">
                  Classes Attended:
                </label>
                <input
                  type="number"
                  min="0"
                  max={classesConducted}
                  value={classesAttended}
                  onChange={(e) => setClassesAttended(Math.min(classesConducted, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Attendance Status Output */}
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
              currentAttendancePct >= 75
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold">Current Percentage:</span>
                <span className="text-base font-extrabold font-mono">
                  {currentAttendancePct}%
                </span>
              </div>

              {currentAttendancePct >= 75 ? (
                <div className="flex items-start gap-2 pt-1 border-t border-emerald-200/60 dark:border-emerald-800/40">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Safe!</strong> You can safely miss <strong>{safeBunks}</strong> upcoming lecture{safeBunks !== 1 ? 's' : ''} and still maintain 75%+.
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-2 pt-1 border-t border-rose-200/60 dark:border-rose-800/40">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>
                    <strong>Danger Zone!</strong> You must attend the next <strong>{mustAttend}</strong> consecutive class{mustAttend !== 1 ? 'es' : ''} without absence to reach 75%.
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
            Debarment threshold: &lt;75% aggregate attendance leads to automatic exam cancellation.
          </p>
        </div>

      </div>

      {/* UMS Assessment & Rules Cheatsheet */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          University Evaluation & Grading Policy Breakdown
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 text-xs">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-extrabold text-[11px]">
              Continuous Assessment (30%)
            </span>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mt-2 mb-1">
              Quizzes & Assignments
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              3 internal class tests/assignments conducted throughout the semester. Best 2 scores out of 3 are considered + 5 marks attendance weightage.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 text-xs">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 font-extrabold text-[11px]">
              Mid-Term Exam (20%)
            </span>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mt-2 mb-1">
              MTE Examination
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Held in week 8 covering units 1, 2, and 3. Carries 20% aggregate weight. Seating plan published on UMS 48 hours prior.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 text-xs">
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300 font-extrabold text-[11px]">
              End-Term Exam (50%)
            </span>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mt-2 mb-1">
              Comprehensive Final (ETE)
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Comprehensive final exam covering all 6 units. Must have 75%+ attendance and no outstanding fee dues to generate digital admit card.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
