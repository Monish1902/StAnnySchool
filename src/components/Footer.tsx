import React from 'react';
import { SCHOOL_DETAILS } from '../data/schoolData';
import { GraduationCap, MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Top Banner */}
      <div className="bg-blue-950/80 border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">St Anny High School • Visakhapatnam</span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Quality English Medium Education Since 1996
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Preschool, Nursery, Kindergarten, Primary & High School in Murali Nagar, Visakhapatnam.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SCHOOL_DETAILS.phone}`}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-xs transition-colors shadow-xs inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-slate-900" />
              Call {SCHOOL_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2 - Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-900 text-amber-400 flex items-center justify-center font-bold border border-amber-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-white">St Anny High School</h4>
                <p className="text-[11px] text-slate-400">Murali Nagar, Visakhapatnam • Est. 1996</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed pr-4">
              St Anny High School in Murali Nagar, Visakhapatnam is a leading educational institution dedicated to academic excellence, moral integrity, English medium fluency, and student well-being.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-400">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4].map(i => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <Star className="w-4 h-4 fill-amber-400/30 text-amber-400" />
              </div>
              <span className="font-bold text-slate-200">4.1 / 5 Stars</span>
              <span>(31 Verified Parent Reviews)</span>
            </div>
          </div>

          {/* Col 3 - Schooling Levels */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-300 uppercase tracking-wider">Schooling Levels</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#curriculum" className="hover:text-white transition-colors">• Preschool & Playgroup</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">• Nursery & Kindergarten (LKG / UKG)</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">• Primary School (Class 1 - 5)</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">• Middle School (Class 6 - 8)</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">• High School (Class 9 & 10)</a></li>
            </ul>
          </div>

          {/* Col 4 - Facilities & Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-300 uppercase tracking-wider">Campus Facilities</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#facilities" className="hover:text-white transition-colors">• Medical Support Facility</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">• Clean Sanitation & Washrooms</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">• Science & Computer Labs</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">• Sports Arena & Playgrounds</a></li>
            </ul>
          </div>

          {/* Col 5 - Contact Info */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-300 uppercase tracking-wider">Contact Details</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Murali Nagar, Visakhapatnam, Andhra Pradesh 530007</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SCHOOL_DETAILS.phone}`} className="hover:text-white font-bold">{SCHOOL_DETAILS.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SCHOOL_DETAILS.email}`} className="hover:text-white truncate">{SCHOOL_DETAILS.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© 1996 - {new Date().getFullYear()} St Anny High School, Murali Nagar, Visakhapatnam. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>English Medium Education</span>
            <span>•</span>
            <span>Murali Nagar, Visakhapatnam</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

