
import React from 'react';
import { VocabularyItem } from '../types';

interface WordCardProps {
  item: VocabularyItem;
  index: number;
}

const WordCard: React.FC<WordCardProps> = ({ item, index }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 transition-all hover:shadow-xl hover:border-indigo-100 group">
      {/* 0. Header Info */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
        <span className="text-stone-300 font-bold text-5xl tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">
          {index.toString().padStart(2, '0')}
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight serif-font">
          {item.word}
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-2xl text-slate-400 font-medium mono-font">{item.phonetic}</span>
          <span className="text-lg font-bold text-indigo-600 italic px-3 py-1 bg-indigo-50 rounded-lg">{item.pos}</span>
        </div>
      </div>

      {/* Primary Meaning */}
      <div className="mb-8">
        <p className="text-3xl font-semibold text-slate-800 border-l-4 border-indigo-500 pl-4 py-1 leading-snug">
          {item.meaning}
        </p>
      </div>

      {/* 1. Morphology (词形变化) - NOW FIRST */}
      {item.morphology && (
        <div className="mb-8 p-6 bg-stone-50 rounded-2xl border border-stone-200">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Morphology / Word Formation</h4>
          <div className="flex flex-wrap gap-8">
            {item.morphology.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className={`text-2xl font-bold ${m.color}`}>{m.derived}</span>
                <span className="text-sm text-slate-400 capitalize">{m.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Usages (用法) - NOW SECOND */}
      {item.usages && item.usages.length > 0 && (
        <div className="mb-10">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Key Usages</h4>
          <div className="flex flex-wrap gap-3">
            {item.usages.map((usage, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl text-xl font-bold hover:bg-slate-200 transition-colors border border-slate-200/50">
                {usage}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Quiz / Meaning Guessing */}
      {item.quiz && (
        <div className="mb-10 p-8 bg-amber-50 rounded-3xl border border-amber-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 bg-amber-200 rounded-full text-amber-700 font-bold">?</span>
            <h4 className="text-lg font-bold text-amber-900">{item.quiz.question}</h4>
          </div>
          <div className="space-y-3">
            {item.quiz.options.map((opt, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <span className="font-bold text-amber-600">{i + 1}.</span>
                <div className="flex-1">
                  <p className="text-slate-800 font-medium italic mb-1 text-lg leading-relaxed">{opt.label}</p>
                  <details className="cursor-pointer group">
                    <summary className="text-sm text-amber-600 font-bold hover:underline list-none select-none">Click to check answer</summary>
                    <p className="mt-2 text-slate-700 bg-amber-100/50 p-2 rounded border border-amber-200">
                      Meaning: <span className="font-bold text-slate-900">{opt.meaning}</span>
                    </p>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Examples (例句) - NOW THIRD & NO TRANSLATION */}
      <div className="space-y-6">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Contextual Examples</h4>
        {item.examples.map((ex, idx) => (
          <div key={idx} className="relative bg-slate-50/30 p-4 rounded-xl">
            <div className="text-2xl leading-relaxed serif-font text-slate-700 italic">
              {ex.sentence.split(' ').map((word, wIdx) => {
                const cleanWord = word.replace(/[*,.;:?]/g, '');
                const isHighlight = ex.focusPhrases.some(phrase => phrase.includes(cleanWord));
                const isBold = word.startsWith('**') && word.endsWith('**');
                const displayWord = word.replace(/\*/g, '');
                
                return (
                  <span key={wIdx} className={`${isHighlight ? "font-black not-italic text-indigo-600 border-b-2 border-indigo-200" : ""} ${isBold ? "font-bold text-slate-900" : ""}`}>
                    {displayWord}{' '}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Extra Notes */}
      {item.extraNotes && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path></svg>
            <span className="italic font-medium">{item.extraNotes}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WordCard;
