import React from 'react';
import { AlertTriangle, Clock, Mail, MessageSquareOff, FileText, CheckCircle2, Zap, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export const ProblemComparison: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 border-b border-slate-800 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            01. Analytika súčasnosti
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Prečo dnešné mestské systémy zlyhávajú
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Mestá a obce ročne premrhajú tisíce pracovných hodín kvôli zastaraným komunikačným kanálom. Občania sú frustrovaní z ignorácie a samosprávy sa topia v chaotických sťažnostiach.
          </p>
        </div>

        {/* 5 Core Failures Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Reaktívna údržba
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Mesto rieši výtlk či nebezpečnú vetvu až po dopravnej nehode alebo zranení chodca. Chýba proaktívne mapovanie rizikových zón v reálnom čase.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
              Následok: Drahé havarijné opravy
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Pomalá úradnícka byrokracia
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Podnet putuje z podateľne na referát dopravy, potom správcovi komunikácií a externému dodávateľovi. Schvaľovanie trvá týždne bez informovania občana.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
              Následok: Priemerná reakčná doba 24 dní
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Občania odmietajú písať emaily
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hľadať správnu emailovú adresu úradu, formulovať formálnu žiadosť a manuálne opisovať polohu odradí 92 % bežných obyvateľov na ulici.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
              Následok: Väčšina porúch zostane nepovšimnutá
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <MessageSquareOff className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Sťažnosti miznú v šume sietí
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rozhorčení obyvatelia fotia problémy do Facebook skupín. Tieto príspevky úradníci neevidujú, chýbajú im GPS dáta a vzniká len toxická atmosféra.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
              Následok: 0 % prepojenie na technické služby
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Samosprávy zavalené duplicitným spamom
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Keď sa objaví veľký výtlk na hlavnom ťahu, 50 rôznych občanov pošle 50 samostatných správ s rôznym popisom tej istej jamy. Úradníci trávia hodiny čítaním, otváraním a manuálnym zoraďovaním toho istého problému, namiesto toho, aby vyslali cestárov.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Riešenie v IDC: Automatické spájanie duplicitných hlásení pod jeden ticket s počítadlom hlasov</span>
              <span className="text-emerald-400 font-medium">Úspora až 85 % času</span>
            </div>
          </div>

        </div>

        {/* Head-to-Head Comparison: Traditional vs. Ideal City */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Priame porovnanie: Tradičný postup vs. Ideal City
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Pozrite sa, ako moderná technológia skracuje proces z 15 minút na 30 sekúnd.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Traditional Method */}
            <div className="rounded-2xl bg-slate-950/70 border border-red-950/60 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-2xl rounded-full" />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Starý spôsob</span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Tradičné nahlasovanie porúch</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-2xl font-bold text-red-400 tabular-nums">~15 minút</span>
                    <div className="text-[11px] text-slate-500">priemerný čas</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400 text-xs font-mono shrink-0 mt-0.5">1</div>
                    <p className="text-sm text-slate-300">
                      Hľadanie správneho kontaktu na webe magistrátu alebo mestskej časti (referát dopravy? správa zelene?).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400 text-xs font-mono shrink-0 mt-0.5">2</div>
                    <p className="text-sm text-slate-300">
                      Formulovanie formálneho emailu so siahodlhým vysvetľovaním a pokusom opísať, pri ktorom strome jama leží.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400 text-xs font-mono shrink-0 mt-0.5">3</div>
                    <p className="text-sm text-slate-300">
                      Manuálne hľadanie GPS súradníc v mapovej aplikácii alebo komplikované zadávanie katastrálneho čísla.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400 text-xs font-mono shrink-0 mt-0.5">4</div>
                    <p className="text-sm text-slate-300">
                      Týždne v neistote bez spätnej väzby, či bol email vôbec doručený a zaevidovaný do plánu opráv.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span>Výsledok: Frustrácia občana aj úradníka</span>
                <span className="text-red-400 font-medium">Vysoká chybovosť</span>
              </div>
            </div>

            {/* Ideal City Method */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-emerald-950/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full" />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Inovácia IDC</span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Riešenie Ideal City</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-2xl font-bold text-emerald-400 tabular-nums">~30 sekúnd</span>
                    <div className="text-[11px] text-emerald-400/80">len 2 kliknutia</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xs font-mono shrink-0 mt-0.5">1</div>
                    <p className="text-sm text-slate-200">
                      <strong className="text-white">Otvorenie webovej appky a odfotenie:</strong> Žiadne sťahovanie zložitého softvéru, okamžitý prístup z mobilu.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xs font-mono shrink-0 mt-0.5">2</div>
                    <p className="text-sm text-slate-200">
                      <strong className="text-white">Automatické GPS & AI kategória:</strong> Systém sám zaznamená presnú polohu na meter a priradí kategóriu (#Cesty, #Osvetlenie).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xs font-mono shrink-0 mt-0.5">3</div>
                    <p className="text-sm text-slate-200">
                      <strong className="text-white">AI deduplikácia:</strong> Ak už sused jamu odfotil, stačí jedným klikom pridať hlas. Vzniká 1 ticket s vysokou prioritou.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xs font-mono shrink-0 mt-0.5">4</div>
                    <p className="text-sm text-slate-200">
                      <strong className="text-white">Okamžitá vizualizácia v heatmapách:</strong> Zásahový tím mesta presne vie, kam vyraziť s potrebnou technikou.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  30x rýchlejšie nahlásenie
                </span>
                <span className="text-emerald-400 font-semibold">100 % transparentnosť</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
