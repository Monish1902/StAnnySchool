import React from 'react';
import { SCHOOL_DETAILS } from '../data/schoolData';
import { Star, ShieldCheck, Sparkles, CheckCircle2, Phone, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pb-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

      {/* Glow orb */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges row */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Est. 1996 • 28+ Years Legacy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Murali Nagar, Visakhapatnam
              </span>
              <a href="#reviews" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/30 transition-colors">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">4.1★</span> (31 Verified Reviews)
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] font-serif">
              St Anny High School <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                Murali Nagar, Visakhapatnam
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Providing holistic English medium education since 1996. We nurture academic rigor, moral integrity, creative arts, and physical well-being in a nurturing campus environment.
            </p>

            {/* Key feature checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto lg:mx-0 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Nursery to 5th: ICSE Syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>6th to 10th: State Syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% English Medium Instruction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Science & Computer Labs</span>
              </div>
            </div>

            {/* Contact Highlight Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={`tel:${SCHOOL_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-900" />
                <span>Contact School: {SCHOOL_DETAILS.phone}</span>
              </a>
              <a
                href="#location"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Campus Location: Murali Nagar</span>
              </a>
            </div>

          </div>

          {/* Right Column - Hero Visual Card (School Building Image) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-slate-700/50 to-slate-800/80 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
                <img
                  src={SCHOOL_DETAILS.heroImage}
                  alt="St Anny High School Building Campus in Murali Nagar Visakhapatnam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between text-left">
                  <div>
                    <h2 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Campus Overview</h2>
                    <p className="text-xs sm:text-sm font-semibold text-white">St Anny High School, Murali Nagar</p>
                    <p className="text-[11px] text-slate-300">Established 1996 • Visakhapatnam</p>
                  </div>
                  <div className="px-2.5 py-1 bg-amber-400 text-slate-900 rounded-lg text-xs font-bold shrink-0">
                    4.1 ★ Rated
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-800/60 rounded-2xl border border-slate-700/60 backdrop-blur-md text-center">
          <div className="p-2 space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">1996</p>
            <p className="text-xs text-slate-300 font-medium">Established Year</p>
            <p className="text-[11px] text-slate-400">28+ Years Legacy</p>
          </div>
          <div className="p-2 space-y-1 border-l border-slate-700/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">4.1 / 5 ★</p>
            <p className="text-xs text-slate-300 font-medium">Parent Rating</p>
            <p className="text-[11px] text-slate-400">31 Google Reviews</p>
          </div>
          <div className="p-2 space-y-1 border-l border-slate-700/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">English</p>
            <p className="text-xs text-slate-300 font-medium">Medium of Instruction</p>
            <p className="text-[11px] text-slate-400">Fluency & Comprehension</p>
          </div>
          <div className="p-2 space-y-1 border-l border-slate-700/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">Preschool - 10th</p>
            <p className="text-xs text-slate-300 font-medium">Levels of Schooling</p>
            <p className="text-[11px] text-slate-400">Nursery to High School</p>
          </div>
        </div>

      </div>
    </section>
  );
};

