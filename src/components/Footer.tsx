import React from 'react';
import { Sparkles, MapPin, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080d19] border-t border-slate-800 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand & Academic Note */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Ideal City <span className="text-emerald-400 text-xs font-sans font-semibold uppercase tracking-wider ml-1">IDC</span>
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400 max-w-md leading-relaxed">
              Študentský inovačný projekt pre súťaž Smart City technológií. Webová platforma, čo mení sťažnosti na reálne opravy na 2 kliky.
            </p>
          </div>

          {/* Clean Navigation Mirror */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-medium text-slate-300">
            <a href="#problem" className="hover:text-emerald-400 transition-colors">
              Problém &amp; Analytika
            </a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">
              Funkcie &amp; AI
            </a>
            <a href="#simulator" className="hover:text-emerald-400 transition-colors">
              AI Simulátor
            </a>
            <a href="#heatmap" className="hover:text-emerald-400 transition-colors">
              Heatmapa samosprávy
            </a>
            <a href="#audience" className="hover:text-emerald-400 transition-colors">
              Cieľová skupina
            </a>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Univerzitný inovačný projekt · Pripravené pre hodnotiacu komisiu</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Slovenská republika</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">© 2026 Ideal City (IDC)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
