import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Home, 
  Bus, 
  ShieldAlert, 
  Clock, 
  Utensils, 
  Shirt, 
  Key, 
  Car, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  PhoneCall,
  Lock
} from 'lucide-react';

export default function HostelAndCommuteGuide() {
  const { activeProfile } = useApp();
  const [activeGuideTab, setActiveGuideTab] = useState(
    activeProfile.studentType === 'Day Scholar' ? 'commute' : 'hostel'
  );

  return (
    <div className="space-y-6">
      
      {/* Sub-tab switcher */}
      <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl w-fit">
        <button
          onClick={() => setActiveGuideTab('hostel')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeGuideTab === 'hostel'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Hostel Rules & Living Guide</span>
        </button>

        <button
          onClick={() => setActiveGuideTab('commute')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeGuideTab === 'commute'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Bus className="w-4 h-4" />
          <span>Day-Scholar Commute & Transport</span>
        </button>
      </div>

      {activeGuideTab === 'hostel' ? (
        <div className="space-y-6">
          
          {/* Hostel Rules Key Warning Banner */}
          <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-red-500/10 border border-orange-300 dark:border-orange-800/60 rounded-3xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-orange-950 dark:text-orange-200">
                  Strict 7:30 PM Hostel Biometric Curfew Rule
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Every hosteller must punch their biometric fingerprint at the hostel entrance turnstiles before <strong>7:30 PM sharp</strong> every single day. Delayed punching automatically generates an automated SMS notification to registered parents and requires written permission from the Chief Warden.
                </p>
              </div>
            </div>
          </div>

          {/* Hostel Living Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pillar 1: Dining & Mess Timings */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Mess Timings & Meal Slots
                </h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Breakfast:</span>
                  <span className="font-mono text-slate-900 dark:text-slate-100">7:30 AM – 9:30 AM</span>
                </div>
                <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Lunch:</span>
                  <span className="font-mono text-slate-900 dark:text-slate-100">12:00 PM – 2:30 PM</span>
                </div>
                <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Evening Snacks:</span>
                  <span className="font-mono text-slate-900 dark:text-slate-100">5:00 PM – 6:00 PM</span>
                </div>
                <div className="flex justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Dinner:</span>
                  <span className="font-mono text-slate-900 dark:text-slate-100">7:30 PM – 9:30 PM</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Tip: You can switch between North Indian and South Indian dining halls via UMS on the 1st of every month.
              </p>
            </div>

            {/* Pillar 2: Out-Pass & Night Leave */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <Key className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Overnight Leave & Out-Pass
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Applying for night leaves or home visits requires digital verification:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">1.</span>
                  <span>Apply 24 hours prior on UMS &gt; Leave Module.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">2.</span>
                  <span>Parents receive automated OTP SMS for approval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">3.</span>
                  <span>Hostel warden signs digitally &amp; generates exit barcode.</span>
                </li>
              </ul>
              <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                ⚠️ Security at campus boundary gates will not permit exit without active green barcode.
              </p>
            </div>

            {/* Pillar 3: Laundry Services */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <Shirt className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Mechanized Laundry System
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                40 standard washes per semester are included in your hostel fee. Pickup counters are in UniMall Lower Ground.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p>• Bags dropped on Monday are returned steam-ironed on Wednesday.</p>
                <p>• Bags dropped on Thursday are returned on Saturday.</p>
                <p>• Always attach your RFID tag firmly onto the bag zipper.</p>
              </div>
            </div>

            {/* Pillar 4: Prohibited Items */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Strictly Prohibited in Rooms
                </h4>
              </div>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <p className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold">
                  ❌ Electric immersion rods &amp; room heaters
                </p>
                <p className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold">
                  ❌ Induction cooktops &amp; electric kettles
                </p>
                <p className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold">
                  ❌ Smoking, alcohol, or narcotic substances (Immediate expulsion)
                </p>
                <p className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold">
                  ❌ Unauthorized non-resident overnight guests
                </p>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Day Scholar Commute Guide */
        <div className="space-y-6">
          
          {/* Day Scholar Transport Banner */}
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-300 dark:border-cyan-800/60 rounded-3xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Bus className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-cyan-950 dark:text-cyan-200">
                  University AC Bus Fleet &amp; Commute Guidelines
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  200+ air-conditioned university buses connect 25+ cities across Punjab. Evening departure from campus terminal behind UniMall is strictly at <strong>5:10 PM</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Bus Boarding Pass */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                  <Bus className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Bus Pass &amp; Platform Bays
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Scan your smart RFID bus pass at the terminal turnstiles. Every route is allocated a designated bay number (Bays 1-35).
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p>• Morning arrival: 8:15 AM – 8:40 AM</p>
                <p>• Evening reporting: 5:00 PM</p>
                <p>• Strict departure: 5:10 PM sharp</p>
              </div>
            </div>

            {/* Vehicle Parking Permit */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <Car className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Personal Vehicle &amp; FASTag Sticker
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Students bringing motorcycles or cars must register with Campus Security at Gate 1 or Gate 4 for holographic stickers.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p>• Helmets are compulsory for both rider and pillion.</p>
                <p>• Speed limit on campus internal roads is 20 km/h.</p>
                <p>• Free parking zones are located near Gate 1 and Gate 4.</p>
              </div>
            </div>

            {/* Day Scholar Lockers */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Locker Booking on Campus
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Don't carry heavy laptops and textbooks all day. Day scholars can book steel lockers at UniMall Level 1 or Central Library.
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Deposit Rs. 500 refundable fee at UniMall Convenience Desk with student ID.
              </p>
            </div>

            {/* Cafeteria & Rest Lounges */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Day Scholar Dining &amp; Relax Lounges
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Air-conditioned student lounges with charging sockets and microwave warming stations are located on the 2nd floor of UniMall and Block 34.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
