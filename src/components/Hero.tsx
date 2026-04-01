import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 rounded-full bg-terracotta/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage mb-8 border border-sage/20">
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
          <span className="text-sm font-medium">Более 12 000 человек уже работают осознанно</span>
        </div>

        {/* Main heading with serif font */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05] text-balance mb-8">
          Работа в потоке,
          <br />
          <span className="italic text-sage">а не в панике</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Hvile — инструмент осознанной продуктивности. Помогает сфокусироваться на важном,
          защищает время глубокой работы и возвращает радость от того, что делаешь.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Начать бесплатно
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Узнать подробнее
          </a>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-sage font-medium text-lg">4.9</span>
            <span>★★★★★</span>
            <span>в App Store</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div>Без кредитной карты</div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div>Отмена в любой момент</div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
