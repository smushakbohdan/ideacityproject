import React, { useState } from 'react';
import { UserCheck, Building2, Check, ArrowRight, Clock, ShieldCheck, Database, MapPin, Sparkles, Calculator } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  // Interactive municipality ROI calculator
  const [population, setPopulation] = useState<number>(50000); // 50k citizens

  // Calculations:
  // Average annual reports per 10k population: ~1,200
  const estimatedAnnualReports = Math.round((population / 10000) * 1200);
  // ~45% of reports are duplicates without AI deduplication
  const duplicatesAvoided = Math.round(estimatedAnnualReports * 0.45);
  // Time saved per duplicate ticket: ~20 minutes of clerk handling & verification
  const hoursSavedAnnual = Math.round((duplicatesAvoided * 20) / 60);
  // Financial savings estimated at 22€/hour municipal employee cost
  const financialSavings = Math.round(hoursSavedAnnual * 22);

  return (
    <section id="audience" className="py-20 md:py-28 border-b border-slate-800 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            04. Cieľová skupina a hodnota
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Pre koho je Ideal City navrhnutý
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Obojstranná symbióza medzi angažovanými občanmi a moderným mestským úradom bez byrokratických bariér.
          </p>
        </div>

        {/* 2 Column Target Breakdown */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Pre obyvateľov */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider">Pre občanov &amp; komunity</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">Obyvatelia moderného mesta</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Žiadne zložité formuláre ani anonymné podateľne. Každý občan má v telefóne priamu linku na technické služby svojho mesta s okamžitou odozvou.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Nulová byrokracia</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Nahlásenie poruchy zaberie menej ako 30 sekúnd na 2 kliknutia. Nemusíte pátrať po kontaktoch ani vypisovať formálne listy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Transparentné sledovanie stavu</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Koniec čiernym dieram – vidíte presný priebeh: Prijaté &rarr; Zaradené do harmonogramu &rarr; V teréne &rarr; Úspešne opravené.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Sila susedskej komunity</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Podporte podnety susedov vo vašej štvrti jediným kliknutím. Čím viac hlasov problém má, tým rýchlejšie ho mesto opraví.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Dostupné priamo cez webový prehliadač</span>
              <span className="text-emerald-400 font-medium">Bez nutnosti inštalácie</span>
            </div>
          </div>

          {/* Card 2: Pre samosprávy */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-blue-400 font-mono font-semibold uppercase tracking-wider">Pre mestá &amp; obce</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">Miestne samosprávy a technické služby</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Namiesto stoviek neprehľadných emailov a telefonátov získava samospráva jednotný, automatizovaný a vyčistený dátový dispečing.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Čisté dáta bez emailového spamu</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      AI filtruje duplicity skôr, než dorazia k referentovi. 1 problém = 1 ticket s počítadlom občianskej podpory.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Objektívne stanovené priority</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Kombinácia závažnosti poškodenia z AI Computer Vision a občianskeho hlasovania určí presný denný plán výjazdov údržby.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Rýchly technický zásah s presným GPS</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Cestári a technici dostanú presné geolokačné súradnice na meter a fotodokumentáciu – žiadne blúdenie v teréne.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Integrácia cez REST API do existujúcich GIS systémov</span>
              <span className="text-blue-400 font-medium">Štátne a mestské štandardy</span>
            </div>
          </div>

        </div>

        {/* Interactive Calculator: Municipal Time & Budget Savings */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                Interaktívna kalkulačka úspor
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Koľko času a rozpočtu ušetrí Ideal City vášmu mestu?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Posuňte posuvník podľa veľkosti vášho mesta či mestskej časti a pozrite si okamžitú projekciu úspory vďaka eliminácii duplicitných ticketov.
              </p>

              <div className="mt-6">
                <div className="flex justify-between text-xs text-slate-300 mb-2">
                  <span>Veľkosť samosprávy (obyvatelia):</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm tabular-nums">
                    {population.toLocaleString('sk-SK')} obyvateľov
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="450000"
                  step="5000"
                  value={population}
                  onChange={(e) => setPopulation(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>5 000 (Menšia obec)</span>
                  <span>100 000 (Krajské mesto)</span>
                  <span>450 000 (Bratislava)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 mb-1">Odhad hlásení / rok</div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {estimatedAnnualReports.toLocaleString('sk-SK')}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">porúch a podnetov</div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-emerald-500/30 text-center">
                <div className="text-xs text-emerald-400 mb-1">Ušetrené duplicity</div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums">
                  -{duplicatesAvoided.toLocaleString('sk-SK')}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">spojených pod 1 ticket</div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 mb-1">Ušetrený čas úradu</div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {hoursSavedAnnual.toLocaleString('sk-SK')} hod.
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-1">
                  ≈ {financialSavings.toLocaleString('sk-SK')} € ročne
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
