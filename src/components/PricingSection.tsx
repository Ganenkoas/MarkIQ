"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function PricingSection() {
    const { t } = useI18n();
    const plans = [
        { name: t.pricing.p1n, price: "$0", period: t.pricing.forever, features: [t.pricing.p1f1, t.pricing.p1f2, t.pricing.p1f3], highlight: false },
        { name: t.pricing.p2n, price: "$19", period: t.pricing.mo, features: [t.pricing.p2f1, t.pricing.p2f2, t.pricing.p2f3, t.pricing.p2f4], highlight: true, badge: t.pricing.popular },
        { name: t.pricing.p3n, price: "$79", period: t.pricing.mo, features: [t.pricing.p3f1, t.pricing.p3f2, t.pricing.p3f3], highlight: false },
    ];

    return (
        <section id="pricing" className="py-24 relative z-10 w-full">
            <div className="flex flex-col items-center text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">{t.pricing.sub}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.pricing.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white transition-all duration-300 hover:-translate-y-2 border ${plan.highlight ? "border-primary/50 shadow-xl shadow-primary/10 md:scale-105 z-10" : "border-slate-200 shadow-md hover:shadow-lg"
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 inset-x-0 flex justify-center">
                                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                                    {plan.badge}
                                </span>
                            </div>
                        )}

                        <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                        <div className="mb-6 flex items-baseline">
                            <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                            <span className="text-slate-500 font-medium ml-2">{plan.period}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? "bg-primary hover:bg-cyan-600 text-white shadow-lg shadow-primary/30" : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                            }`}>
                            {t.pricing.choose} {plan.name}
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
