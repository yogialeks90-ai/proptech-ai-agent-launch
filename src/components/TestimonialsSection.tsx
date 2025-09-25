import { Quote, Star, TrendingUp, Clock, Users } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "russian",
      company: "Московское агентство «Метр Квадратный»",
      quote: "После внедрения ИИ-агента сократили время подготовки коммерческого предложения с 36 часов до 4 минут. Количество обрабатываемых запросов выросло в 5 раз без увеличения штата.",
      result: "5x больше запросов",
      metric: "36ч → 4мин"
    },
    {
      type: "russian",
      company: "Данные исследования IBM по России",
      quote: "Агентства недвижимости, внедрившие ИИ-технологии, в среднем сокращают операционные расходы на 15-25% и повышают конверсию в сделки на 10-30%.",
      result: "-25% расходов",
      metric: "+30% конверсия"
    },
    {
      type: "international",
      company: "Команда RE/MAX (США)",
      quote: "ИИ-агент взаимодействовал со всеми лидами через SMS и веб-чат, удвоил объем лидов и поднял конверсию на 233%.",
      result: "+233% конверсия",
      metric: "2x лидов"
    },
    {
      type: "international", 
      company: "Международный опыт (Yogreet)",
      quote: "Беспроблемная интеграция с CRM позволила увеличить конверсию лидов на 40% только в первом квартале.",
      result: "+40% конверсия",
      metric: "1 квартал"
    }
  ];

  const overallStats = [
    {
      icon: TrendingUp,
      title: "Сокращение стоимости лида на 30%",
      subtitle: "при увеличении количества конвертируемых встреч на 40%",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Ускорение времени отклика на 40%",
      subtitle: "и увеличение конверсии лид-клиент на 20%",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "100x больше взаимодействий",
      subtitle: "при ответе в течение 5 минут vs позднем отклике",
      color: "text-accent"
    }
  ];

  return (
    <section className="section-padding bg-background-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Реальные результаты внедрения ИИ-агентов
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Опыт российских и международных агентств недвижимости
          </p>
        </div>

        {/* Russian Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Российский опыт</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.filter(t => t.type === "russian").map((testimonial, index) => (
              <div key={index} className="card-feature bg-green-50 border-l-4 border-l-secondary">
                <div className="flex items-start space-x-4 mb-4">
                  <Quote className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">{testimonial.company}</h4>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-foreground-muted leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{testimonial.result}</div>
                    <div className="text-sm text-foreground-muted">Результат</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{testimonial.metric}</div>
                    <div className="text-sm text-foreground-muted">Метрика</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Мировая практика</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.filter(t => t.type === "international").map((testimonial, index) => (
              <div key={index} className="card-feature bg-blue-50 border-l-4 border-l-primary">
                <div className="flex items-start space-x-4 mb-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">{testimonial.company}</h4>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-foreground-muted leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{testimonial.result}</div>
                    <div className="text-sm text-foreground-muted">Результат</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{testimonial.metric}</div>
                    <div className="text-sm text-foreground-muted">Период</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Statistics */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Общая статистика внедрений</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="card-feature text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-card shadow-md flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{stat.title}</h4>
                <p className="text-foreground-muted leading-relaxed">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;