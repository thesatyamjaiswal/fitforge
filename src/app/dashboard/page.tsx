"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { signOut } from "next-auth/react";

const workoutLog = [
    { day: "Mon", done: true, name: "Upper Body" },
    { day: "Tue", done: true, name: "Cardio HIIT" },
    { day: "Wed", done: false, name: "Rest Day" },
    { day: "Thu", done: true, name: "Lower Body" },
    { day: "Fri", done: false, name: "Full Body" },
    { day: "Sat", done: false, name: "Core & Abs" },
    { day: "Sun", done: false, name: "Rest Day" },
];

const recentActivity = [
    { title: "Upper Body Power", duration: "48 min", cal: "420", date: "Today", icon: "💪" },
    { title: "HIIT Cardio Blast", duration: "35 min", cal: "380", date: "Yesterday", icon: "🏃" },
    { title: "Lower Body Strength", duration: "52 min", cal: "460", date: "2 days ago", icon: "🦵" },
];

const nutritionData = [
    { label: "Calories", value: 1680, target: 2200, color: "#e11d48", unit: "kcal" },
    { label: "Protein", value: 120, target: 160, color: "#3b82f6", unit: "g" },
    { label: "Carbs", value: 180, target: 230, color: "#f59e0b", unit: "g" },
    { label: "Fats", value: 55, target: 70, color: "#10b981", unit: "g" },
];

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0a0a" }}>
                <div className="flex flex-col items-center gap-4">
                    <div
                        className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: "#e11d48", borderTopColor: "transparent" }}
                    />
                    <span className="text-zinc-500 text-sm">Loading your dashboard...</span>
                </div>
            </div>
        );
    }

    if (!session) return null;

    const userName = session.user?.name || "Champion";
    const isPremium = (session.user as any)?.subscription?.status === "active";
    const greeting = new Date().getHours() < 12 ? "Good Morning" : new Date().getHours() < 17 ? "Good Afternoon" : "Good Evening";

    const tabs = ["overview", "workouts", "nutrition", "progress", "settings"];

    return (
        <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            <Navbar />
            <div className="pt-20">
                {/* Dashboard Header */}
                <div
                    className="border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0d0d0d" }}
                >
                    <div className="container py-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <div className="text-zinc-500 text-sm mb-1">{greeting} 👋</div>
                                <h1 className="text-white font-bold text-3xl font-heading">{userName}</h1>
                                <div className="flex items-center gap-3 mt-2">
                                    {isPremium ? (
                                        <span
                                            className="text-xs font-bold px-3 py-1 rounded-full"
                                            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#1a1a1a" }}
                                        >
                                            ⭐ PREMIUM
                                        </span>
                                    ) : (
                                        <Link href="/pricing">
                                            <span className="badge text-xs cursor-pointer hover:bg-red-500/20 transition-colors">
                                                Upgrade to Premium →
                                            </span>
                                        </Link>
                                    )}
                                    <span className="text-zinc-600 text-sm">Streak: 🔥 14 days</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link href="/workouts" className="btn-outline-red">
                                    Start Workout
                                </Link>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="text-zinc-500 hover:text-white text-sm transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-1 mt-6 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all whitespace-nowrap ${activeTab === tab
                                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                            : "text-zinc-500 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container py-8">
                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                        <div className="space-y-8">
                            {/* Stats cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: "Workouts This Week", value: "4", unit: "/ 6", icon: "🏋️", color: "#e11d48" },
                                    { label: "Calories Burned", value: "1,260", unit: "kcal", icon: "🔥", color: "#f59e0b" },
                                    { label: "Active Minutes", value: "135", unit: "min", icon: "⏱", color: "#3b82f6" },
                                    { label: "Goal Progress", value: "72", unit: "%", icon: "🎯", color: "#10b981" },
                                ].map((stat, i) => (
                                    <div key={i} className="card p-6">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                                            style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                                        >
                                            {stat.icon}
                                        </div>
                                        <div className="text-white font-bold text-2xl font-display">
                                            {stat.value}
                                            <span className="text-zinc-500 text-sm font-normal ml-1">{stat.unit}</span>
                                        </div>
                                        <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Main grid */}
                            <div className="grid lg:grid-cols-3 gap-6">
                                {/* Weekly workout tracker */}
                                <div className="lg:col-span-2 card p-6">
                                    <h3 className="text-white font-bold text-lg mb-6">This Week&apos;s Plan</h3>
                                    <div className="grid grid-cols-7 gap-2">
                                        {workoutLog.map((day, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-zinc-500 text-xs mb-2">{day.day}</div>
                                                <div
                                                    className={`w-full aspect-square rounded-xl flex items-center justify-center text-lg mb-2 transition-all ${day.done ? "scale-105" : ""
                                                        }`}
                                                    style={{
                                                        background: day.done
                                                            ? "linear-gradient(135deg, #e11d48, #9f1239)"
                                                            : "rgba(255,255,255,0.05)",
                                                        border: day.done
                                                            ? "1px solid rgba(225,29,72,0.4)"
                                                            : "1px solid rgba(255,255,255,0.08)",
                                                    }}
                                                >
                                                    {day.done ? "✓" : "○"}
                                                </div>
                                                <div className="text-zinc-600 text-xs truncate">{day.name.split(" ")[0]}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Recent Activity */}
                                    <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                        <h4 className="text-zinc-400 text-sm font-medium mb-4">Recent Activity</h4>
                                        <div className="space-y-3">
                                            {recentActivity.map((act, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between p-3 rounded-xl"
                                                    style={{ background: "rgba(255,255,255,0.04)" }}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xl">{act.icon}</span>
                                                        <div>
                                                            <div className="text-white text-sm font-medium">{act.title}</div>
                                                            <div className="text-zinc-600 text-xs">{act.date}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-zinc-300 text-sm">{act.duration}</div>
                                                        <div className="text-red-400 text-xs">🔥 {act.cal} cal</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Nutrition today */}
                                <div className="card p-6">
                                    <h3 className="text-white font-bold text-lg mb-6">Today&apos;s Nutrition</h3>
                                    <div className="space-y-5">
                                        {nutritionData.map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-zinc-400">{item.label}</span>
                                                    <span className="text-white font-medium">
                                                        {item.value}
                                                        <span className="text-zinc-500">/{item.target} {item.unit}</span>
                                                    </span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div
                                                        className="progress-fill"
                                                        style={{
                                                            width: `${Math.min((item.value / item.target) * 100, 100)}%`,
                                                            background: item.color,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Quick Log */}
                                    <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                        <button className="btn-outline-red w-full justify-center text-sm py-2.5">
                                            + Log Meal
                                        </button>
                                    </div>

                                    {/* Premium upsell if not premium */}
                                    {!isPremium && (
                                        <Link href="/pricing">
                                            <div
                                                className="mt-4 p-4 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                                                style={{
                                                    background: "linear-gradient(135deg, rgba(225,29,72,0.12), rgba(159,18,57,0.06))",
                                                    border: "1px solid rgba(225,29,72,0.2)",
                                                }}
                                            >
                                                <div className="text-yellow-400 text-sm font-bold mb-1">⭐ Upgrade Premium</div>
                                                <div className="text-zinc-400 text-xs">
                                                    Get personalized meal plans, macro targets & more
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Workouts Tab */}
                    {activeTab === "workouts" && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-white font-bold text-2xl">My Workout Plans</h2>
                                <Link href="/workouts" className="btn-outline-red text-sm">
                                    Browse All Plans →
                                </Link>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {["Upper Body Power", "HIIT Cardio", "Lower Body Strength", "Core Crusher", "Full Body"].map((plan, i) => (
                                    <div key={i} className="card p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                                style={{ background: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.2)" }}
                                            >
                                                {["💪", "🏃", "🦵", "🎯", "⚡"][i]}
                                            </div>
                                            <span className="tag text-xs">{["Advanced", "Intermediate", "Advanced", "Beginner", "Intermediate"][i]}</span>
                                        </div>
                                        <h3 className="text-white font-bold mb-2">{plan}</h3>
                                        <div className="text-zinc-500 text-sm mb-4">
                                            {[6, 5, 7, 4, 8][i]} exercises · {[45, 35, 50, 30, 60][i]} min
                                        </div>
                                        <div className="progress-bar mb-2">
                                            <div className="progress-fill" style={{ width: `${[70, 100, 40, 0, 25][i]}%` }} />
                                        </div>
                                        <div className="text-zinc-600 text-xs">{[70, 100, 40, 0, 25][i]}% Complete</div>
                                        <button className="btn-primary w-full justify-center mt-4 text-sm py-2.5">
                                            <span>{[70, 100, 40, 0, 25][i] === 100 ? "Repeat" : "Continue"}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Nutrition Tab */}
                    {activeTab === "nutrition" && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-white font-bold text-2xl">My Diet Plan</h2>
                                <Link href="/diet-plans" className="btn-outline-red text-sm">
                                    Browse Plans →
                                </Link>
                            </div>
                            {!isPremium ? (
                                <div
                                    className="rounded-2xl p-10 text-center"
                                    style={{ background: "rgba(225,29,72,0.06)", border: "1px solid rgba(225,29,72,0.15)" }}
                                >
                                    <div className="text-5xl mb-4">🔒</div>
                                    <h3 className="text-white font-bold text-2xl mb-3">Premium Feature</h3>
                                    <p className="text-zinc-400 mb-6">
                                        Personalized diet plans with macro tracking, meal suggestions, and weekly adjustments are available for Premium members.
                                    </p>
                                    <Link href="/pricing" className="btn-primary">
                                        <span>Unlock Premium — ₹499/month</span>
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-3 gap-6">
                                    {["Breakfast", "Lunch", "Dinner"].map((meal, i) => (
                                        <div key={i} className="card p-6">
                                            <h3 className="text-white font-bold text-lg mb-4">{meal}</h3>
                                            <div className="space-y-3">
                                                {[
                                                    ["Oats + Eggs", "450 kcal", "P:28g C:52g F:12g"],
                                                    ["Chicken Rice Bowl", "620 kcal", "P:45g C:68g F:14g"],
                                                    ["Salmon + Veggies", "520 kcal", "P:42g C:35g F:18g"],
                                                ][i].map((item, j) => (
                                                    <div key={j} className="text-sm">
                                                        {j === 0 && <div className="text-white font-medium">{item}</div>}
                                                        {j === 1 && <div className="text-red-400">{item}</div>}
                                                        {j === 2 && <div className="text-zinc-500">{item}</div>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Progress Tab */}
                    {activeTab === "progress" && (
                        <div>
                            <h2 className="text-white font-bold text-2xl mb-6">Progress Tracker</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="card p-6">
                                    <h3 className="text-white font-bold text-lg mb-6">Weight Progress</h3>
                                    {/* Simple visual weight chart */}
                                    <div className="flex items-end gap-1 h-32 mb-4">
                                        {[82, 81.5, 80.8, 80.2, 79.8, 79.1, 78.5].map((w, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 rounded-t-md transition-all"
                                                style={{
                                                    height: `${((w - 76) / 8) * 100}%`,
                                                    background: i === 6
                                                        ? "linear-gradient(to top, #e11d48, #fb7185)"
                                                        : "rgba(255,255,255,0.1)",
                                                }}
                                                title={`${w} kg`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-zinc-500 text-xs">
                                        {["W1", "W2", "W3", "W4", "W5", "W6", "W7"].map((w) => (
                                            <span key={w}>{w}</span>
                                        ))}
                                    </div>
                                    <div
                                        className="mt-6 pt-4 flex items-center justify-between"
                                        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                                    >
                                        <div>
                                            <div className="text-zinc-500 text-xs">Starting Weight</div>
                                            <div className="text-white font-bold text-xl">82 kg</div>
                                        </div>
                                        <div className="text-2xl">→</div>
                                        <div className="text-right">
                                            <div className="text-zinc-500 text-xs">Current Weight</div>
                                            <div className="text-white font-bold text-xl">78.5 kg</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-zinc-500 text-xs">Total Lost</div>
                                            <div className="text-red-400 font-bold text-xl">-3.5 kg</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-6">
                                    <h3 className="text-white font-bold text-lg mb-6">Body Measurements</h3>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Chest", start: "104 cm", current: "100 cm", change: "-4 cm", positive: true },
                                            { label: "Waist", start: "92 cm", current: "86 cm", change: "-6 cm", positive: true },
                                            { label: "Hips", start: "101 cm", current: "98 cm", change: "-3 cm", positive: true },
                                            { label: "Arms (Bicep)", start: "32 cm", current: "34 cm", change: "+2 cm", positive: false },
                                        ].map((m, i) => (
                                            <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                                <span className="text-zinc-400 text-sm">{m.label}</span>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="text-zinc-500">{m.start}</span>
                                                    <span className="text-white">{m.current}</span>
                                                    <span className={m.positive ? "text-green-400" : "text-blue-400"}>{m.change}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === "settings" && (
                        <div>
                            <h2 className="text-white font-bold text-2xl mb-6">Profile & Settings</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="card p-6">
                                    <h3 className="text-zinc-400 font-medium text-sm mb-5 uppercase tracking-wider">Account Info</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-zinc-500 text-xs mb-2">Full Name</label>
                                            <input type="text" className="input-field" defaultValue={session.user?.name || ""} />
                                        </div>
                                        <div>
                                            <label className="block text-zinc-500 text-xs mb-2">Email</label>
                                            <input type="email" className="input-field" defaultValue={session.user?.email || ""} disabled />
                                        </div>
                                        <button className="btn-primary py-2.5 text-sm">
                                            <span>Save Changes</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="card p-6">
                                    <h3 className="text-zinc-400 font-medium text-sm mb-5 uppercase tracking-wider">Fitness Profile</h3>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Age", placeholder: "e.g. 28", type: "number" },
                                            { label: "Weight (kg)", placeholder: "e.g. 75", type: "number" },
                                            { label: "Height (cm)", placeholder: "e.g. 175", type: "number" },
                                        ].map((field) => (
                                            <div key={field.label}>
                                                <label className="block text-zinc-500 text-xs mb-2">{field.label}</label>
                                                <input type={field.type} className="input-field" placeholder={field.placeholder} />
                                            </div>
                                        ))}
                                        <button className="btn-primary py-2.5 text-sm">
                                            <span>Update Profile</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
