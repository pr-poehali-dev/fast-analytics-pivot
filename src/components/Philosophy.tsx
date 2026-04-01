export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
              alt="Спокойное рабочее пространство"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur-sm rounded-xl border border-border/50">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                «Лучшая работа рождается не в спешке, а в состоянии ясности — когда знаешь зачем, для кого и что именно важно сейчас.»
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-1 h-6 bg-sage rounded-full" />
                <p className="text-xs text-muted-foreground">Принцип Hvile</p>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">Наша философия</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Тихий фокус — ваш главный ресурс
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hvile родился из простого наблюдения: самые важные идеи и решения приходят не в момент
                суеты, а в тишине. Когда нет постоянного переключения, уведомлений и ощущения, что ты
                не успеваешь.
              </p>
              <p>
                Мы создали пространство, где работа снова становится удовольствием. Где каждая задача
                выполнена с полным присутствием — и в конце дня есть не усталость, а удовлетворение.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-serif text-3xl text-foreground">12K+</p>
                <p className="text-xs text-muted-foreground mt-1">Пользователей</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-serif text-3xl text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground mt-1">Рейтинг</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="font-serif text-3xl text-foreground">3ч</p>
                <p className="text-xs text-muted-foreground mt-1">В потоке в день</p>
              </div>
            </div>

            <div className="pt-2">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Как это работает</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
