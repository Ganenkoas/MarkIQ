"use client";

import { motion } from "framer-motion";
import { Search, Users, ShieldAlert, Calendar, Type, Image as ImageIcon, MessageSquare, Mail, BarChart, Crosshair } from "lucide-react";

export function FeaturesSection() {
    const features = [
        { title: "Анализ сайта", text: "Полный UX-разбор, скорость работы и конверсионные точки. Покажем, что сломано и как это починить.", icon: Search },
        { title: "Целевая аудитория", text: "Составим точные портреты клиентов. Найдем их скрытые боли и подскажем, где их дешевле искать.", icon: Users },
        { title: "Анализ конкурентов", text: "Изучим предложения соперников по рынку. Найдем их слабые места. Покажем, как вам выделиться.", icon: ShieldAlert },
        { title: "Маркетинговый план", text: "Соберем стратегию на три месяца вперед. Распишем нужные каналы, бюджеты и метрики успеха.", icon: Calendar },
        { title: "Тексты и копирайтинг", text: "Напишем тексты для лендинга. Адаптируем их под ваш уникальный голос бренда. Никакой во́ды.", icon: Type },
        { title: "Рекламные креативы", text: "Придумаем идеи для рекламы. Дадим готовые сценарии, хуки и тексты для рекламных сетей.", icon: ImageIcon },
        { title: "Контент-стратегия", text: "Сделаем план публикаций. Придумаем интересные форматы и рубрики для социальных сетей.", icon: MessageSquare },
        { title: "Email-воронка", text: "Напишем логичную цепочку писем. От первого приветствия до финальной продажи. Готовый текст.", icon: Mail },
        { title: "SEO-аудит", text: "Соберем ключевые слова. Проверим структуру и метатеги. Выдадим список правок разработчику.", icon: BarChart },
        { title: "Позиционирование", text: "Сформулируем ваше уникальное предложение. Найдем ту самую мысль, которую нужно донести.", icon: Crosshair },
    ];

    return (
        <section id="features" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Что внутри</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Модули приложения</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                        className="bg-white/70 backdrop-blur-md p-6 border border-slate-200 rounded-2xl flex gap-4 items-start group hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer"
                    >
                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-sm">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
