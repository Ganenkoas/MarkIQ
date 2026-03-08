"use client";

import { Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white border-t border-slate-200 py-12 relative z-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

                    <div className="md:col-span-2">
                        <span className="text-2xl font-black tracking-tight text-slate-900 mb-4 block">
                            MARK<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">IQ</span>
                        </span>
                        <p className="text-slate-600 mb-6 max-w-sm">
                            Маркетинговый мозг в кармане. Интеллектуальные стратегии, анализ аудитории и конкурентов за 2 минуты.
                        </p>
                        <a href="mailto:hello@markiq.com" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                            <Mail className="w-5 h-5" />
                            hello@markiq.com
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Продукт</h4>
                        <ul className="space-y-3">
                            <li><a href="#how-it-works" className="text-slate-600 hover:text-primary transition-colors text-sm">Как это работает</a></li>
                            <li><a href="#features" className="text-slate-600 hover:text-primary transition-colors text-sm">Модули</a></li>
                            <li><a href="#pricing" className="text-slate-600 hover:text-primary transition-colors text-sm">Тарифы</a></li>
                            <li><a href="#waitlist" className="text-slate-600 hover:text-primary transition-colors text-sm">Ранний доступ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Правовая информация</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Политика конфиденциальности</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Пользовательское соглашение</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Публичная оферта</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} MarkIQ. Все права защищены.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                            Концепт 2025
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
