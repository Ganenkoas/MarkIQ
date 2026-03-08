"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function WaitlistForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const { t } = useI18n();

    const formSchema = z.object({
        email: z.string().email(t.form.req),
        role: z.enum(["Startup", "Marketer", "BusinessOwner", "Other"], {
            errorMap: () => ({ message: t.form.roleReq }),
        }),
    });

    type FormValues = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        // В реальном проекте здесь будет отправка в Google Sheets через API route
        // await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(data) })

        return new Promise((resolve) => {
            setTimeout(() => {
                setIsSuccess(true);
                resolve(true);
            }, 1500);
        });
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-md rounded-2xl animate-in fade-in zoom-in duration-500 text-center font-medium border border-slate-200 shadow-glass">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl text-slate-900 mb-2">{t.form.success}</h3>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm w-full mx-auto outline-none">
            <div className="relative group">
                <input
                    {...register("email")}
                    type="email"
                    placeholder={t.hero.placeholder}
                    className="w-full h-14 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/20 transition-all duration-300 shadow-sm"
                />
                {errors.email && (
                    <span className="absolute -bottom-6 left-2 text-xs text-red-500 font-medium">{errors.email.message}</span>
                )}
            </div>

            <div className="relative group mt-6">
                <select
                    {...register("role")}
                    className="w-full h-14 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-xl px-4 placeholder:text-slate-400 focus:outline-none focus:border-secondary/60 focus:ring-4 focus:ring-secondary/20 transition-all duration-300 appearance-none shadow-sm cursor-pointer"
                    defaultValue=""
                >
                    <option value="" disabled hidden>{t.form.selectMsg}</option>
                    <option value="Startup">{t.form.r3}</option>
                    <option value="Marketer">{t.form.r2}</option>
                    <option value="BusinessOwner">{t.form.r1}</option>
                    <option value="Other">Other</option>
                </select>
                {errors.role && (
                    <span className="absolute -bottom-6 left-2 text-xs text-red-500 font-medium">{errors.role.message}</span>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 mt-8 bg-slate-900 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-900/20 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin text-white" /> {t.form.searching}</span>
                ) : (
                    <>
                        {t.hero.join}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    );
}
