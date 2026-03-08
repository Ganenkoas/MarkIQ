"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionaries, Locale } from "./dictionaries";
import { useRouter } from "next/navigation";

type Dictionary = typeof dictionaries.ru;

const I18nContext = createContext<{
    locale: Locale;
    t: Dictionary;
    setLocale: (loc: Locale) => void;
}>({
    locale: "ru",
    t: dictionaries.ru,
    setLocale: () => { },
});

export function I18nProvider({ children, serverLocale }: { children: ReactNode; serverLocale: Locale }) {
    // Determine initial locale strictly from server payload to avoid hydration mismatches
    const validLocale = (serverLocale === "en" || serverLocale === "ru") ? serverLocale : "ru";
    const [locale, setLocaleState] = useState<Locale>(validLocale);
    const router = useRouter();

    const setLocale = (loc: Locale) => {
        setLocaleState(loc);
        document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=31536000`; // 1 year expiry
        router.refresh();
    };

    return (
        <I18nContext.Provider value={{ locale, t: dictionaries[locale], setLocale }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    return useContext(I18nContext);
}
