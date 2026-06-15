import { useState } from "react";


const ApplicationForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-32 md:py-48 bg-brand-void flex items-center justify-center">
        <div className="text-center animate-[fadeIn_2s_ease-in-out_forwards]">
          <div className="w-16 h-16 border border-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(197,168,128,0.2)]">
            <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-platinum mb-6">Under Review by the Council</h2>
          <p className="font-sans text-brand-steel text-sm tracking-wide max-w-md mx-auto leading-relaxed">
            Your dossier has been sealed. Should your presence align with the ethos of L'Absence, an emissary will contact you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inquest" className="py-24 md:py-48 bg-brand-void relative border-t border-brand-obsidian">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">

        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-platinum mb-6">The Inquest</h2>
          <p className="font-sans text-brand-steel text-[10px] uppercase tracking-[0.3em]">Acquisition by invitation only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">

          {step === 1 && (
            <div className="space-y-8 animate-[fadeIn_1s_ease-out_forwards]">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-steel mb-3">I. Primary Residence or Estate Region</label>
                <input type="text" required className="bg-transparent border-b border-brand-steel/30 py-4 text-brand-platinum font-serif text-xl focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Monaco, Geneva, Dubai" />
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-steel mb-3">II. Legacy Institution or House (Optional)</label>
                <input type="text" className="bg-transparent border-b border-brand-steel/30 py-4 text-brand-platinum font-serif text-xl focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Royal Yacht Squadron" />
              </div>
              <div className="pt-8 text-right">
                <button onClick={handleNext} className="text-[10px] uppercase tracking-[0.25em] text-brand-platinum hover:text-brand-gold transition-colors border border-brand-platinum/20 hover:border-brand-gold px-8 py-4">Proceed</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-[fadeIn_1s_ease-out_forwards]">
              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-steel mb-3">III. Define your relationship with time in a single sentence.</label>
                <textarea required rows={3} className="bg-transparent border-b border-brand-steel/30 py-4 text-brand-platinum font-serif text-xl focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="..."></textarea>
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-steel mb-3">IV. Reference Key (If referred by an active owner)</label>
                <input type="text" className="bg-transparent border-b border-brand-steel/30 py-4 text-brand-platinum font-serif text-xl focus:outline-none focus:border-brand-gold transition-colors tracking-widest" placeholder="XX-XXXX-XX" />
              </div>
              <div className="pt-8 flex justify-between items-center">
                <button type="button" onClick={() => setStep(1)} className="text-[10px] uppercase tracking-[0.25em] text-brand-steel hover:text-brand-platinum transition-colors">Return</button>
                <button type="submit" className="text-[10px] uppercase tracking-[0.25em] bg-brand-gold text-brand-void hover:bg-brand-platinum transition-colors px-12 py-4 font-semibold">Submit Dossier</button>
              </div>
            </div>
          )}

        </form>

        {/* Step indicators */}
        <div className="mt-16 flex justify-center space-x-4">
           <div className={`w-8 h-px ${step >= 1 ? 'bg-brand-gold' : 'bg-brand-steel/30'} transition-colors duration-500`}></div>
           <div className={`w-8 h-px ${step >= 2 ? 'bg-brand-gold' : 'bg-brand-steel/30'} transition-colors duration-500`}></div>
        </div>

      </div>
    </section>
  );
};

export default ApplicationForm;
