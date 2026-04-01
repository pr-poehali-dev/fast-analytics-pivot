import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "TimerReset",
    title: "Ритмичное планирование",
    description:
      "Тайм-блоки, которые учитывают ваши естественные ритмы. Система сама предлагает паузы — чтобы вы работали на пике, а не через силу.",
  },
  {
    icon: "Focus",
    title: "Один фокус — один момент",
    description:
      "Видите только текущую задачу. Всё остальное аккуратно убрано с глаз долой и терпеливо ждёт своей очереди.",
  },
  {
    icon: "BellOff",
    title: "Защита от отвлечений",
    description:
      "Умный режим тишины блокирует уведомления в часы глубокой работы. Вы сами выбираете, что важно, — и ничто другое не прерывает поток.",
  },
  {
    icon: "BarChart3",
    title: "Мягкая аналитика",
    description:
      "Вдумчивые инсайты о ваших паттернах продуктивности — без осуждения и тревоги. Только понимание и забота о вашем ритме.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Возможности</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance mb-4">
            Всё, что нужно для спокойной работы
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hvile не добавляет шума — он убирает лишнее, оставляя только то, что действительно важно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/40 hover:shadow-lg hover:shadow-sage/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 group-hover:scale-110 transition-all duration-500">
                <Icon name={feature.icon} size={22} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
