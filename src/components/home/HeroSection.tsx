"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
    { value: "50K+", label: "Active Members" },
    { value: "200+", label: "Workout Plans" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Expert Trainers" },
];

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
            style={{ paddingTop: "80px" }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 hero-gradient" />
            <div
                className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
                style={{ background: "radial-gradient(circle, #e11d48, transparent)" }}
            />
            <div
                className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-8"
                style={{ background: "radial-gradient(circle, #9f1239, transparent)" }}
            />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
                    {/* Left Content */}
                    <div className={mounted ? "animate-fadeInUp" : "opacity-0"}>
                        <div className="badge mb-8">
                            <span>🔥</span>
                            <span>India&apos;s #1 Fitness Platform</span>
                        </div>

                        <h1 className="section-title mb-6" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
                            <span className="gradient-text-white">FORGE YOUR</span>
                            <br />
                            <span className="gradient-text">PERFECT BODY</span>
                            <br />
                            <span className="gradient-text-white">TODAY</span>
                        </h1>

                        <p className="section-subtitle mb-10 text-lg" style={{ maxWidth: "520px" }}>
                            Expert-crafted workout programs, personalized nutrition plans, and
                            world-class coaching designed to transform your physique and fuel your ambition.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-14">
                            <Link href="/signup" className="btn-primary px-8 py-4 text-base">
                                <span>🚀 Start Free Trial</span>
                            </Link>
                            <Link href="/workouts" className="btn-secondary px-8 py-4 text-base">
                                Explore Programs
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="text-center p-4 rounded-xl"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                    }}
                                >
                                    <div className="stat-number text-3xl mb-1">{stat.value}</div>
                                    <div className="text-zinc-500 text-xs font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual Display */}
                    <div
                        className={`relative ${mounted ? "animate-slideInRight" : "opacity-0"}`}
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* Hero Card */}
                        <div className="relative">
                            {/* Main visual block */}
                            <div
                                className="rounded-3xl overflow-hidden relative"
                                style={{
                                    background: "linear-gradient(135deg, #1c1c1c, #111, #1a0a0f)",
                                    border: "1px solid rgba(225,29,72,0.2)",
                                    boxShadow: "0 0 60px rgba(225,29,72,0.15), 0 40px 80px rgba(0,0,0,0.6)",
                                    aspectRatio: "4/5",
                                    maxHeight: "600px",
                                }}
                            >
                                {/* Decorative gradient inside */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background:
                                            "radial-gradient(ellipse at 30% 20%, rgba(225,29,72,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(159,18,57,0.3) 0%, transparent 50%)",
                                    }}
                                />

                                {/* Content inside hero image */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    {/* Fake fitness metrics */}
                                    <div
                                        className="glass rounded-2xl p-5 mb-4 animate-float"
                                        style={{ animationDelay: "0s" }}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-zinc-400 text-sm">Today&apos;s Workout</span>
                                            <span className="tag-red tag text-xs">Active</span>
                                        </div>
                                        <div className="text-white font-bold text-lg mb-1">Upper Body Power</div>
                                        <div className="flex gap-4 text-zinc-400 text-sm">
                                            <span>⏱ 45 min</span>
                                            <span>🔥 380 cal</span>
                                            <span>💪 6 exercises</span>
                                        </div>
                                        <div className="mt-3 progress-bar">
                                            <div className="progress-fill" style={{ width: "68%" }} />
                                        </div>
                                        <div className="mt-1 text-xs text-right text-zinc-500">68% Complete</div>
                                    </div>

                                    <div
                                        className="glass rounded-2xl p-4 animate-float"
                                        style={{ animationDelay: "1.5s" }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-zinc-400 text-xs mb-1">Weekly Progress</div>
                                                <div className="text-white font-bold">+2.4 kg Muscle</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-zinc-400 text-xs mb-1">Streak</div>
                                                <div className="text-red-400 font-bold">🔥 14 Days</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Central Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="text-9xl opacity-10 select-none"
                                        style={{ filter: "drop-shadow(0 0 30px rgba(225,29,72,0.5))" }}
                                    >
                                        💪
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div
                                className="absolute -top-6 -left-6 glass rounded-2xl px-5 py-3 animate-float"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <div className="text-2xl">🏆</div>
                                <div className="text-white font-bold text-sm">Top Rated</div>
                                <div className="text-yellow-400 text-xs">★★★★★</div>
                            </div>

                            <div
                                className="absolute -bottom-6 -right-6 glass-red rounded-2xl px-5 py-3 animate-float"
                                style={{ animationDelay: "1s" }}
                            >
                                <div className="text-white font-bold text-2xl">50K+</div>
                                <div className="text-zinc-400 text-xs">Transformations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-zinc-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
                <div
                    className="w-0.5 h-10 mx-auto rounded-full"
                    style={{ background: "linear-gradient(to bottom, #e11d48, transparent)" }}
                />
            </div>
        </section>
    );
}
