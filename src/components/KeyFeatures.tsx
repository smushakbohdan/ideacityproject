import React from 'react';
import { Layers, Sparkles, Flame, ThumbsUp, Tag, Map, CheckCircle, Navigation, ShieldCheck } from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 border-b border-slate-800 bg-[#0D1527] relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            02. Kľúčové funkcie platformy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Umelá inteligencia, ktorá premieňa chaos na čisté zásahy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tri prepojené technológie v jednom riešení: od inteligentného rozpoznávania fotografií až po geolokačný dispečing pre mestské podniky.
          </p>
        </div>

        {/* Bento Grid: 3 Main Pillars */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Feature 1: AI Deduplikácia (Wide Hero Bento Card, col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border border-slate-800 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  <span>Geopriestorový algoritmus</span>
                  <span className="mx-2">·</span>
                  <span className="text-emerald-400 font-semibold">Deduplikácia</span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                AI Deduplikácia: &bdquo;1 záznam + 99 lajkov&ldquo;
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Automatické párovanie fotografie a presných GPS súradníc. Ak sa v okruhu 15 metrov už nachádza nahlásená porucha rovnakého typu, aplikácia okamžite vyzve občana pridať hlas, namiesto zakladania 100 duplicitných ticketov.
              </p>

              {/* Visual Interactive Preview of Deduplication */}
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-semibold text-white">Detekcia existujúceho podnetu v teréne</span>
                  <span className="text-emerald-400 font-mono">Vzdialenosť: 8 m</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3.5 rounded-lg bg-slate-900 border border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Hlboký výtlk na Špitálskej</div>
                      <div className="text-xs text-slate-400">Evidovaný podnet · 142 občanov podporilo</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <span className="text-xs text-emerald-400 font-medium">Spája sa do 1 záznamu</span>
                    <div className="px-3 py-1.5 rounded-md bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>+1 Hlas</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Výsledok pre úrad: Žiadna duplicitná pošta</span>
                  <span className="text-emerald-400 font-medium">Prioritizácia podľa záujmu komunity</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Technológia: Haversine GPS filter + ResNet embedding match</span>
              <span className="text-slate-300">Presnosť zhody 98.7 %</span>
            </div>
          </div>

          {/* Feature 2: AI Kategorizácia (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/90 border border-slate-800 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  <span>Computer Vision</span>
                  <span className="mx-2">·</span>
                  <span className="text-blue-400 font-semibold">Kategorizácia</span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                AI Kategorizácia
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Umelá inteligencia automaticky priradí presnú kategóriu priamo z odfoteného záberu a krátkej poznámky. Občan nemusí tápať v zozname 40 úradných kategórií.
              </p>

              {/* Tag Showcase (Clean unboxed metadata discipline) */}
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 space-y-3">
                <div className="text-xs font-semibold text-slate-400">Príklady automaticky rozpoznaných kategórií:</div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 px-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="font-semibold text-emerald-400">#Cesty</span>
                    <span className="text-slate-400">Výtlky, obrubníky, značenie</span>
                    <span className="text-slate-400 font-mono text-[11px]">99% istota</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="font-semibold text-amber-400">#Osvetlenie</span>
                    <span className="text-slate-400">Nefunkčné lampy, tmavé úseky</span>
                    <span className="text-slate-400 font-mono text-[11px]">97% istota</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="font-semibold text-blue-400">#Inklúzia</span>
                    <span className="text-slate-400">Rampy, bezbariérovosť, priechody</span>
                    <span className="text-slate-400 font-mono text-[11px]">95% istota</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="font-semibold text-teal-400">#Zeleň & #Čistota</span>
                    <span className="text-slate-400">Neorezané stromy, nelegálny odpad</span>
                    <span className="text-slate-400 font-mono text-[11px]">98% istota</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Priame smerovanie na zodpovedný referát</span>
              <span className="text-emerald-400 font-medium">0 chýb v triedení</span>
            </div>
          </div>

          {/* Feature 3: Hlasovanie a Heatmapa pre samosprávy (Full width bento card, col-span-12) */}
          <div className="lg:col-span-12 rounded-2xl bg-slate-900/90 border border-slate-800 p-7 sm:p-9 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    <span>Dispečing pre mestá</span>
                    <span className="mx-2">·</span>
                    <span className="text-orange-400 font-semibold">Tepelná mapa</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  Hlasovanie a Heatmapa pre samosprávy
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Občania neanonymne podporujú kritické problémy v ich bezprostrednom okolí. Vedenie mesta a technické služby vidia namiesto hádok na Facebooku čistú geopriestorovú heatmapu s jasne identifikovanými ohniskami a naliehavosťou opráv.
                </p>

                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Objektívna priorita:</strong> Zásahové vozidlo je vyslané do ulice s 150 hlasmi, nie tam, kto viac kričí na sociálnej sieti.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Optimalizácia trás technických služieb:</strong> Oprava 5 výtlkov v jednej ulici naraz namiesto chaotických prejazdov mestom.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Zodpovedné plánovanie rozpočtu:</strong> Presné historické dáta pre mestské zastupiteľstvo a investičné plány na ďalší rok.</span>
                  </div>
                </div>
              </div>

              {/* Mini Heatmap Visualization Showcase */}
              <div className="lg:col-span-6 rounded-xl bg-slate-950/90 border border-slate-800 p-5 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800 mb-4">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Map className="w-3.5 h-3.5 text-orange-400" />
                    Náhľad mestského geoportálu IDC
                  </span>
                  <span className="font-mono text-emerald-400">Aktívny režim dispečingu</span>
                </div>

                {/* Heatmap Graphic Representation */}
                <div className="relative h-48 sm:h-56 rounded-lg bg-[#0B1426] border border-slate-800 overflow-hidden flex items-center justify-center">
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Street mock paths */}
                  <svg className="absolute inset-0 w-full h-full stroke-slate-800/80 stroke-2" fill="none">
                    <line x1="10%" y1="30%" x2="90%" y2="30%" />
                    <line x1="20%" y1="75%" x2="85%" y2="75%" />
                    <line x1="45%" y1="10%" x2="45%" y2="90%" />
                    <line x1="75%" y1="15%" x2="75%" y2="85%" />
                  </svg>

                  {/* Heat clusters */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-red-500/25 rounded-full blur-xl animate-pulse" />
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-400/40 rounded-full blur-md" />
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-orange-500 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                  </div>

                  <div className="absolute bottom-6 left-1/4 w-20 h-20 bg-amber-500/20 rounded-full blur-lg" />
                  <div className="absolute top-6 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-lg" />

                  {/* Tooltip callout on the hot cluster */}
                  <div className="absolute top-1/4 left-1/2 translate-x-4 -translate-y-10 bg-slate-900/95 border border-slate-700 rounded-lg p-2 shadow-2xl text-[11px] whitespace-nowrap z-20">
                    <div className="font-semibold text-white">Špitálska ulica (Ohnisko #1)</div>
                    <div className="text-slate-400 mt-0.5">142 hlasov · Kritická priorita</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Vysoká hustota</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Stredná</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Vyriešené</span>
                  </div>
                  <span className="text-slate-400">Aktualizácia v reálnom čase</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
