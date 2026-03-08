"use client";

import { motion } from "framer-motion";
import { UploadCloud, Link as LinkIcon, Cpu, FileDown } from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Загрузка данных",
            description: "Вставьте ссылку на сайт. Или напишите пару слов о вашем бизнесе. Никаких долгих брифов.",
            icon: LinkIcon,
        },
        {
            number: "02",
            title: "Выбор задачи",
            description: "Выберите нужную карточку: анализ сайта, разбор конкурентов, аудитория или контент-план.",
            icon: UploadCloud,
        },
        {
            number: "03",
            title: "AI-генерация",
            description: "Приложение собирает реальные данные с рынка. Оно пишет понятный отчет с выводами.",
            icon: Cpu,
        },
        {
            number: "04",
            title: "Экспорт и действие",
            description: "Ваш отчет готов. Скачайте его в PDF. Отправьте команде в удобный рабочий чат.",
            icon: FileDown,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">Пользовательский путь</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Как это работает</h2>
            </div>

            <div className="relative">
                {/* Animated Connecting Path for Desktop */}
                <div className="hidden lg:block absolute top-[60px] left-12 right-12 h-0.5 bg-slate-200 overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative flex flex-col glass p-8 rounded-3xl bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer shadow-glass group border border-slate-200 hover:border-primary/30 hover:shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-sm relative z-10">
                                <step.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="absolute top-8 right-8 text-5xl font-black text-slate-100 group-hover:text-primary/10 transition-colors z-0">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium relative z-10">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
