"use client";

import { motion } from "framer-motion";
import { UploadCloud, Link as LinkIcon, Cpu, FileDown } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function HowItWorksSection() {
    const { t } = useI18n();
    const steps = [
        {
            number: "01",
            title: t.how.s1t,
            description: t.how.s1d,
            icon: LinkIcon,
        },
        {
            number: "02",
            title: t.how.s2t,
            description: t.how.s2d,
            icon: UploadCloud,
        },
        {
            number: "03",
            title: t.how.s3t,
            description: t.how.s3d,
            icon: Cpu,
        },
        {
            number: "04",
            title: t.how.s4t,
            description: t.how.s4d,
            icon: FileDown,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">{t.how.sub}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t.how.title}</h2>
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
                            viewport={{ once: true, margin: "0px", amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="relative h-full flex flex-col glass p-8 rounded-3xl bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer shadow-glass group border border-slate-200 hover:border-primary/30 hover:shadow-lg">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-sm relative z-10">
                                    <step.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="absolute top-8 right-8 text-5xl font-black text-slate-100 group-hover:text-primary/10 transition-colors z-0">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium relative z-10">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
