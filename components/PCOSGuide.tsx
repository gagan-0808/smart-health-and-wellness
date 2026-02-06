
import React from 'react';
import { Calendar, Droplets, Info, Sparkles, Activity } from 'lucide-react';

const PCOSGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-slate-900">PCOS/PCOD Guidance</h2>
        <p className="text-slate-500">Evidence-based tracking and specialized menstrual phase insights.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-rose-500" />
              Cycle Tracker
            </h3>
            <div className="text-center py-8">
              <div className="inline-block p-6 rounded-full border-4 border-rose-100 relative">
                <div className="text-3xl font-bold text-rose-600">Day 14</div>
                <div className="text-xs font-semibold text-rose-400 uppercase">Ovulation Phase</div>
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white text-[10px] p-1.5 rounded-full shadow-lg">
                  <Sparkles size={12} />
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                Your Luteal phase starts in <strong>4 days</strong>. Expect changes in progesterone levels.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Droplets size={18} className="text-indigo-500" />
              Symptoms Log
            </h3>
            <div className="space-y-3">
              {['Acne', 'Fatigue', 'Cravings', 'Bloating'].map(s => (
                <div key={s} className="flex justify-between items-center p-2 rounded-lg bg-slate-50">
                  <span className="text-sm text-slate-600">{s}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(v => (
                      <div key={v} className={`w-3 h-3 rounded-full ${v === 1 ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6 border-b border-slate-50 pb-4">Educational Guidance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <PhaseInfo 
                  title="Menstrual Phase" 
                  desc="First stage of the cycle. Occurs when the uterine lining sheds." 
                  color="rose"
                />
                <PhaseInfo 
                  title="Follicular Phase" 
                  desc="Starts on Day 1 of period. Ends at ovulation. Estrogen rises." 
                  color="blue"
                />
              </div>
              <div className="space-y-4">
                <PhaseInfo 
                  title="Ovulation Phase" 
                  active
                  desc="Release of Luteinizing Hormone (LH). Egg is released from the follicle." 
                  color="emerald"
                />
                <PhaseInfo 
                  title="Luteal Phase" 
                  desc="Post-ovulation. Progesterone keeps uterine lining thick." 
                  color="indigo"
                />
              </div>
            </div>
          </div>

          <div className="bg-indigo-900 text-white p-6 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={20} className="text-indigo-300" />
                <h4 className="font-bold text-lg">AI Health Insights</h4>
              </div>
              <p className="text-indigo-100 text-sm leading-relaxed mb-4 max-w-lg">
                Based on your tracking, we recommend increasing intake of high-fiber, low-glycemic foods today to manage rising LH levels and stabilize energy.
              </p>
              <button className="bg-white text-indigo-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-50 transition-colors">
                View Diet Plan
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhaseInfo = ({ title, desc, color, active = false }: any) => {
  const colorMap: any = {
    rose: 'text-rose-600 bg-rose-50',
    blue: 'text-blue-600 bg-blue-50',
    emerald: 'text-emerald-600 bg-emerald-50',
    indigo: 'text-indigo-600 bg-indigo-50'
  };

  return (
    <div className={`p-4 rounded-2xl transition-all ${active ? 'ring-2 ring-indigo-500 shadow-md' : 'bg-slate-50'}`}>
      <h5 className={`text-sm font-bold mb-1 ${active ? 'text-slate-900' : 'text-slate-700'}`}>{title}</h5>
      <p className="text-xs text-slate-500 leading-normal">{desc}</p>
      {active && <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-wider">Current</span>}
    </div>
  );
};

export default PCOSGuide;
