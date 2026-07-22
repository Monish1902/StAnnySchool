import React, { useState } from 'react';
import { SCHOOL_FACILITIES } from '../data/schoolData';
import { Facility } from '../types';
import { Building2, BookMarked, HeartPulse, Microscope, Trophy, Check, Sparkles, Image as ImageIcon } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Medical', 'Infrastructure', 'Co-Curricular'];

  const filteredFacilities = selectedCategory === 'All'
    ? SCHOOL_FACILITIES
    : SCHOOL_FACILITIES.filter(f => f.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookMarked': return <BookMarked className="w-6 h-6 text-blue-900" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-purple-600" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-600" />;
      default: return <Building2 className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background graphic accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            State-of-the-Art Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white">
            Campus Facilities & Learning Spaces
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            The campus of St Anny High School is equipped with modern facilities designed to support both academic excellence and holistic student well-being.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-900 shadow-md font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facility Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Image if available */}
                {fac.image ? (
                  <div className="relative overflow-hidden rounded-xl aspect-[16/9] border border-slate-700 mb-2">
                    <img
                      src={fac.image}
                      alt={fac.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-bold text-amber-300 backdrop-blur-xs flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      Featured Campus Facility
                    </div>
                  </div>
                ) : null}

                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-amber-400/40 transition-colors">
                    {getIcon(fac.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {fac.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-2 space-y-1.5 border-t border-slate-700/60">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Highlights</span>
                  {fac.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>St Anny Campus • Visakhapatnam</span>
                <span className="text-amber-400 font-medium">Maintained Daily</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
