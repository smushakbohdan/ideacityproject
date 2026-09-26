import React, { useState } from 'react';
import { Map, ListFilter, Flame, ThumbsUp, MapPin, Eye, CheckCircle2, Clock, AlertTriangle, Layers } from 'lucide-react';
import { INITIAL_ISSUES } from '../data/mockData';
import { IssueCategory, MunicipalIssue } from '../types';

export const MunicipalHeatmap: React.FC = () => {
  const [issues, setIssues] = useState<MunicipalIssue[]>(INITIAL_ISSUES);
  const [activeCategory, setActiveCategory] = useState<string>('Všetky');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedIssue, setSelectedIssue] = useState<MunicipalIssue>(INITIAL_ISSUES[0]);

  const categories = ['Všetky', 'Cesty', 'Osvetlenie', 'Inklúzia', 'Zeleň', 'Čistota'];

  const filteredIssues = activeCategory === 'Všetky'
    ? issues
    : issues.filter((i) => i.category === activeCategory);

  const handleUpvote = (issueId: string) => {
    setIssues((prev) =>
      prev.map((item) => {
        if (item.id === issueId) {
          const hasVoted = item.hasUserUpvoted;
          const updated = {
            ...item,
            upvotes: hasVoted ? item.upvotes - 1 : item.upvotes + 1,
            hasUserUpvoted: !hasVoted,
          };
          if (selectedIssue.id === issueId) {
            setSelectedIssue(updated);
          }
          return updated;
        }
        return item;
      })
    );
  };

  return (
    <section id="heatmap" className="py-20 md:py-28 border-b border-slate-800 bg-[#0D1527] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              03. Dispečing pre samosprávy
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Tepelná mapa a prioritizácia opráv
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Mestá a technické služby vidia presnú koncentráciu porúch. Zásahy sa plánujú na základe reálnych hlasov obyvateľov a hustoty hlásení.
            </p>
          </div>

          {/* View Mode Segmented Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'map' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Tepelná mapa</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Zoznam priorít</span>
            </button>
          </div>
        </div>

        {/* Filter categories (Segmented controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'Všetky' ? 'Všetky kategórie' : `#${cat}`}
            </button>
          ))}
          <div className="ml-auto text-xs text-slate-400 hidden sm:block">
            Zobrazených <span className="text-white font-mono font-semibold">{filteredIssues.length}</span> podnetov
          </div>
        </div>

        {/* Main Heatmap / Dashboard Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
          
          {/* Main Visual Display (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {viewMode === 'map' ? (
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl bg-[#090f1d] border border-slate-800/90 overflow-hidden flex items-center justify-center">
                
                {/* SVG Urban Grid Map */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Simulated Street Arteries */}
                <svg className="absolute inset-0 w-full h-full stroke-slate-800/70 stroke-[2.5]" fill="none">
                  {/* Danube River curve */}
                  <path d="M 0,420 Q 250,380 500,430 T 1000,400" stroke="#0369a1" strokeWidth="18" opacity="0.25" />
                  {/* Main roads */}
                  <line x1="5%" y1="20%" x2="95%" y2="20%" />
                  <line x1="10%" y1="50%" x2="90%" y2="50%" />
                  <line x1="15%" y1="80%" x2="85%" y2="80%" />
                  <line x1="30%" y1="5%" x2="30%" y2="95%" />
                  <line x1="60%" y1="5%" x2="60%" y2="95%" />
                  <line x1="80%" y1="10%" x2="80%" y2="90%" />
                </svg>

                {/* Street Name Labels */}
                <span className="absolute top-[17%] left-[32%] text-[10px] text-slate-400 font-mono select-none">Špitálska ulica</span>
                <span className="absolute top-[47%] left-[12%] text-[10px] text-slate-400 font-mono select-none">Námestie SNP</span>
                <span className="absolute top-[77%] left-[62%] text-[10px] text-slate-400 font-mono select-none">Dunajská ulica</span>

                {/* Heatmap Glow Layers */}
                {/* Hotspot #1: Špitálska (Highest intensity) */}
                <div className="absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-red-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-orange-500/35 rounded-full blur-lg pointer-events-none" />

                {/* Hotspot #2: Námestie SNP */}
                <div className="absolute top-[52%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

                {/* Hotspot #3: Obchodná */}
                <div className="absolute top-[35%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-emerald-500/15 rounded-full blur-lg pointer-events-none" />

                {/* Interactive Pins on Map */}
                {filteredIssues.map((item, index) => {
                  const isSelected = selectedIssue.id === item.id;
                  // Preset coordinates for realistic visual distribution
                  const pinPositions = [
                    { top: '28%', left: '45%' }, // idc-101
                    { top: '52%', left: '25%' }, // idc-102
                    { top: '35%', left: '70%' }, // idc-103
                    { top: '15%', left: '75%' }, // idc-104
                    { top: '78%', left: '65%' }, // idc-105
                    { top: '48%', left: '55%' }, // idc-106
                  ];
                  const pos = pinPositions[index % pinPositions.length];

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIssue(item)}
                      style={{ top: pos.top, left: pos.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                      }`}
                      title={`${item.title} (${item.upvotes} hlasov)`}
                    >
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-all ${
                            isSelected
                              ? 'bg-emerald-400 text-slate-950 ring-4 ring-emerald-400/30'
                              : item.severity === 'Kritická'
                              ? 'bg-red-500 text-white ring-2 ring-red-400/20'
                              : 'bg-slate-800 text-slate-200 border border-slate-700'
                          }`}
                        >
                          <Flame className="w-3.5 h-3.5" />
                        </div>
                        
                        {/* Compact label */}
                        <div className="mt-1 px-1.5 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-slate-300 whitespace-nowrap shadow-md">
                          {item.upvotes} hlasov
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Map Legend Overlay */}
                <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 rounded-lg p-2.5 text-[11px] space-y-1 backdrop-blur-sm z-10">
                  <div className="font-semibold text-white">Intenzita nahlásení</div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span>Kritické ohnisko (&gt; 100 hlasov)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span>Stredná naliehavosť</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>V procese riešenia</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                  GPS: 48.1486° N, 17.1077° E (Bratislava centrum)
                </div>
              </div>
            ) : (
              /* List Mode */
              <div className="space-y-3 h-[380px] sm:h-[460px] overflow-y-auto pr-1">
                {filteredIssues.map((item) => {
                  const isSelected = selectedIssue.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedIssue(item)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-slate-900 border-emerald-500/50 shadow-md'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-sm text-emerald-400 shrink-0">
                          {item.upvotes}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="text-emerald-400 font-semibold">#{item.category}</span>
                            <span>·</span>
                            <span>{item.location}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-white mt-0.5">{item.title}</h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded border ${
                          item.status === 'Opravené'
                            ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/40'
                            : item.status === 'V riešení'
                            ? 'bg-blue-950/50 text-blue-400 border-blue-800/40'
                            : 'bg-amber-950/50 text-amber-400 border-amber-800/40'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Selected Issue Inspector Panel (4 cols) */}
          <div className="lg:col-span-4 rounded-xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 mb-4">
                <span className="font-semibold text-white">Detail vybraného podnetu</span>
                <span className="font-mono text-emerald-400">{selectedIssue.id}</span>
              </div>

              <div className="text-xs text-emerald-400 font-semibold mb-1">
                #{selectedIssue.category} · {selectedIssue.reportedAt}
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {selectedIssue.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedIssue.description}
              </p>

              {/* Data points */}
              <div className="space-y-2.5 text-xs border-t border-slate-800/80 pt-3">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    Lokalita:
                  </span>
                  <span className="text-white font-medium truncate max-w-[170px]">{selectedIssue.location}</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>GPS súradnice:</span>
                  <span className="font-mono text-slate-300">{selectedIssue.coordinates.lat}, {selectedIssue.coordinates.lng}</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>Ušetrené duplicity:</span>
                  <span className="font-mono text-emerald-400 font-bold">+{selectedIssue.duplicateReportsAvoided} emailov</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>Stav zásahu:</span>
                  <span className="font-medium text-white">{selectedIssue.status}</span>
                </div>
              </div>
            </div>

            {/* Upvote button directly inside dashboard */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => handleUpvote(selectedIssue.id)}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  selectedIssue.hasUserUpvoted
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>
                  {selectedIssue.hasUserUpvoted
                    ? `Podporené (${selectedIssue.upvotes} hlasov)`
                    : `Podporiť túto opravu (${selectedIssue.upvotes})`}
                </span>
              </button>
              <div className="mt-2 text-center text-[10px] text-slate-400">
                1 kliknutie občanom namiesto zakladania nového duplicitného ticketu
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
