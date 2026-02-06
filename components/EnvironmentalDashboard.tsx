
import React from 'react';
import { Wind, Droplets, Volume2, CloudRain, Sun, AlertTriangle } from 'lucide-react';

const EnvironmentalDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-slate-900">Environmental Dashboard</h2>
        <p className="text-slate-500">Monitoring air, water, and noise quality in your vicinity.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AIR SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Wind size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Air Quality</h3>
              <p className="text-xs text-slate-500">Indoor/Outdoor Index</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-sm font-medium text-slate-500 mb-1">AQI Index</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-emerald-600">42</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Good</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 border-b border-slate-100">
              <span className="text-sm text-slate-600">Indoor Particulate (PM 2.5)</span>
              <span className="text-sm font-bold text-slate-900">12 µg/m³</span>
            </div>
            <div className="flex justify-between items-center p-3">
              <span className="text-sm text-slate-600">Pollen Percentage</span>
              <span className="text-sm font-bold text-slate-900">Low (4%)</span>
            </div>
          </div>
        </div>

        {/* WATER SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <Droplets size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Water Quality</h3>
              <p className="text-xs text-slate-500">Tap Filter Health</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-sm font-medium text-slate-500 mb-1">TDS Level</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">145</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">PPM</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 border-b border-slate-100">
              <span className="text-sm text-slate-600">Ph Level</span>
              <span className="text-sm font-bold text-slate-900">7.2 (Neutral)</span>
            </div>
            <div className="flex justify-between items-center p-3">
              <span className="text-sm text-slate-600">Filter Life</span>
              <span className="text-sm font-bold text-emerald-600">82%</span>
            </div>
          </div>
        </div>

        {/* NOISE SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <Volume2 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Noise Environment</h3>
              <p className="text-xs text-slate-500">Acoustic Levels</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-sm font-medium text-slate-500 mb-1">Average Decibel</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">48</span>
                <span className="text-xs font-semibold text-slate-500 uppercase">dB</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 border-b border-slate-100">
              <span className="text-sm text-slate-600">Peak Volume</span>
              <span className="text-sm font-bold text-slate-900">62 dB (Quiet)</span>
            </div>
            <div className="flex justify-between items-center p-3">
              <span className="text-sm text-slate-600">Sleep Sound Score</span>
              <span className="text-sm font-bold text-indigo-600">92/100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex gap-4">
          <div className="p-2 bg-white rounded-lg shadow-sm self-start">
            <AlertTriangle className="text-amber-600" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-amber-900 mb-2">Lifestyle Improvement Recommended</h4>
            <p className="text-amber-800 text-sm leading-relaxed mb-4">
              Current air quality peaks between 8:00 PM and 10:00 PM. Based on your profile, we recommend:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-sm text-amber-900">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Intake of high fiber-based diet & low-glycemic index food.
              </li>
              <li className="flex items-center gap-2 text-sm text-amber-900">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Keep windows closed during evening peaks.
              </li>
              <li className="flex items-center gap-2 text-sm text-amber-900">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Balanced water intake (3.7L target).
              </li>
              <li className="flex items-center gap-2 text-sm text-amber-900">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                Exercise weekly for at least 150 min.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalDashboard;
