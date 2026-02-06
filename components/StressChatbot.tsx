
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Wind, Brain, Info } from 'lucide-react';
import { getStressAdvice } from '../services/geminiService';
import { Message } from '../types';

const StressChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your Health Paw stress assistant. How are you feeling today? We can practice some breathing or walk through a CBT exercise if you're feeling overwhelmed." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getStressAdvice([...messages, userMessage]);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Stress Care Chatbot</h2>
          <p className="text-slate-500">Personalized mental health support with CBT & Breathing tools.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-100">
            <Wind size={14} /> Breathing
          </div>
          <div className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-100">
            <Brain size={14} /> CBT
          </div>
        </div>
      </header>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none animate-pulse flex gap-2 items-center">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tell me how you're feeling..."
              className="flex-1 px-3 py-2 outline-none text-sm text-slate-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            <Sparkles size={10} /> AI Enhanced Stress Recovery
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex gap-3">
        <div className="p-1 bg-white rounded-full self-start">
          <Info size={16} className="text-indigo-600" />
        </div>
        <p className="text-xs text-indigo-800 leading-normal">
          <strong>Tip:</strong> Slow, controlled breathing directly tells the brain that it is safe to relax. Try inhaling for 4 seconds, holding for 4, and exhaling for 6.
        </p>
      </div>
    </div>
  );
};

export default StressChatbot;
