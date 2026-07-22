import React, { useState } from 'react';
import { SCHOOL_DETAILS } from '../data/schoolData';
import { GraduationCap, ShieldCheck, HeartHandshake, Users, Award, BookOpen, Clock, CheckCircle } from 'lucide-react';

export const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'whyUs' | 'governance'>('mission');

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            About St Anny High School
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900">
            A Premier Name in English Medium Education in Visakhapatnam
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Located in Murali Nagar, Visakhapatnam, St Anny High School has established a strong reputation for academic rigor and student care since 1996.
          </p>
        </div>

        {/* Tabbed Interactive Overview Card */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Navigation Bar */}
          <div className="flex border-b border-slate-200 bg-slate-100/70 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
                activeTab === 'mission'
                  ? 'border-blue-900 text-blue-900 bg-white shadow-sm'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              Overview & Academic Philosophy
            </button>
            <button
              onClick={() => setActiveTab('whyUs')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
                activeTab === 'whyUs'
                  ? 'border-blue-900 text-blue-900 bg-white shadow-sm'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Why Choose St Anny
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-6 py-4 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap flex items-center gap-2 border-b-2 ${
                activeTab === 'governance'
                  ? 'border-blue-900 text-blue-900 bg-white shadow-sm'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Users className="w-4 h-4 text-indigo-600" />
              Governance & Experienced Faculty
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {activeTab === 'mission' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                    Nurturing Environment for Every Student's Potential
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    St Anny High School in Murali Nagar, Visakhapatnam is a leading name in the education sector, offering a wide range of programs to cater to the diverse needs of its students. The school is dedicated to academic excellence and operates on a schedule that accommodates students' varied commitments.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    With a team of experienced educators, St Anny High School ensures that every student receives individual attention, guidance, and encouragement to excel academically, socially, and emotionally.
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                    <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-blue-900 shrink-0" />
                      <span>English Medium Academic Guidance</span>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-100 flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Safe Campus in Murali Nagar, Vizag</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-950 p-6 rounded-xl text-white space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-blue-800 pb-3">
                    <Award className="w-7 h-7 text-amber-400" />
                    <div>
                      <h4 className="font-serif font-bold text-lg text-amber-300">Key Facts At A Glance</h4>
                      <p className="text-xs text-slate-300">St Anny High School, Murali Nagar</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-200">
                    <li className="flex justify-between items-center py-1 border-b border-blue-800/60">
                      <span className="text-slate-300">Establishment Year</span>
                      <span className="font-bold text-amber-300">1996</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-blue-800/60">
                      <span className="text-slate-300">Parent Rating</span>
                      <span className="font-bold text-emerald-400">4.1 ★ (31 Reviews)</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-blue-800/60">
                      <span className="text-slate-300">Medium of Instruction</span>
                      <span className="font-bold text-white">English Medium</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-blue-800/60">
                      <span className="text-slate-300">School Levels</span>
                      <span className="font-bold text-white">Preschool to Class 10</span>
                    </li>
                    <li className="flex justify-between items-center py-1">
                      <span className="text-slate-300">Location</span>
                      <span className="font-bold text-white">Murali Nagar, Visakhapatnam</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'whyUs' && (
              <div className="space-y-6">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-serif font-bold text-slate-900">Why Parents Choose St Anny High School</h3>
                  <p className="text-xs sm:text-sm text-slate-600">With a comprehensive approach to education, St Anny High School ensures that every student receives the attention and support they need to excel.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">1</div>
                    <h4 className="font-bold text-slate-900 text-sm">Well-Rounded Curriculum</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Includes core academic subjects, creative arts, language labs, and physical education to foster global readiness.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">2</div>
                    <h4 className="font-bold text-slate-900 text-sm">Nurturing & Inclusive Campus</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Welcomes applications from students of diverse backgrounds, promoting equality, empathy, and cultural respect.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">3</div>
                    <h4 className="font-bold text-slate-900 text-sm">Dedicated Facilities</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">Equipped with a medical support facility, clean washrooms, science workstations, and sports grounds.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'governance' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-slate-900">Effective Governance & Experienced Faculty</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    St Anny High School ensures effective governance and a structured approach to academic and administrative functions. This diversity allows parents and students to choose the type of schooling that best suits their needs and preferences.
                  </p>
                  <div className="space-y-2 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Qualified Subject Specialists & Pedagogy Experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Transparent Administrative & Fee Structure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Regular Parent-Teacher Interaction & Progress Reports</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900 text-slate-100 space-y-3">
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Academic Support Office</h4>
                  <p className="text-xs text-slate-300">
                    Our administrative team is available on campus to assist with inquiries, student records, and campus tours.
                  </p>
                  <div className="pt-2 text-xs font-semibold text-amber-300 border-t border-slate-800">
                    Visit Admissions Office: Murali Nagar, Visakhapatnam
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
