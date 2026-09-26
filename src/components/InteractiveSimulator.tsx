import React, { useState } from 'react';
import { Camera, Sparkles, CheckCircle2, ThumbsUp, AlertCircle, RefreshCw, MapPin, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { SAMPLE_SCENARIOS, INITIAL_ISSUES } from '../data/mockData';
import { IssueCategory, MunicipalIssue } from '../types';

interface InteractiveSimulatorProps {
  onIssueAddedOrUpvoted?: (issueId: string) => void;
}

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({ onIssueAddedOrUpvoted }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [step, setStep] = useState<'idle' | 'analyzing' | 'duplicate_detected' | 'new_created' | 'upvoted'>('idle');
  const [currentUpvotes, setCurrentUpvotes] = useState(142);
  const [hasVoted, setHasVoted] = useState(false);

  const scenario = SAMPLE_SCENARIOS[selectedScenarioIndex];

  const handleStartSimulation = () => {
    setStep('analyzing');
    setHasVoted(false);

    setTimeout(() => {
      if (scenario.isDuplicate) {
        setStep('duplicate_detected');
      } else {
        setStep('new_created');
      }
    }, 1100);
  };

  const handleUpvoteExisting = () => {
    setCurrentUpvotes((prev) => prev + 1);
    setHasVoted(true);
    setStep('upvoted');
    if (onIssueAddedOrUpvoted && scenario.matchingIssueId) {
      onIssueAddedOrUpvoted(scenario.matchingIssueId);
    }
  };

  const handleReset = (newIndex: number) => {
    setSelectedScenarioIndex(newIndex);
    setStep('idle');
    setHasVoted(false);
    if (newIndex === 0) {
      setCurrentUpvotes(142);
    }
  };

  return (
    <section id="simulator" className="py-20 md:py-28 border-b border-slate-800 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            Interaktívny AI Simulátor
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Vyskúšajte nahlásenie poruchy na 2 kliknutia
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Zvoľte si testovací scenár a sledujte, ako neurónová sieť IDC overuje GPS polohu, fotografiu a eliminuje duplicity v priamom prenose.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Segmented Scenario Selector (Functional interactive tabs) */}
          <div className="p-4 sm:p-5 bg-slate-950/70 border-b border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-2.5">
              Vyberte testovací scenár z praxe:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SAMPLE_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => handleReset(idx)}
                  className={`text-left p-3 rounded-lg text-xs font-medium transition-all ${
                    selectedScenarioIndex === idx
                      ? 'bg-slate-800 text-white border border-emerald-500/50 shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-slate-200">{sc.category}</span>
                    {sc.isDuplicate ? (
                      <span className="text-[10px] text-amber-400 font-mono">Test deduplikácie</span>
                    ) : (
                      <span className="text-[10px] text-emerald-400 font-mono">Nový podnet</span>
                    )}
                  </div>
                  <div className="truncate text-slate-300">{sc.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Simulation Stage */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Simulated Smartphone / Camera preview */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-[280px] rounded-2xl bg-slate-950 border-2 border-slate-800 p-4 shadow-xl relative overflow-hidden">
                  
                  {/* Smartphone top speaker notch */}
                  <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-4" />

                  {/* Photo area */}
                  <div className="relative aspect-4/3 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col items-center justify-center text-center p-4">
                    {scenario.id === 'scenario-dup' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                          <Camera className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-white block">Výtlk na Špitálskej</span>
                        <span className="text-[10px] text-slate-400">GPS: 48.1478° N, 17.1165° E</span>
                      </div>
                    )}
                    {scenario.id === 'scenario-new' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-800 text-blue-400 flex items-center justify-center mx-auto mb-2">
                          <Camera className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-white block">Zlomená lavička</span>
                        <span className="text-[10px] text-slate-400">GPS: 48.1512° N, 17.1102° E</span>
                      </div>
                    )}
                    {scenario.id === 'scenario-light' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center mx-auto mb-2">
                          <Camera className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-white block">Nefunkčné svetlo pri škole</span>
                        <span className="text-[10px] text-slate-400">GPS: 48.1528° N, 17.1189° E</span>
                      </div>
                    )}

                    {step === 'analyzing' && (
                      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                        <Sparkles className="w-8 h-8 text-emerald-400 animate-spin mb-2" />
                        <span className="text-xs font-semibold text-white">AI analyzuje záber...</span>
                        <span className="text-[10px] text-slate-400 mt-1">Overovanie deduplikácie v okolí</span>
                      </div>
                    )}
                  </div>

                  {/* Simulated App Metadata */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Lokalita:</span>
                      <span className="text-white font-medium truncate max-w-[150px]">{scenario.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Kategória:</span>
                      <span className="text-emerald-400 font-semibold">#{scenario.category}</span>
                    </div>
                  </div>

                  {/* Action trigger button inside simulated phone */}
                  <div className="mt-5">
                    {step === 'idle' && (
                      <button
                        onClick={handleStartSimulation}
                        className="w-full py-2.5 px-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>1. Klik: Odfotiť & Overiť</span>
                      </button>
                    )}
                    {step === 'analyzing' && (
                      <button
                        disabled
                        className="w-full py-2.5 px-3 bg-slate-800 text-slate-400 text-xs font-medium rounded-lg cursor-wait flex items-center justify-center gap-2"
                      >
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Spracúvam...</span>
                      </button>
                    )}
                    {(step === 'duplicate_detected' || step === 'new_created' || step === 'upvoted') && (
                      <button
                        onClick={() => handleReset(selectedScenarioIndex)}
                        className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Spustiť znova</span>
                      </button>
                    )}
                  </div>

                </div>
              </div>

              {/* Right Column: AI Analysis Engine Output */}
              <div className="md:col-span-7 flex flex-col justify-center">
                
                {step === 'idle' && (
                  <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      Pripravené na analýzu
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Kliknite na &bdquo;1. Klik: Odfotiť &amp; Overiť&ldquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Sledujte, ako Ideal City v zlomku sekundy vypočíta Haversine vzdialenosť od iných nahlásení a pomocou Computer Vision zaradí problém do správnej kategórie.
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs text-slate-400">
                      <div>
                        <span className="block text-slate-500">Vybraný príklad:</span>
                        <span className="text-white font-medium">{scenario.title}</span>
                      </div>
                      <div>
                        <span className="block text-slate-500">Očakávaný výsledok:</span>
                        <span className={scenario.isDuplicate ? 'text-amber-400 font-medium' : 'text-emerald-400 font-medium'}>
                          {scenario.isDuplicate ? 'Zlúčenie s existujúcim ticketom' : 'Vytvorenie nového záznamu'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {step === 'analyzing' && (
                  <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-2 text-emerald-400 font-mono">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        AI Neural Pipeline beží...
                      </span>
                      <span className="font-mono tabular-nums">Krok 2/3</span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        &gt; Geolokácia: GPS fix zaznamenaný (± 2.1 m presnosť)
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        &gt; Visual Vector Embedding: Generovanie deskriptora scény...
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                        &gt; Databáza: Prehľadávanie okolitých ticketov v okruhu 50 m...
                      </div>
                    </div>
                  </div>
                )}

                {/* Outcome 1: DUPLICATE DETECTED -> UPVOTE CALLOUT */}
                {step === 'duplicate_detected' && (
                  <div className="p-6 rounded-xl bg-slate-950/80 border border-amber-500/40 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        AI Deduplikácia: Nájdený identický podnet!
                      </div>
                      <span className="font-mono text-xs text-amber-400/90 font-semibold">
                        Vzdialenosť len {scenario.distance} m
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Tento problém už nahlásil iný občan. Nezaťažujte úrad ďalším emailom!
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      AI detegovala zhodu fotografie a polohy s existujúcim ticketom <strong className="text-white">#idc-101</strong> (Hlboký výtlk na Špitálskej). Pridaním vášho hlasu posuniete tento podnet na vyššiu prioritu v mestskej heatmapovej mape.
                    </p>

                    {/* The 2nd click: UPVOTE */}
                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-slate-400">Aktuálna sila podnetu:</div>
                        <div className="text-lg font-bold text-white font-mono tabular-nums">
                          {currentUpvotes} hlasov občanov
                        </div>
                      </div>

                      <button
                        onClick={handleUpvoteExisting}
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>2. Klik: Podporiť podnet (+1)</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Princíp: &bdquo;1 záznam + 99 lajkov&ldquo;</span>
                      <span className="text-emerald-400 font-medium">Ušetrený ďalší spam na mestskom úrade</span>
                    </div>
                  </div>
                )}

                {/* Outcome 1b: UPVOTE SUCCESSFUL */}
                {step === 'upvoted' && (
                  <div className="p-6 rounded-xl bg-slate-950/80 border border-emerald-500/50 space-y-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Váš hlas bol úspešne pridaný! ({currentUpvotes} hlasov)
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Žiadna byrokracia, žiadny duplicitný email. Mestský dispečing v reálnom čase zaznamenal zvýšenie priority tohto bodu na Špitálskej ulici.
                      </p>
                    </div>

                    <div className="p-3 rounded bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                      <span>Stav podnetu: <strong>V riešení technických služieb</strong></span>
                      <span className="text-emerald-400 font-mono">Čas procesu: 28 sekúnd</span>
                    </div>
                  </div>
                )}

                {/* Outcome 2: BRAND NEW ISSUE CREATED */}
                {step === 'new_created' && (
                  <div className="p-6 rounded-xl bg-slate-950/80 border border-emerald-500/50 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      AI Overenie: Unikátny podnet
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Nový podnet bol okamžite zaradený a kategorizovaný
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      V okruhu 50 metrov nebol nájdený žiadny duplicitný záznam. AI automaticky priradila kategóriu <strong className="text-emerald-400">#{scenario.category}</strong> a odoslala štruktúrované dáta priamo na dispečing.
                    </p>

                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Vygenerované ID podnetu:</span>
                        <span className="font-mono text-white font-semibold">IDC-2026-904</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Zodpovedný referát:</span>
                        <span className="text-white">Útvar správy komunikácií a zelene</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Zaradenie do mestskej heatmapy:</span>
                        <span className="text-emerald-400 font-semibold">Aktívne (1 hlas)</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
