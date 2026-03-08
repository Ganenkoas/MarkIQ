"use client";

import { Mail } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
    const { t } = useI18n();
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
                            {t.footer.desc}
                        </p>
                        <a href="mailto:hello@markiq.com" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors">
                            <Mail className="w-5 h-5" />
                            hello@markiq.com
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">{t.footer.links}</h4>
                        <ul className="space-y-3">
                            <li><a href="#how-it-works" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.nav.how}</a></li>
                            <li><a href="#features" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.nav.features}</a></li>
                            <li><a href="#pricing" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.nav.pricing}</a></li>
                            <li><a href="#waitlist" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.common.waitlist}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">{t.footer.legal}</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.footer.privacy}</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.footer.terms}</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">{t.footer.offer}</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} MarkIQ. {t.footer.rights}
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                            {t.footer.beta}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
