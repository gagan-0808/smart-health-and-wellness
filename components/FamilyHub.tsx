
import React from 'react';
import { QrCode, User, Dog, Mail, Phone, Lock, Eye, Copy } from 'lucide-react';

const FamilyHub: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-slate-900">Family & Pet Visibility</h2>
        <p className="text-slate-500">Manage unique IDs and clinical access for every household member.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ProfileCard 
            type="human"
            name="Sarah Johnson"
            role="Patient / Owner"
            id="4f1c7d2e-a9e2"
            email="sarah.j@gmail.com"
          />
          <ProfileCard 
            type="pet"
            name="Max (Golden Retriever)"
            role="Companion"
            id="9b7d4321-12af"
            email="Owner: Sarah J."
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Lock size={18} className="text-indigo-600" />
              Privacy & Access Control
            </h3>
            <div className="space-y-4">
              <AccessToggle label="Family/Caregiver Access" desc="Allows members to monitor health alerts" active />
              <AccessToggle label="Clinician Visibility" desc="Grants view access to medical history" active />
              <AccessToggle label="Emergency NFC/Tap-to-Share" desc="Share ID via proximity in crises" />
            </div>
            <div className="mt-8 p-4 bg-slate-50 rounded-xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Technical Summary</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Auth Method</span>
                  <span className="font-mono text-slate-900">OAuth2/OIDC</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Encryption</span>
                  <span className="font-mono text-slate-900">AES-256 (At Rest)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 text-white p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-white p-2 rounded-xl">
              <QrCode size={80} className="text-slate-900" />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight mb-1">Scan for Quick Link</h4>
              <p className="text-indigo-100 text-sm mb-4">One-tap sharing for clinics and vets.</p>
              <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 transition-colors px-3 py-1.5 rounded-lg text-xs font-bold">
                <Copy size={14} /> Copy Public Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ type, name, role, id, email }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-4">
        <div className={`p-3 rounded-2xl ${type === 'human' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
          {type === 'human' ? <User size={28} /> : <Dog size={28} />}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <p className="text-xs font-semibold text-slate-400">{role}</p>
        </div>
      </div>
      <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
        <Eye size={20} />
      </button>
    </div>
    
    <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-4">
      <div>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">UUID / ID</label>
        <p className="text-xs font-mono text-slate-900 truncate">{id}</p>
      </div>
      <div>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Contact</label>
        <p className="text-xs text-slate-600 truncate">{email}</p>
      </div>
    </div>
  </div>
);

const AccessToggle = ({ label, desc, active = false }: any) => (
  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
    <div>
      <h5 className="text-sm font-semibold text-slate-800">{label}</h5>
      <p className="text-[11px] text-slate-500">{desc}</p>
    </div>
    <div className={`w-10 h-6 rounded-full p-1 transition-colors cursor-pointer ${active ? 'bg-indigo-600' : 'bg-slate-300'}`}>
      <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${active ? 'translate-x-4' : ''}`}></div>
    </div>
  </div>
);

export default FamilyHub;
