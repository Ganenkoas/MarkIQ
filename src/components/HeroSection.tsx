"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import { useI18n } from "@/i18n/I18nProvider";

export function HeroSection() {
    const { t } = useI18n();
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center min-h-[90vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md mb-8 shadow-sm"
            >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-600">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-slate-900"
            >
                MARK<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">IQ</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-4xl text-slate-700 font-semibold mb-6"
            >
                {t.hero.title1}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto mb-12"
            >
                {t.hero.sub}
            </motion.p>

            {/* Фактоиды */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 mb-16"
            >
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-slate-800 mb-1">{t.hero.m1v}</span>
                    <span className="text-sm font-medium text-slate-500">{t.hero.m1s}</span>
                </div>
                <div className="w-px h-12 bg-slate-200 hidden md:block" />
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-slate-800 mb-1">{t.hero.m2v}</span>
                    <span className="text-sm font-medium text-slate-500">{t.hero.m2s}</span>
                </div>
                <div className="w-px h-12 bg-slate-200 hidden md:block" />
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-slate-800 mb-1">{t.hero.m3v}</span>
                    <span className="text-sm font-medium text-slate-500">{t.hero.m3s}</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full relative z-20"
            >
                <WaitlistForm />
            </motion.div>

            {/* Animated Mockup Graphic */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-24 w-full max-w-4xl mx-auto glass rounded-[2.5rem] border border-slate-200 p-3 shadow-2xl relative bg-white"
            >
                <div className="aspect-video w-full rounded-[2rem] bg-slate-50 overflow-hidden relative border border-slate-100 flex flex-col items-center text-slate-700 font-medium">

                    {/* Декоративные глоу-сферы за UI */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[60px] rounded-full" />
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 blur-[60px] rounded-full" />

                    {/* Анимация: Макет приложения, показывающий принцип */}
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col overflow-hidden h-full z-10">
                            {/* Browser/App Header */}
                            <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />

                                <div className="ml-4 flex-1 h-6 bg-white border border-slate-200 rounded-md flex items-center px-3 relative overflow-hidden">
                                    <span className="text-xs text-slate-400">https://</span>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.5, duration: 0 }}
                                        className="text-xs text-slate-700 ml-1"
                                    >
                                        my-startup.com
                                    </motion.span>
                                    {/* Animated typing cursor */}
                                    <motion.div
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="w-[2px] h-4 bg-primary ml-1"
                                    />
                                </div>
                            </div>

                            {/* App Content */}
                            <div className="flex-1 p-6 flex flex-col relative overflow-hidden bg-slate-50">
                                <div className="flex gap-4 h-full">
                                    {/* Left Sidebar Mock */}
                                    <div className="w-1/3 flex flex-col gap-3">
                                        <div className="h-6 w-24 bg-slate-200 rounded-md mb-2" />
                                        <div className="h-10 w-full bg-white border border-slate-200 rounded-lg" />
                                        <div className="h-10 w-full bg-white border border-slate-200 rounded-lg" />
                                        <div className="h-10 w-full bg-white border border-slate-200 rounded-lg" />
                                    </div>

                                    {/* Main Content Mock */}
                                    <div className="flex-1 bg-white border border-slate-200 rounded-xl relative overflow-hidden flex flex-col p-4 gap-4">
                                        <div className="h-8 w-1/2 bg-slate-100 rounded-md" />
                                        <div className="flex-1 flex gap-4">
                                            <div className="flex-1 bg-slate-50 rounded-lg border border-slate-100 p-2 flex items-end">
                                                {/* Animated Chart Bars */}
                                                <div className="w-full h-full flex items-end justify-between gap-2">
                                                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ height: "0%" }}
                                                            animate={{ height: `${h}%` }}
                                                            transition={{ duration: 1, delay: 2 + (i * 0.1), type: "spring" }}
                                                            className="flex-1 bg-primary/20 rounded-t-sm"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="w-1/3 flex flex-col gap-2">
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 2.5 }}
                                                    className="h-12 w-full bg-emerald-50 border border-emerald-100 rounded-md flex items-center p-2"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-emerald-200" />
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 2.7 }}
                                                    className="h-12 w-full bg-blue-50 border border-blue-100 rounded-md flex items-center p-2"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-blue-200" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Scanner Line Overlay */}
                                        <motion.div
                                            initial={{ top: "-10%" }}
                                            animate={{ top: "110%" }}
                                            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                            className="absolute left-0 right-0 h-1 bg-primary/50 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
