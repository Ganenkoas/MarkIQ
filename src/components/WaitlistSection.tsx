"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/i18n/I18nProvider";

export function WaitlistSection() {
    const { t } = useI18n();
    return (
        <section id="waitlist" className="py-24 relative z-10 w-full mb-20 scroll-m-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="bg-white rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden border border-slate-200 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-80 z-0" />

                    <div className="relative z-10 w-full">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 max-w-2xl mx-auto">
                            {t.waitlist.title}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl mx-auto mb-12">
                            {t.waitlist.sub}
                        </p>

                        <WaitlistForm />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
