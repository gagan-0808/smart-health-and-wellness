
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EnvironmentalDashboard from './components/EnvironmentalDashboard';
import StressChatbot from './components/StressChatbot';
import PCOSGuide from './components/PCOSGuide';
import TherapyDrafts from './components/TherapyDrafts';
import FamilyHub from './components/FamilyHub';
import { AppTab } from './types';
import { Bell, Search, Settings, HelpCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.DASHBOARD:
        return <Dashboard />;
      case AppTab.ENVIRONMENT:
        return <EnvironmentalDashboard />;
      case AppTab.WOMENS_HEALTH:
        return <PCOSGuide />;
      case AppTab.STRESS_AI:
        return <StressChatbot />;
      case AppTab.PRESCRIPTIONS:
        return <TherapyDrafts />;
      case AppTab.FAMILY_PETS:
        return <FamilyHub />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 min-w-0 overflow-hidden flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-50">
          <div className="flex-1 max-w-md">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search health records, tips, or symptoms..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent rounded-xl text-sm focus:bg-white focus:border-indigo-100 focus:ring-2 focus:ring-indigo-50 outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-8">
            <div className="flex gap-2">
              <IconButton icon={<HelpCircle size={20} />} label="Help" />
              <IconButton icon={<Settings size={20} />} label="Settings" />
              <div className="relative">
                <IconButton icon={<Bell size={20} />} label="Notifications" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
              </div>
            </div>
            
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900 leading-tight">Sarah Johnson</p>
                <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">Primary User</p>
              </div>
              <img 
                src="https://picsum.photos/seed/sarah/100/100" 
                alt="Profile" 
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-indigo-50"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto max-w-[1400px] mx-auto w-full">
          {renderContent()}
        </div>

        {/* Status Bar Footer */}
        <footer className="h-10 bg-white border-t border-slate-200 flex items-center justify-between px-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              Wearable Connected
            </span>
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              Pet Collar Sync: Live
            </span>
          </div>
          <div className="flex gap-6">
            <span>DRON CODEATHON 2026</span>
            <span>Version 1.0.4 Prototype</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

const IconButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <button 
    className="p-2 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all group relative"
    aria-label={label}
  >
    {icon}
    <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[100]">
      {label}
    </span>
  </button>
);

export default App;
