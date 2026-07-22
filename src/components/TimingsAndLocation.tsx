import React from 'react';
import { SCHOOL_DETAILS } from '../data/schoolData';
import { MapPin, Phone, Mail, Navigation, ExternalLink, GraduationCap } from 'lucide-react';

export const TimingsAndLocation: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Campus Location & Contact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white">
            Visit St Anny High School, Murali Nagar
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Conveniently located in Murali Nagar, Visakhapatnam. Reach out to our administrative team or visit our campus.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-slate-800/80 rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">School Address & Landmark</h3>
                <p className="text-xs text-slate-400">{SCHOOL_DETAILS.fullAddress}</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=St+Anny+High+School+Murali+Nagar+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-xs shadow transition-all inline-flex items-center gap-1.5 shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              Directions in Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Map Canvas / Visual Card */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 aspect-[16/8] sm:aspect-[21/9] flex flex-col items-center justify-center p-6 text-center space-y-3 group">
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

            <div className="relative z-10 space-y-2 max-w-md">
              <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-900 mx-auto flex items-center justify-center shadow-lg font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-serif">{SCHOOL_DETAILS.name}</h4>
              <p className="text-xs text-slate-300">{SCHOOL_DETAILS.fullAddress}</p>
              <span className="inline-block text-[11px] text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Landmark: Murali Nagar Main Road, Visakhapatnam
              </span>
            </div>
          </div>

          {/* Direct Contact List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <a
              href={`tel:${SCHOOL_DETAILS.phone}`}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-amber-400/50 transition-colors flex items-center gap-3 text-slate-200"
            >
              <Phone className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">School Phone</span>
                <span className="font-bold text-sm text-white">{SCHOOL_DETAILS.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${SCHOOL_DETAILS.email}`}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-amber-400/50 transition-colors flex items-center gap-3 text-slate-200"
            >
              <Mail className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="truncate">
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Official Email</span>
                <span className="font-bold text-xs text-white truncate block">{SCHOOL_DETAILS.email}</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

