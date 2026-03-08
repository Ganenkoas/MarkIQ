"use client";

import { motion } from "framer-motion";
import { Search, Users, ShieldAlert, Calendar, Type, Image as ImageIcon, MessageSquare, Mail, BarChart, Crosshair } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function FeaturesSection() {
    const { t } = useI18n();
    const features = [
        { title: t.features.f1t, text: t.features.f1d, icon: Search },
        { title: t.features.f2t, text: t.features.f2d, icon: Users },
        { title: t.features.f3t, text: t.features.f3d, icon: ShieldAlert },
        { title: t.features.f4t, text: t.features.f4d, icon: Calendar },
        { title: t.features.f5t, text: t.features.f5d, icon: Type },
        { title: t.features.f6t, text: t.features.f6d, icon: ImageIcon },
        { title: t.features.f7t, text: t.features.f7d, icon: MessageSquare },
        { title: t.features.f8t, text: t.features.f8d, icon: Mail },
        { title: t.features.f9t, text: t.features.f9d, icon: BarChart },
        { title: t.features.f10t, text: t.features.f10d, icon: Crosshair },
    ];

    return (
        <section id="features" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">{t.features.sub}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.features.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px", amount: 0.1 }}
                        transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                    >
                        <div className="h-full bg-white/70 backdrop-blur-md p-6 border border-slate-200 rounded-2xl flex gap-4 items-start group hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer">
                            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-sm">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.text}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
