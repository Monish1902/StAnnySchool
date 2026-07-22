import React, { useState } from 'react';
import { SCHOOL_LEVELS } from '../data/schoolData';
import { LevelInfo } from '../types';
import { GraduationCap, BookOpen, Sparkles, Award, Baby, CheckCircle2, Globe, ChevronRight, X } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<LevelInfo | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby': return <Baby className="w-6 h-6 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'Award': return <Award className="w-6 h-6 text-rose-600" />;
      default: return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="curriculum" className="py-16 sm:py-20 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            Curriculum & Medium of Instruction
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900">
            English Medium Academic Education
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            At St Anny High School, we ensure a well-rounded English medium education that includes academic subjects, arts, and physical education. The curriculum is designed to prepare students for future academic and professional endeavors.
          </p>
        </div>

        {/* Medium of Instruction Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider">
              100% English Medium
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-amber-300">
              English Medium Academic Framework
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Ensuring fluency in English communication, critical scientific reasoning, and mathematical competency to build confidence for secondary school milestones.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="px-4 py-2 bg-slate-800/80 rounded-xl border border-slate-700 text-center">
              <span className="block text-xl font-serif font-extrabold text-amber-400">Preschool</span>
              <span className="text-[10px] text-slate-400">Foundation Stage</span>
            </div>
            <span className="text-slate-500 font-bold">→</span>
            <div className="px-4 py-2 bg-slate-800/80 rounded-xl border border-slate-700 text-center">
              <span className="block text-xl font-serif font-extrabold text-amber-400">High School</span>
              <span className="text-[10px] text-slate-400">Class 10 Board</span>
            </div>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Levels of Schooling at St Anny</h3>
              <p className="text-xs text-slate-500">Click any card to explore syllabus subjects & key highlights</p>
            </div>
            <span className="hidden sm:inline-flex text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              5 Academic Tiers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOL_LEVELS.map((level) => (
              <div
                key={level.id}
                onClick={() => setSelectedLevel(level)}
                className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-200 group-hover:scale-110 transition-transform">
                      {getIcon(level.icon)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded-full">
                      {level.ageGroup}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">{level.grades}</span>
                    <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {level.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                      {level.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {level.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-800">
                  <span>View Full Curriculum</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Curriculum Modal */}
      {selectedLevel && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLevel(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  {getIcon(selectedLevel.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">{selectedLevel.grades} ({selectedLevel.ageGroup})</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">{selectedLevel.name}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {selectedLevel.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Key Academic Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedLevel.highlights.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs font-medium text-emerald-950 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Syllabus & Learning Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLevel.curriculum.map((subj, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200">
                      • {subj}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedLevel(null)}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
