import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Как быстро агент начнет работать?",
      answer: "Полная настройка занимает 5-7 дней. После консультации мы создаем агента под ваши задачи, загружаем базу знаний, настраиваем интеграции и проводим тестирование. В первый день после запуска агент уже может обрабатывать лиды."
    },
    {
      question: "Нужны ли технические знания для работы с агентом?",
      answer: "Нет. Агент работает автоматически через ваши привычные каналы связи (WhatsApp, Telegram, сайт). Мы проводим обучения, показываем, как отслеживать результаты и при необходимости корректировать настройки."
    },
    {
      question: "Заметят ли клиенты, что общаются с ИИ?",
      answer: "Агенты общаются неотличимо от живых людей. Мы настраиваем стиль под вашу манеру общения. Клиенты получают качественные консультации и экспертную информацию, что повышает доверие к вашему агентству."
    },
    {
      question: "Какие языки поддерживает агент?",
      answer: "Агент работает на языке запроса к нему. Это позволяет расширить клиентскую базу за счет международных покупателей без найма дополнительного персонала."
    },
    {
      question: "Интегрируется ли агент с нашей CRM?",
      answer: "Зависит от CRM. Как правило - да, мы настраиваем интеграцию с большинством популярных CRM-систем. Агент автоматически заносит все необходимые данные о клиентах и уведомляет менеджера о новых лидах."
    },
    {
      question: "Что происходит, если агент не сможет ответить на вопрос?",
      answer: "Мы настраиваем этот сценарий по запросу. Агент может сказать что не знает ответ и корректно передавать сложные вопросы менеджеру. Так же он может ответить как LLM модель, которая знает ответы на все вопросы и использует последнюю актуальную информацию."
    },
    {
      question: "Какая гарантия результата?",
      answer: "Предоставляем 7 дней бесплатного тестирования и технического обслуживания для оценки работы агента. Дополнительно действует 14-дневная гарантия возврата средств: если агент работает не так, как заявлено в техническом задании — возвращаем 100% стоимости. Если решение принято по личным причинам (изменились планы, другие приоритеты) — возвращаем 50% от стоимости услуги."
    },
    {
      question: "Сколько лидов может обработать агент?",
      answer: "Агент может одновременно вести диалоги с неограниченным количеством клиентов 24/7. В отличие от живого менеджера, он никогда не устает и не теряет качество общения при большой нагрузке."
    },
    {
      question: "Безопасно ли передавать клиентские данные агенту?",
      answer: "Мы используем защищенные каналы связи и соблюдаем требования конфиденциальности. Данные клиентов хранятся в зашифрованном виде и не передаются третьим лицам. Возможна настройка на ваших серверах."
    },
    {
      question: "Можно ли изменить настройки агента после запуска?",
      answer: "Да, агент постоянно обучается и совершенствуется. Мы можем корректировать скрипты, добавлять новые знания о проектах, менять логику квалификации в зависимости от ваших потребностей."
    },
    {
      question: "Заменит ли агент живых менеджеров?",
      answer: "Нет, агент дополняет команду, освобождая менеджеров от рутины. Живые сотрудники занимаются показами, переговорами и сделками с уже квалифицированными клиентами, что повышает их эффективность в разы."
    }
  ];

  return (
    <section className="section-padding bg-background-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <HelpCircle className="h-12 w-12 text-secondary" />
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Частые вопросы
            </h2>
          </div>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Ответы на самые важные вопросы о внедрении ИИ-агента
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl shadow-md card-eco border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-foreground-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 shadow-lg card-eco max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Остались вопросы?
            </h3>
            <p className="text-foreground-muted mb-6">
              Получите персональную консультацию и ответы на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/aleksyogi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Задать вопрос в Telegram
              </a>
              <a 
                href="mailto:wwlewka@gmail.com"
                className="btn-outline inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Написать на Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;