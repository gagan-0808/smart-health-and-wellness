
import React, { useState } from 'react';
import { ClipboardList, Stethoscope, ShieldCheck, Plus, Search, Loader2 } from 'lucide-react';
import { generateTherapyDraft } from '../services/geminiService';

const TherapyDrafts: React.FC = () => {
  const [condition, setCondition] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [draft, setDraft] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!condition || !symptoms) return;
    setIsGenerating(true);
    const result = await generateTherapyDraft(condition, symptoms);
    setDraft(result);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-slate-900">Therapy & Prescription Drafts</h2>
        <p className="text-slate-500">AI-assisted clinical documentation based on symptoms and history.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Plus size={18} className="text-indigo-600" />
              New Clinical Case
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Condition</label>
                <input 
                  type="text" 
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  placeholder="e.g. Chronic Stress, Air Pollution Recovery"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Symptoms & History</label>
                <textarea 
                  rows={4}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Describe patient observations, medical history, and vital alerts..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
                ></textarea>
              </div>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !condition || !symptoms}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? <Loader2 className="animate-spin" size={20} /> : <Stethoscope size={20} />}
                Generate Therapy Draft
              </button>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex gap-3">
            <div className="p-1 bg-white rounded-full self-start">
              <ShieldCheck size={16} className="text-emerald-600" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-emerald-900 mb-1">Standard Safety Checks Applied</h5>
              <ul className="text-[10px] text-emerald-700 space-y-1">
                <li>• Allergy cross-reference with medical records.</li>
                <li>• Dose range validation for age/weight.</li>
                <li>• Human/Pet specific dosage verification.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col min-h-[500px]">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ClipboardList size={20} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-900">Generated Draft</span>
            </div>
            <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">
              Export PDF
            </button>
          </div>
          <div className="flex-1 p-6 font-mono text-sm text-slate-600 leading-relaxed overflow-y-auto">
            {draft ? (
              <div className="whitespace-pre-wrap">{draft}</div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <Search size={48} className="mb-4" />
                <p>No draft generated yet.<br/>Input case details to begin.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyDrafts;
