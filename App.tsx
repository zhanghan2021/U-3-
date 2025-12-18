
import React, { useState, useMemo } from 'react';
import { vocabularyList } from './data/vocabData';
import { VocabularyItem } from './types';
import WordCard from './components/WordCard';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'quiz'>('all');

  const filteredList = useMemo(() => {
    return vocabularyList.filter(item => 
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.includes(searchTerm)
    );
  }, [searchTerm]);

  const quizItems = useMemo(() => {
    return vocabularyList.filter(item => item.quiz);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 px-4 md:px-0">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200 py-6 mb-12 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight serif-font mb-1">
              Vocab<span className="text-indigo-600">Master</span>
            </h1>
            <p className="text-slate-500 text-sm">Sophomore English Vocabulary • Premium Edition</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search words..."
                className="w-full md:w-64 px-4 py-2 bg-stone-100 border border-transparent focus:bg-white focus:border-indigo-500 rounded-full text-sm outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <nav className="flex bg-stone-100 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Words
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${activeTab === 'quiz' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Quizzes
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl space-y-12">
        {activeTab === 'all' ? (
          filteredList.length > 0 ? (
            filteredList.map((item, index) => (
              <WordCard key={item.id} item={item} index={index + 1} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400">No words found for "{searchTerm}"</p>
            </div>
          )
        ) : (
          quizItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">Interactive Quiz</span>
                <h3 className="text-2xl font-bold text-slate-800">{item.word}</h3>
              </div>
              <p className="text-xl text-slate-700 mb-8 font-medium">{item.quiz?.question}</p>
              <div className="grid gap-4">
                {item.quiz?.options.map((opt, i) => (
                  <div key={i} className="group p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all cursor-pointer">
                    <p className="text-lg font-medium text-slate-800 mb-2 italic">"{opt.label}"</p>
                    <p className="text-slate-500 group-hover:text-indigo-600 transition-colors">Meaning: <span className="font-bold">{opt.meaning}</span></p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </main>

      {/* Footer / Contact */}
      <footer className="mt-20 py-10 text-center text-slate-400 text-sm border-t border-slate-200 w-full max-w-4xl">
        <p>&copy; 2024 VocabMaster Education. Crafted for Gaokao Success.</p>
      </footer>
    </div>
  );
};

export default App;
