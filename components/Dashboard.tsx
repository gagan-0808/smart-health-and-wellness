
import React from 'react';
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Clock, 
  AlertCircle,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Dog,
  User
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', human: 72, pet: 85 },
  { name: 'Tue', human: 75, pet: 88 },
  { name: 'Wed', human: 68, pet: 90 },
  { name: 'Thu', human: 74, pet: 82 },
  { name: 'Fri', human: 71, pet: 84 },
  { name: 'Sat', human: 80, pet: 87 },
  { name: 'Sun', human: 78, pet: 89 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-slate-900">Health Overview</h2>
        <p className="text-slate-500">Predictive and preventive care for your entire household.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={<Heart className="text-rose-500" />} label="Resting BPM" value="72" unit="bpm" status="Healthy" trend="stable" />
        <MetricCard icon={<Activity className="text-indigo-500" />} label="Daily Steps" value="8,432" unit="steps" status="Active" trend="up" />
        <MetricCard icon={<Thermometer className="text-amber-500" />} label="Body Temp" value="98.6" unit="°F" status="Normal" trend="stable" />
        <MetricCard icon={<Dog className="text-orange-500" />} label="Pet Activity" value="4.2" unit="miles" status="Excellent" trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <TrendingUp size={18} className="text-indigo-600" />
              Vital Patterns
            </h3>
            <div className="flex gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>Human</span>
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>Pet (Max)</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHuman" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="human" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorHuman)" />
                <Area type="monotone" dataKey="pet" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorPet)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle size={18} className="text-rose-500" />
            AI Alerts
          </h3>
          <div className="space-y-4">
            <AlertItem 
              type="critical" 
              title="Irregular Pet Heart Rate" 
              desc="Max's heart rate was 15% above normal during sleep." 
              time="12m ago" 
            />
            <AlertItem 
              type="warning" 
              title="High Pollen Detected" 
              desc="Indoor air quality is declining. Activate purifier?" 
              time="1h ago" 
            />
            <AlertItem 
              type="info" 
              title="PCOS Tracker" 
              desc="Your follicular phase starts in 2 days. Prep high-fiber diet." 
              time="3h ago" 
            />
          </div>
          <button className="w-full mt-6 py-2.5 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 rounded-xl transition-colors">
            View All History
          </button>
        </div>
      </div>

      <div className="bg-indigo-900 rounded-2xl p-6 text-white flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10 max-w-md">
          <h3 className="text-xl font-bold mb-2">Connected Devices</h3>
          <p className="text-indigo-200 text-sm mb-4">You have 6 active sensors synced across your family and pets.</p>
          <div className="flex gap-2">
            <div className="bg-white/10 p-2 rounded-lg flex items-center gap-2 text-xs">
              <Smartphone size={14} /> Apple Watch
            </div>
            <div className="bg-white/10 p-2 rounded-lg flex items-center gap-2 text-xs">
              <Activity size={14} /> Pet Collar
            </div>
            <div className="bg-white/10 p-2 rounded-lg flex items-center gap-2 text-xs">
              <CheckCircle2 size={14} /> Smart Scale
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full opacity-10 pointer-events-none transform translate-x-1/4">
          <PawPrint size={240} className="text-white" />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, unit, status, trend }: any) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-2">
      <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
        status === 'Healthy' || status === 'Normal' || status === 'Excellent' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
      }`}>
        {status}
      </span>
    </div>
    <div>
      <h4 className="text-slate-500 text-xs font-medium">{label}</h4>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className="text-slate-400 text-sm font-medium">{unit}</span>
      </div>
    </div>
  </div>
);

const AlertItem = ({ type, title, desc, time }: any) => (
  <div className="flex gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
      type === 'critical' ? 'bg-rose-500' : type === 'warning' ? 'bg-amber-500' : 'bg-indigo-500'
    }`} />
    <div className="flex-1">
      <div className="flex justify-between items-start mb-0.5">
        <h5 className="text-sm font-semibold text-slate-800">{title}</h5>
        <span className="text-[10px] text-slate-400 font-medium">{time}</span>
      </div>
      <p className="text-xs text-slate-500 leading-normal">{desc}</p>
    </div>
  </div>
);

const PawPrint = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 5C10.62 5 9.5 3.88 9.5 2.5S10.62 0 12 0s2.5 1.12 2.5 2.5S13.38 5 12 5z" />
    <path d="M19 11c-1.38 0-2.5-1.12-2.5-2.5S17.62 6 19 6s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <path d="M5 11c-1.38 0-2.5-1.12-2.5-2.5S3.62 6 5 6s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <path d="M12 24c-4.42 0-8-3.58-8-8 0-1.66 1.34-3 3-3 1.38 0 2.5 1.12 2.5 2.5 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-1.38 1.12-2.5 2.5-2.5 1.66 0 3 1.34 3 3 0 4.42-3.58 8-8 8z" />
  </svg>
);

export default Dashboard;
