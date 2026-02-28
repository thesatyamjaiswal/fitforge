"use client";

import Link from "next/link";

const services = [
    {
        icon: "🏋️",
        title: "Custom Workout Plans",
        desc: "Tailored exercise programs designed for your goals, fitness level, and schedule — from beginner to elite.",
        href: "/workouts",
        tags: ["Beginner", "Intermediate", "Advanced"],
    },
    {
        icon: "🥗",
        title: "Personalized Diet Plans",
        desc: "Science-backed nutrition plans for weight loss, muscle building, or maintenance with macros tracked.",
        href: "/diet-plans",
        tags: ["Weight Loss", "Muscle Gain", "Maintenance"],
    },
    {
        icon: "📚",
        title: "Nutrition Knowledge Hub",
        desc: "Deep-dive articles on macros, micros, supplements, meal timing, and evidence-based eating strategies.",
        href: "/nutrition",
        tags: ["Articles", "Guides", "Research"],
    },
    {
        icon: "📊",
        title: "Progress Tracking",
        desc: "Monitor your weight, body metrics, workout completion, and nutrition adherence with visual dashboards.",
        href: "/dashboard",
        tags: ["Analytics", "Charts", "Reports"],
    },
    {
        icon: "👨‍💼",
        title: "Expert Coaching",
        desc: "Direct access to certified personal trainers and nutritionists for premium plan subscribers.",
        href: "/pricing",
        tags: ["1-on-1", "Premium", "Chat"],
        premium: true,
    },
    {
        icon: "🧘",
        title: "Recovery & Wellness",
        desc: "Recovery protocols, sleep optimization, stress management and mobility routines for complete fitness.",
        href: "/workouts",
        tags: ["Recovery", "Mobility", "Sleep"],
    },
];

export default function ServicesSection() {
    return (
        <section className="section" style={{ background: "#0d0d0d" }}>
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="badge mx-auto mb-6">
                        <span>⚡</span>
                        <span>Everything You Need</span>
                    </div>
                    <h2 className="section-title mb-5">
                        Your Complete{" "}
                        <span className="gradient-text">Fitness Arsenal</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        A comprehensive ecosystem of tools, knowledge, and support to fuel
                        every stage of your transformation journey.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <Link
                            href={service.href}
                            key={i}
                            className="card p-8 group block relative overflow-hidden"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {service.premium && (
                                <div
                                    className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                                    style={{
                                        background: "linear-gradient(135deg, #f59e0b, #d97706)",
                                        color: "#1a1a1a",
                                    }}
                                >
                                    PREMIUM
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: "rgba(225,29,72,0.1)",
                                    border: "1px solid rgba(225,29,72,0.2)",
                                }}
                            >
                                {service.icon}
                            </div>

                            <h3 className="text-white font-bold text-xl mb-3 font-heading group-hover:text-red-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">{service.desc}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="tag text-xs">{tag}</span>
                                ))}
                            </div>

                            {/* CTA Arrow */}
                            <div className="flex items-center gap-2 text-red-400 text-sm font-medium group-hover:gap-3 transition-all">
                                <span>Explore</span>
                                <span>→</span>
                            </div>

                            {/* Hover border glow */}
                            <div
                                className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ background: "linear-gradient(135deg, rgba(225,29,72,0.05), transparent)" }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
