"use client";

import { useState } from "react";

const testimonials = [
    {
        name: "Aryan Kapoor",
        role: "Lost 24kg in 5 months",
        text: "FitForge completely transformed my life. The personalized diet plan and workout program felt like it was made just for me. The trainer's constant support kept me motivated throughout.",
        rating: 5,
        avatar: "AK",
        plan: "Yearly Premium",
        highlight: "-24 KG",
    },
    {
        name: "Sneha Reddy",
        role: "Gained 8kg muscle in 4 months",
        text: "I'd tried so many programs before but nothing worked. FitForge's muscle gain plan with progressive overload and the nutrition tracking made a real difference. Absolutely worth it!",
        rating: 5,
        avatar: "SR",
        plan: "Monthly Premium",
        highlight: "+8 KG",
    },
    {
        name: "Rahul Mehta",
        role: "Completed first marathon",
        text: "Started as a complete beginner and just finished my first marathon! The beginner-to-advanced workout plans built my endurance gradually. The progress tracking kept me accountable.",
        rating: 5,
        avatar: "RM",
        plan: "Yearly Premium",
        highlight: "42.2 KM",
    },
    {
        name: "Divya Nair",
        role: "Post-pregnancy transformation",
        text: "After my second child, I felt I'd never get my body back. The FitForge nutrition team designed a safe, effective plan and now I'm fitter than ever at 32. Highly recommend!",
        rating: 5,
        avatar: "DN",
        plan: "Yearly Premium",
        highlight: "FIT MOM",
    },
];

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);

    return (
        <section
            id="testimonials"
            className="section relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #111 0%, #0a0a0a 100%)" }}
        >
            {/* Background decoration */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5"
                style={{ background: "radial-gradient(circle, #e11d48, transparent)" }}
            />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <div className="badge mx-auto mb-6">
                        <span>⭐</span>
                        <span>Real Transformations</span>
                    </div>
                    <h2 className="section-title mb-5">
                        Stories That{" "}
                        <span className="gradient-text">Inspire</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Join thousands of members who have already transformed their bodies
                        and lives with FitForge.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div
                    className="rounded-3xl p-10 mb-8 relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, rgba(225,29,72,0.06), rgba(159,18,57,0.04))",
                        border: "1px solid rgba(225,29,72,0.15)",
                    }}
                >
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <div
                                className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl"
                                style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)" }}
                            >
                                {testimonials[active].avatar}
                            </div>
                            <div>
                                <div className="text-white font-bold text-xl">{testimonials[active].name}</div>
                                <div className="text-red-400 text-sm font-medium">{testimonials[active].role}</div>
                                <div className="flex mt-2">
                                    {Array(testimonials[active].rating).fill(null).map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="px-5 py-3 rounded-xl text-center"
                                style={{ background: "rgba(225,29,72,0.15)", border: "1px solid rgba(225,29,72,0.25)" }}
                            >
                                <div className="text-red-300 text-2xl font-bold font-display">
                                    {testimonials[active].highlight}
                                </div>
                                <div className="text-zinc-400 text-xs">{testimonials[active].plan}</div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="text-5xl text-red-800 mb-4 font-serif">"</div>
                            <p className="text-zinc-300 text-lg leading-relaxed italic">
                                {testimonials[active].text}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Selector cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {testimonials.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`p-4 rounded-xl text-left transition-all ${active === i
                                    ? "border-red-500 bg-red-500/10"
                                    : "border-white/8 bg-white/3 hover:border-white/15"
                                }`}
                            style={{ border: `1px solid ${active === i ? "rgba(225,29,72,0.4)" : "rgba(255,255,255,0.06)"}` }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                    style={{
                                        background: active === i
                                            ? "linear-gradient(135deg, #e11d48, #9f1239)"
                                            : "rgba(255,255,255,0.08)",
                                    }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-white text-xs font-semibold">{t.name}</div>
                                    <div className="text-red-400 text-xs">{t.highlight}</div>
                                </div>
                            </div>
                            <div className="text-zinc-600 text-xs truncate">{t.role}</div>
                        </button>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { label: "Avg. Weight Lost", value: "18 KG" },
                        { label: "Client Satisfaction", value: "98.5%" },
                        { label: "Workouts Tracked", value: "2M+" },
                        { label: "Countries", value: "28+" },
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="text-white font-bold text-3xl mb-1 font-display gradient-text">
                                {item.value}
                            </div>
                            <div className="text-zinc-500 text-sm">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
