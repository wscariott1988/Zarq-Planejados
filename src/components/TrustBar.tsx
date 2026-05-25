import { CalendarDays, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

const trustItems = [
  { icon: CalendarDays, text: "6 Anos de Mercado" },
  { icon: CheckCircle2, text: "+400 Projetos Entregues" },
  { icon: ShieldCheck, text: "5 Anos de Garantia (MDF)" },
  { icon: Clock, text: "Prazo de Entrega Garantido" },
];

export default function TrustBar() {
  return (
    <section className="bg-zinc-950 border-y border-zinc-800 py-8 relative z-20 shadow-2xl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <item.icon className="w-8 h-8 text-gold-500 flex-shrink-0" strokeWidth={1.5} />
              <span className="font-inter text-sm md:text-base text-gray-300 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}