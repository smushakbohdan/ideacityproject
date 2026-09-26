import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text wordmark */}
        <a href="#" className="font-display text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap">
          Ideal City <span className="text-emerald-400 font-sans text-xs font-semibold uppercase tracking-wider ml-1">IDC</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#problem" className="hover:text-white transition-colors">
            Problém
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Funkcie & AI
          </a>
          <a href="#simulator" className="hover:text-white transition-colors">
            AI Simulátor
          </a>
          <a href="#heatmap" className="hover:text-white transition-colors">
            Heatmapa mesta
          </a>
          <a href="#audience" className="hover:text-white transition-colors">
            Pre koho
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSimulator}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span>Vyskúšať podnet</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Prepnúť menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0F172A] px-6 py-4 space-y-3">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-emerald-400"
          >
            Problém a analytika
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-emerald-400"
          >
            Funkcie a AI
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-emerald-400"
          >
            Interaktívny AI Simulátor
          </a>
          <a
            href="#heatmap"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-emerald-400"
          >
            Heatmapa samosprávy
          </a>
          <a
            href="#audience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-emerald-400"
          >
            Cieľová skupina
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors"
            >
              Vyskúšať podnet na 2 kliky
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
