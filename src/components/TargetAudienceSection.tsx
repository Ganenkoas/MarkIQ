"use client";

import { motion } from "framer-motion";
import { Briefcase, UserPlus, Rocket, Building2 } from "lucide-react";

export function TargetAudienceSection() {
    const audiences = [
        {
            title: "Владельцам бизнеса",
            text: "У вас нет маркетолога. Нет времени на метрики. Вы хотите получить результат, а не бесконечный процесс.",
            icon: Briefcase,
        },
        {
            title: "Фрилансерам",
            text: "Идеальный инструмент для старта с клиентом. Экономьте часы на рутине. Берите дорогие проекты.",
            icon: UserPlus,
        },
        {
            title: "Стартапам",
            text: "Быстрая проверка бизнес-гипотез. Найдите свою аудиторию без найма дорогого агентства.",
            icon: Rocket,
        },
        {
            title: "Рекламным агентствам",
            text: "Автоматизируйте первичные брифы и аудиты. Ускорьте работу всей команды в несколько раз.",
            icon: Building2,
        },
    ];

    return (
        <section id="audience" className="py-24 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Кому это нужно</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Кому поможет MarkIQ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {audiences.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex flex-col sm:flex-row gap-6 items-start p-8 bg-white/60 backdrop-blur-md rounded-3xl group border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all"
                    >
                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all shadow-sm">
                            <item.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
