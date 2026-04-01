import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Личный",
    price: "Бесплатно",
    description: "Для тех, кто делает первые шаги к осознанной работе",
    features: [
      "До 5 проектов",
      "Ежедневные сессии фокуса",
      "Базовый режим тишины",
      "Мобильное приложение",
      "Еженедельный дайджест",
    ],
    cta: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "Профи",
    price: "990 ₽",
    period: "/мес",
    description: "Для тех, кто хочет работать глубже и жить осознаннее",
    badge: "Популярный выбор",
    features: [
      "Всё из тарифа Личный",
      "Безлимитные проекты и задачи",
      "Умный режим тишины 24/7",
      "Мягкая аналитика паттернов",
      "Синхронизация с календарём",
      "Командный режим до 5 человек",
      "Приоритетная поддержка",
    ],
    cta: "Начать 14 дней бесплатно",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Тарифы</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Честные цены, без сюрпризов
          </h2>
          <p className="text-muted-foreground text-lg">Никаких скрытых платежей. Отмена в любое время — в один клик.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 rounded-2xl border ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 scale-[1.02]"
                  : "bg-card border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sage text-white text-xs rounded-full font-medium">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-5xl tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`mb-8 text-sm leading-relaxed ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? "bg-primary-foreground/20" : "bg-sage/10"}`}>
                      <Icon name="Check" size={12} className={plan.highlighted ? "text-primary-foreground" : "text-sage"} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary shadow-lg"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Студентам и некоммерческим организациям — скидка 50%.{" "}
          <a href="#contact" className="text-foreground underline underline-offset-4 hover:text-sage transition-colors">
            Написать нам
          </a>
        </p>
      </div>
    </section>
  );
}
