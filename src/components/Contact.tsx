import { useState, FormEvent } from "react";
import Icon from "@/components/ui/icon";

export function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Начните сегодня</span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
          Готовы работать иначе?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Присоединяйтесь к 12 000+ людям, которые открыли для себя спокойную продуктивность.
          Первые 14 дней — абсолютно бесплатно.
        </p>

        {submitted ? (
          <div className="p-10 rounded-2xl bg-sage/10 border border-sage/20">
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={28} className="text-sage" />
            </div>
            <p className="text-foreground font-serif text-2xl mb-2">Добро пожаловать в Hvile</p>
            <p className="text-muted-foreground">Проверьте почту — мы уже отправили ссылку для входа.</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="ваш@email.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-300 whitespace-nowrap font-medium"
              >
                Попробовать
              </button>
            </form>
            <p className="text-xs text-muted-foreground">
              Без кредитной карты · Отмена в любой момент · Ваши данные под защитой
            </p>
          </>
        )}
      </div>
    </section>
  );
}
