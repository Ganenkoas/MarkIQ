"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Как это работает", href: "#how-it-works" },
        { name: "Модули", href: "#features" },
        { name: "Кому подойдет", href: "#audience" },
        { name: "Тарифы", href: "#pricing" },
    ];

    const scrollTo = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="text-2xl font-black tracking-tight text-slate-900">
                            MARK<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">IQ</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.href)}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Contacts / CTA Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="mailto:hello@markiq.com" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            <Mail className="w-4 h-4" />
                            hello@markiq.com
                        </a>
                        <button
                            onClick={() => scrollTo("#waitlist")}
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 hover:shadow-lg active:scale-95"
                        >
                            В лист ожидания
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-xl md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.href)}
                                className="text-left px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="h-px bg-slate-100 my-2" />
                        <a href="mailto:hello@markiq.com" className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600">
                            <Mail className="w-4 h-4" />
                            hello@markiq.com
                        </a>
                        <button
                            onClick={() => scrollTo("#waitlist")}
                            className="mx-4 mt-2 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
                        >
                            В лист ожидания
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
