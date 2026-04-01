export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Отзывы пользователей</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «Впервые за годы я заканчиваю рабочий день без ощущения хаоса. Hvile не просто помог с задачами — он изменил моё отношение к работе.»
        </blockquote>

        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden ring-2 ring-sage/20">
            <img
              src="/professional-woman-portrait--soft-lighting--neutra.jpg"
              alt="Мария Иванова"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Мария Иванова</p>
            <p className="text-sm text-muted-foreground">Продюсер, Studio One</p>
          </div>
        </div>

        {/* Additional mini-testimonials */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              text: "Наконец-то приложение, которое не добавляет тревогу, а убирает её.",
              name: "Антон Белов",
              role: "Разработчик",
            },
            {
              text: "Мой рабочий день сократился с 10 до 7 часов, при этом я успеваю больше.",
              name: "Катя Орлова",
              role: "Дизайн-директор",
            },
            {
              text: "Hvile — как медитация для моего рабочего процесса. Просто и глубоко.",
              name: "Дмитрий Сорокин",
              role: "Стратег",
            },
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-xl bg-background border border-border">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">«{t.text}»</p>
              <div>
                <p className="text-foreground text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
