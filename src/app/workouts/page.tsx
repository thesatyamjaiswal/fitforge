import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Workout Plans | FitForge",
    description: "Premium workout plans for all levels — beginner to advanced. Strength training, HIIT, calisthenics, and more.",
};

const workoutPlans = [
    {
        level: "Beginner",
        levelColor: "#10b981",
        icon: "🌱",
        title: "Foundation Builder",
        desc: "Perfect for gym newcomers. Learn proper form, build baseline strength, and create sustainable exercise habits over 8 weeks.",
        duration: "8 Weeks",
        daysPerWeek: "3 Days",
        totalExercises: 18,
        equipment: "Minimal",
        categories: ["Strength", "Full Body", "Technique"],
        workouts: [
            { day: "Day 1", name: "Upper Body Basics", exercises: 5, duration: "35 min" },
            { day: "Day 2", name: "Rest & Mobility", exercises: 0, duration: "Active Rest" },
            { day: "Day 3", name: "Lower Body Basics", exercises: 5, duration: "40 min" },
            { day: "Day 4", name: "Rest", exercises: 0, duration: "Rest" },
            { day: "Day 5", name: "Full Body Circuit", exercises: 8, duration: "45 min" },
        ],
    },
    {
        level: "Intermediate",
        levelColor: "#f59e0b",
        icon: "⚡",
        title: "Hypertrophy Protocol",
        desc: "A proven 5-day split designed for muscle hypertrophy. Progressive overload, volume optimization, and strategic deload weeks.",
        duration: "12 Weeks",
        daysPerWeek: "5 Days",
        totalExercises: 48,
        equipment: "Full Gym",
        categories: ["Muscle Gain", "Push/Pull/Legs", "Progressive Overload"],
        workouts: [
            { day: "Day 1", name: "Chest & Triceps", exercises: 8, duration: "55 min" },
            { day: "Day 2", name: "Back & Biceps", exercises: 8, duration: "55 min" },
            { day: "Day 3", name: "Legs & Glutes", exercises: 8, duration: "60 min" },
            { day: "Day 4", name: "Rest", exercises: 0, duration: "Rest" },
            { day: "Day 5", name: "Shoulders & Arms", exercises: 9, duration: "50 min" },
        ],
        popular: true,
    },
    {
        level: "Advanced",
        levelColor: "#e11d48",
        icon: "🔥",
        title: "Elite Performance",
        desc: "Advanced periodization for experienced athletes. Combines powerlifting, bodybuilding, and conditioning for peak physique.",
        duration: "16 Weeks",
        daysPerWeek: "6 Days",
        totalExercises: 80,
        equipment: "Full Gym",
        categories: ["Powerbuilding", "Periodization", "Competition Prep"],
        workouts: [
            { day: "Day 1", name: "Heavy Squat Focus", exercises: 10, duration: "75 min" },
            { day: "Day 2", name: "Heavy Push Day", exercises: 10, duration: "70 min" },
            { day: "Day 3", name: "Heavy Pull Day", exercises: 10, duration: "70 min" },
            { day: "Day 4", name: "Dynamic Lower", exercises: 10, duration: "65 min" },
            { day: "Day 5", name: "Dynamic Upper", exercises: 10, duration: "65 min" },
        ],
    },
    {
        level: "Beginner",
        levelColor: "#10b981",
        icon: "🏃",
        title: "Fat Burner HIIT",
        desc: "High-intensity interval training designed to maximize calorie burn, improve cardio, and accelerate fat loss — no gym required.",
        duration: "6 Weeks",
        daysPerWeek: "4 Days",
        totalExercises: 24,
        equipment: "Bodyweight",
        categories: ["HIIT", "Fat Loss", "Cardio"],
        workouts: [
            { day: "Day 1", name: "Tabata Circuit", exercises: 6, duration: "30 min" },
            { day: "Day 2", name: "AMRAP Workout", exercises: 5, duration: "25 min" },
            { day: "Day 3", name: "Rest", exercises: 0, duration: "Rest" },
            { day: "Day 4", name: "EMOM Challenge", exercises: 7, duration: "35 min" },
        ],
    },
    {
        level: "Advanced",
        levelColor: "#e11d48",
        icon: "🤸",
        title: "Calisthenics Mastery",
        desc: "Master your bodyweight. Progress from basics to muscle-ups, handstands, and planche elements through structured skill work.",
        duration: "20 Weeks",
        daysPerWeek: "5 Days",
        totalExercises: 60,
        equipment: "Bars & Rings",
        categories: ["Calisthenics", "Skill", "Strength"],
        workouts: [
            { day: "Day 1", name: "Push Skills", exercises: 10, duration: "60 min" },
            { day: "Day 2", name: "Pull Skills", exercises: 10, duration: "60 min" },
            { day: "Day 3", name: "Core & Balance", exercises: 10, duration: "50 min" },
        ],
    },
    {
        level: "Intermediate",
        levelColor: "#f59e0b",
        icon: "🧘",
        title: "Strength & Mobility",
        desc: "Balanced program combining strength training with yoga-inspired mobility work. Perfect for injury prevention and functional fitness.",
        duration: "10 Weeks",
        daysPerWeek: "4 Days",
        totalExercises: 36,
        equipment: "Minimal",
        categories: ["Strength", "Mobility", "Injury Prevention"],
        workouts: [
            { day: "Day 1", name: "Lower Strength", exercises: 8, duration: "50 min" },
            { day: "Day 2", name: "Upper Mobility", exercises: 8, duration: "45 min" },
            { day: "Day 3", name: "Upper Strength", exercises: 8, duration: "50 min" },
            { day: "Day 4", name: "Full Mobility Flow", exercises: 12, duration: "40 min" },
        ],
    },
];

export default function WorkoutsPage() {
    const levelsOrder = ["Beginner", "Intermediate", "Advanced"];

    return (
        <main>
            <Navbar />
            <div className="pt-20">
                {/* Hero */}
                <section
                    className="relative overflow-hidden"
                    style={{ background: "#0a0a0a", padding: "80px 0" }}
                >
                    <div
                        className="absolute inset-0 grid-pattern opacity-50"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(225,29,72,0.15), transparent)",
                        }}
                    />
                    <div className="container relative z-10">
                        <div className="badge mb-6">
                            <span>🏋️</span>
                            <span>Expert Workout Programs</span>
                        </div>
                        <h1 className="section-title mb-5">
                            Train Like a <span className="gradient-text">Champion</span>
                        </h1>
                        <p className="section-subtitle mb-10">
                            Structured workout programs for every level — from your first day in the
                            gym to competition-level training. Track every rep, every set.
                        </p>

                        {/* Level filter pills */}
                        <div className="flex flex-wrap gap-3">
                            {levelsOrder.map((level) => (
                                <div
                                    key={level}
                                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "#a1a1aa",
                                    }}
                                >
                                    {level}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        {/* Workout Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
                            {workoutPlans.map((plan, i) => (
                                <div
                                    key={i}
                                    className="card overflow-hidden group relative"
                                    style={{
                                        border: plan.popular
                                            ? "1px solid rgba(225,29,72,0.35)"
                                            : "1px solid rgba(255,255,255,0.08)",
                                        boxShadow: plan.popular ? "0 0 40px rgba(225,29,72,0.08)" : "none",
                                    }}
                                >
                                    {plan.popular && (
                                        <div
                                            className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full z-10"
                                            style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)", color: "white" }}
                                        >
                                            POPULAR
                                        </div>
                                    )}

                                    {/* Top section */}
                                    <div className="p-7">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                                                style={{
                                                    background: `${plan.levelColor}15`,
                                                    border: `1px solid ${plan.levelColor}30`,
                                                }}
                                            >
                                                {plan.icon}
                                            </div>
                                            <div>
                                                <div
                                                    className="text-xs font-bold mb-1 uppercase tracking-wide"
                                                    style={{ color: plan.levelColor }}
                                                >
                                                    {plan.level}
                                                </div>
                                                <h3 className="text-white font-bold text-xl font-heading">{plan.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-zinc-500 text-sm leading-relaxed mb-5">{plan.desc}</p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-3 mb-5">
                                            {[
                                                { label: "Duration", value: plan.duration },
                                                { label: "Schedule", value: plan.daysPerWeek },
                                                { label: "Exercises", value: plan.totalExercises },
                                            ].map((stat) => (
                                                <div
                                                    key={stat.label}
                                                    className="p-3 rounded-xl text-center"
                                                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                                                >
                                                    <div className="text-white font-bold text-sm">{stat.value}</div>
                                                    <div className="text-zinc-600 text-xs mt-0.5">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Categories */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {plan.categories.map((cat) => (
                                                <span key={cat} className="tag text-xs">{cat}</span>
                                            ))}
                                        </div>

                                        {/* Sample Schedule Preview */}
                                        <div
                                            className="rounded-xl overflow-hidden mb-4"
                                            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                                        >
                                            {plan.workouts.slice(0, 3).map((workout, j) => (
                                                <div
                                                    key={j}
                                                    className="flex items-center justify-between px-4 py-2.5"
                                                    style={{
                                                        background: j % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                                                        borderBottom: j < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                                    }}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-zinc-600 text-xs w-12">{workout.day}</span>
                                                        <span className="text-white text-sm">{workout.name}</span>
                                                    </div>
                                                    <span className="text-zinc-500 text-xs">{workout.duration}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="text-zinc-600 text-xs mb-5 flex items-center gap-1">
                                            <span>🏋️</span>
                                            <span>Equipment: {plan.equipment}</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div
                                        className="px-7 pb-7 pt-0"
                                    >
                                        <Link href="/pricing" className="btn-primary w-full justify-center">
                                            <span>Start This Program</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress Tracking Banner */}
                        <div
                            className="rounded-3xl overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #1a0a0f, #111, #0a0a14)",
                                border: "1px solid rgba(225,29,72,0.2)",
                            }}
                        >
                            <div className="grid md:grid-cols-2 items-center p-10 md:p-14">
                                <div>
                                    <div className="badge mb-6">
                                        <span>📊</span>
                                        <span>Progress Tracking</span>
                                    </div>
                                    <h2 className="text-white font-bold text-3xl font-heading mb-4">
                                        Track Every Rep,<br />
                                        <span className="gradient-text">Measure Every Gain</span>
                                    </h2>
                                    <p className="text-zinc-400 mb-8">
                                        Our intelligent progress tracking system logs your workouts,
                                        tracks personal records, and visualizes your improvement over time
                                        with beautiful analytics.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Link href="/signup" className="btn-primary">
                                            <span>Start Tracking Free</span>
                                        </Link>
                                        <Link href="/dashboard" className="btn-secondary">
                                            View Dashboard
                                        </Link>
                                    </div>
                                </div>

                                {/* Visual tracking preview */}
                                <div className="hidden md:block pl-10">
                                    <div
                                        className="rounded-2xl p-6"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                                    >
                                        <div className="text-zinc-400 text-sm mb-4 font-medium">Bench Press — 12 Weeks</div>
                                        <div className="flex items-end gap-2 h-24 mb-2">
                                            {[60, 65, 67.5, 70, 72.5, 75, 77.5, 80, 82.5, 85, 87.5, 90].map((w, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 rounded-t transition-all"
                                                    style={{
                                                        height: `${((w - 55) / 40) * 100}%`,
                                                        background: i === 11
                                                            ? "linear-gradient(to top, #e11d48, #fb7185)"
                                                            : `rgba(225,29,72,${0.2 + i * 0.07})`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-zinc-500 text-xs">Start: 60 kg</div>
                                            <div className="text-red-400 text-xs font-bold">Now: 90 kg 🚀</div>
                                        </div>
                                        <div
                                            className="mt-4 pt-4 flex gap-6 text-center"
                                            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                                        >
                                            <div>
                                                <div className="text-white font-bold">+50%</div>
                                                <div className="text-zinc-600 text-xs">Strength Gain</div>
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">48</div>
                                                <div className="text-zinc-600 text-xs">Sessions</div>
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">🔥 14</div>
                                                <div className="text-zinc-600 text-xs">Day Streak</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
