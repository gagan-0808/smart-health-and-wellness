
import React from 'react';
import { 
  LayoutDashboard, 
  Wind, 
  UserRound, 
  MessageSquareHeart, 
  FileText, 
  Users, 
  PawPrint 
} from 'lucide-react';
import { AppTab } from '../types';

interface SidebarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: AppTab.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: AppTab.ENVIRONMENT, label: 'Environment', icon: Wind },
    { id: AppTab.WOMENS_HEALTH, label: "Women's Health", icon: UserRound },
    { id: AppTab.STRESS_AI, label: 'Stress AI', icon: MessageSquareHeart },
    { id: AppTab.PRESCRIPTIONS, label: 'Therapy Drafts', icon: FileText },
    { id: AppTab.FAMILY_PETS, label: 'Family & Pets', icon: Users },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 flex items-center gap-2 border-b border-slate-100">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <PawPrint className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Health Paw</h1>
          <p className="text-xs text-slate-500 font-medium tracking-tight">One Family. One Health.</p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-slate-400'} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
            H4
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900 leading-tight">Hacktastic Four</p>
            <p className="text-[10px] text-slate-500">Premium Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
