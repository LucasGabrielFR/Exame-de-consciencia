import React, { useState } from 'react';
import { Book, CheckCircle2, ChevronRight, Info, ArrowLeft, Trash2 } from 'lucide-react';
import { sinsData } from './data/sinsData';
import { useExamen } from './hooks/useExamen';

type Screen = 'intro' | 'examen' | 'review';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro');
  const { selectedSins, toggleSin, clearSins } = useExamen();

  const handleFinishExamen = () => {
    setCurrentScreen('review');
  };

  const handleAbsolution = () => {
    clearSins();
    setCurrentScreen('intro');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-purple-200">
      {/* Header */}
      <header className="bg-purple-900 text-purple-50 sticky top-0 z-10 shadow-md">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {currentScreen !== 'intro' && (
              <button 
                onClick={() => setCurrentScreen(currentScreen === 'review' ? 'examen' : 'intro')}
                className="p-2 -ml-2 rounded-full hover:bg-purple-800 transition-colors"
                aria-label="Voltar"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <Book className="text-purple-300" size={24} />
            <h1 className="font-semibold text-lg tracking-wide">Exame de Consciência</h1>
          </div>
          {currentScreen === 'examen' && selectedSins.length > 0 && (
            <span className="bg-purple-800 text-purple-100 text-xs font-bold px-2 py-1 rounded-full">
              {selectedSins.length}
            </span>
          )}
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        {currentScreen === 'intro' && (
          <IntroScreen onStart={() => setCurrentScreen('examen')} />
        )}
        
        {currentScreen === 'examen' && (
          <ExamenScreen 
            selectedSins={selectedSins} 
            toggleSin={toggleSin} 
            onFinish={handleFinishExamen} 
          />
        )}

        {currentScreen === 'review' && (
          <ReviewScreen 
            selectedSins={selectedSins} 
            onAbsolution={handleAbsolution} 
          />
        )}
      </main>
    </div>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4 text-center mt-4">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Book className="text-purple-700" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-purple-950">Preparação para a Confissão</h2>
        <p className="text-slate-600 leading-relaxed">
          Um bom exame de consciência é o primeiro passo para uma confissão bem feita. 
          Reflita sobre suas ações à luz dos Mandamentos.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-4">
        <div className="flex items-start gap-3">
          <Info className="text-purple-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-semibold text-slate-800 mb-1">Pecado Mortal vs. Venial</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Para que um pecado seja <strong>mortal</strong>, três condições devem ser cumpridas ao mesmo tempo:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-4">
              <li><strong>Matéria grave:</strong> O ato em si é grave (ex: quebrar um dos 10 mandamentos).</li>
              <li><strong>Pleno conhecimento:</strong> Você sabia que era pecado e que era grave.</li>
              <li><strong>Pleno consentimento:</strong> Você escolheu fazer livremente, sem ser forçado.</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Pecados que não cumprem essas três condições são <strong>veniais</strong>. Todos os pecados mortais devem ser confessados.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-6 rounded-xl shadow-md shadow-purple-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        Iniciar Exame
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

function ExamenScreen({ 
  selectedSins, 
  toggleSin, 
  onFinish 
}: { 
  selectedSins: string[], 
  toggleSin: (id: string) => void,
  onFinish: () => void
}) {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="p-4 bg-purple-50 border-b border-purple-100 text-sm text-purple-800 text-center">
        Marque os pecados que você cometeu desde a sua última confissão.
      </div>

      <div className="divide-y divide-slate-100">
        {sinsData.map((category) => (
          <div key={category.id} className="bg-white">
            <div className="px-5 py-4 bg-slate-50/50 sticky top-16 z-0 backdrop-blur-sm border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">{category.title}</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {category.items.map((sin) => {
                const isSelected = selectedSins.includes(sin.id);
                return (
                  <label 
                    key={sin.id} 
                    className={`flex items-start gap-4 p-5 cursor-pointer transition-colors ${isSelected ? 'bg-purple-50/50' : 'hover:bg-slate-50'}`}
                  >
                    <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={isSelected}
                        onChange={() => toggleSin(sin.id)}
                      />
                      <div className="w-6 h-6 rounded border-2 border-slate-300 peer-checked:border-purple-600 peer-checked:bg-purple-600 transition-all flex items-center justify-center">
                        <CheckCircle2 className={`text-white w-4 h-4 transition-transform ${isSelected ? 'scale-100' : 'scale-0'}`} />
                      </div>
                    </div>
                    <span className={`text-base leading-snug ${isSelected ? 'text-purple-900' : 'text-slate-700'}`}>
                      {sin.text}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-md mx-auto">
          <button
            onClick={onFinish}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md shadow-purple-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            Concluir Exame
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewScreen({ 
  selectedSins, 
  onAbsolution 
}: { 
  selectedSins: string[], 
  onAbsolution: () => void 
}) {
  // Flatten and filter selected sins
  const reviewItems = sinsData.flatMap(category => 
    category.items
      .filter(sin => selectedSins.includes(sin.id))
      .map(sin => ({ ...sin, categoryTitle: category.title }))
  );

  return (
    <div className="p-5 space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="text-center space-y-2 mt-2">
        <h2 className="text-2xl font-bold text-slate-800">Seus Pecados</h2>
        <p className="text-slate-500 text-sm">
          {reviewItems.length === 0 
            ? "Você não marcou nenhum pecado." 
            : "Leve esta lista para a sua confissão."}
        </p>
      </div>

      {reviewItems.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {reviewItems.map((item, index) => (
              <li key={item.id} className="p-4">
                <div className="text-xs font-medium text-purple-600 mb-1">
                  {item.categoryTitle}
                </div>
                <div className="text-slate-800 flex gap-3 items-start">
                  <span className="text-slate-400 font-mono text-sm mt-0.5">{index + 1}.</span>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {reviewItems.length > 0 && (
        <div className="bg-slate-100 rounded-xl p-5 text-center space-y-3">
          <h3 className="font-semibold text-slate-700">Ato de Contrição</h3>
          <p className="text-sm text-slate-600 italic leading-relaxed">
            "Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois infinitamente bom e amável. Prometo, com a vossa graça, esforçar-me para não mais pecar e fugir das ocasiões de pecado. Amém."
          </p>
        </div>
      )}

      <div className="pt-6">
        <button
          onClick={onAbsolution}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl shadow-md shadow-emerald-200/50 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <Trash2 size={20} />
          Fui Perdoado (Apagar registros)
        </button>
        <p className="text-center text-xs text-slate-400 mt-4">
          Ao clicar, sua lista será apagada permanentemente do seu dispositivo.
        </p>
      </div>
    </div>
  );
}
