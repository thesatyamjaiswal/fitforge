import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Diet Plans | FitForge",
    description: "Evidence-based diet plans for weight loss, muscle gain, and maintenance. Personalized nutrition strategies built by expert nutritionists.",
};

const plans = [
    {
        id: "weight-loss",
        name: "Weight Loss",
        icon: "🔥",
        tagline: "Shred Fat, Preserve Muscle",
        desc: "A caloric deficit protocol designed to maximize fat burning while preserving hard-earned muscle mass. Includes flexible macro targets, meal timing, and cheat meal strategy.",
        dailyCalories: "1,800 – 2,000",
        protein: "40%",
        carbs: "35%",
        fats: "25%",
        duration: "12 Weeks",
        difficulty: "Moderate",
        color: "#e11d48",
        features: [
            "Caloric deficit calculator",
            "Flexible meal options",
            "Weekly diet adjustments",
            "Cheat meal protocol",
            "Cardio integration guide",
            "Supplement stack recommended",
        ],
        meals: [
            { time: "7:00 AM", name: "Breakfast", items: "Egg white omelette, oats, berries", cals: "430 cal" },
            { time: "10:30 AM", name: "Snack", items: "Greek yogurt, almonds", cals: "210 cal" },
            { time: "1:00 PM", name: "Lunch", items: "Grilled chicken, brown rice, salad", cals: "550 cal" },
            { time: "4:00 PM", name: "Pre-Workout", items: "Apple, whey protein shake", cals: "280 cal" },
            { time: "7:30 PM", name: "Dinner", items: "Baked fish, sweet potato, broccoli", cals: "490 cal" },
            { time: "10:00 PM", name: "Night Snack", items: "Casein protein, cucumber", cals: "180 cal" },
        ],
        popular: false,
    },
    {
        id: "muscle-gain",
        name: "Muscle Gain",
        icon: "💪",
        tagline: "Maximize Muscle, Minimize Fat",
        desc: "A strategic caloric surplus with high protein intake to fuel maximum muscle protein synthesis. Every macro is optimized for anabolic muscle growth with minimal fat gain.",
        dailyCalories: "2,800 – 3,200",
        protein: "35%",
        carbs: "45%",
        fats: "20%",
        duration: "16 Weeks",
        difficulty: "Intense",
        color: "#3b82f6",
        features: [
            "Lean bulk calorie calculator",
            "Progressive protein targets",
            "Pre/post workout nutrition",
            "Carb cycling on training days",
            "Mass-building food list",
            "Supplement stack for growth",
        ],
        meals: [
            { time: "6:30 AM", name: "Breakfast", items: "5 eggs, oatmeal, banana, milk", cals: "720 cal" },
            { time: "10:00 AM", name: "Snack", items: "Mass gainer shake, peanut butter toast", cals: "480 cal" },
            { time: "1:00 PM", name: "Lunch", items: "Double chicken rice bowl, beans", cals: "780 cal" },
            { time: "4:00 PM", name: "Pre-Workout", items: "Rice cakes, protein shake, creatine", cals: "350 cal" },
            { time: "7:00 PM", name: "Post-Workout", items: "Whey protein, fast carbs (banana, rice)", cals: "420 cal" },
            { time: "9:30 PM", name: "Dinner", items: "Steak, pasta, olive oil, vegetables", cals: "850 cal" },
        ],
        popular: true,
    },
    {
        id: "maintenance",
        name: "Maintenance",
        icon: "⚖️",
        tagline: "Stay Lean, Stay Strong",
        desc: "A balanced nutrition protocol at maintenance calories for those who want to maintain their current physique, enhance performance and long-term sustainable health.",
        dailyCalories: "2,200 – 2,500",
        protein: "30%",
        carbs: "40%",
        fats: "30%",
        duration: "Ongoing",
        difficulty: "Flexible",
        color: "#10b981",
        features: [
            "TDEE-based calorie targets",
            "Balanced macros",
            "Intuitive eating principles",
            "Performance nutrition",
            "Social eating guide",
            "Micronutrient optimization",
        ],
        meals: [
            { time: "7:00 AM", name: "Breakfast", items: "Whole eggs, avocado toast, coffee", cals: "520 cal" },
            { time: "10:30 AM", name: "Snack", items: "Mixed nuts, fruit", cals: "250 cal" },
            { time: "1:00 PM", name: "Lunch", items: "Tuna wrap, vegetables, yogurt", cals: "580 cal" },
            { time: "4:00 PM", name: "Snack", items: "Protein bar, green tea", cals: "220 cal" },
            { time: "7:00 PM", name: "Dinner", items: "Salmon fillet, quinoa, roasted veggies", cals: "620 cal" },
            { time: "9:30 PM", name: "Night Snack", items: "Cottage cheese, berries", cals: "180 cal" },
        ],
        popular: false,
    },
];

export default function DietPlansPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                {/* Hero */}
                <section
                    className="relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0a0a0a, #111)", padding: "80px 0" }}
                >
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(225,29,72,0.15), transparent)",
                        }}
                    />
                    <div className="container relative z-10">
                        <div className="badge mb-6">
                            <span>🥗</span>
                            <span>Expert-Designed Diet Plans</span>
                        </div>
                        <h1 className="section-title mb-5">
                            Fuel Your <span className="gradient-text">Transformation</span>
                        </h1>
                        <p className="section-subtitle">
                            Science-backed meal plans designed by registered dietitians.
                            Choose your goal, follow the plan, and watch your body transform.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        {/* Plan Cards */}
                        <div className="grid lg:grid-cols-3 gap-8 mb-20">
                            {plans.map((plan, i) => (
                                <div
                                    key={i}
                                    className="card overflow-hidden group relative"
                                    style={{
                                        border: plan.popular
                                            ? `1px solid rgba(225,29,72,0.4)`
                                            : "1px solid rgba(255,255,255,0.08)",
                                        boxShadow: plan.popular ? "0 0 40px rgba(225,29,72,0.1)" : "none",
                                    }}
                                >
                                    {plan.popular && (
                                        <div
                                            className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full z-10"
                                            style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)", color: "white" }}
                                        >
                                            MOST POPULAR
                                        </div>
                                    )}

                                    {/* Plan header */}
                                    <div className="p-8 pb-0">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                                                style={{
                                                    background: `${plan.color}15`,
                                                    border: `1px solid ${plan.color}30`,
                                                }}
                                            >
                                                {plan.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-white font-bold text-2xl font-heading">{plan.name}</h2>
                                                <div className="text-sm font-medium" style={{ color: plan.color }}>
                                                    {plan.tagline}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6">{plan.desc}</p>

                                        {/* Macro breakdown */}
                                        <div
                                            className="grid grid-cols-3 gap-3 p-4 rounded-xl mb-6"
                                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                                        >
                                            {["Protein", "Carbs", "Fats"].map((macro, j) => (
                                                <div key={macro} className="text-center">
                                                    <div
                                                        className="text-lg font-bold"
                                                        style={{ color: [plan.color, "#f59e0b", "#a855f7"][j] }}
                                                    >
                                                        {[plan.protein, plan.carbs, plan.fats][j]}
                                                    </div>
                                                    <div className="text-zinc-600 text-xs">{macro}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 text-sm mb-6">
                                            <div>
                                                <span className="text-zinc-500">Calories: </span>
                                                <span className="text-white font-medium">{plan.dailyCalories}</span>
                                            </div>
                                            <div>
                                                <span className="text-zinc-500">Duration: </span>
                                                <span className="text-white font-medium">{plan.duration}</span>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-2 mb-6">
                                            {plan.features.map((f) => (
                                                <div key={f} className="flex items-center gap-2 text-zinc-400 text-sm">
                                                    <span style={{ color: plan.color }}>✓</span>
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Meal preview */}
                                    <div
                                        className="mx-6 mb-6 rounded-xl overflow-hidden"
                                        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                                    >
                                        <div
                                            className="px-4 py-3 text-xs font-medium uppercase tracking-wider"
                                            style={{ background: "rgba(255,255,255,0.04)", color: "#71717a" }}
                                        >
                                            Sample Meal Plan
                                        </div>
                                        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                                            {plan.meals.slice(0, 4).map((meal, j) => (
                                                <div key={j} className="flex items-center justify-between px-4 py-2.5">
                                                    <div>
                                                        <span className="text-xs text-zinc-600 mr-2">{meal.time}</span>
                                                        <span className="text-white text-sm font-medium">{meal.name}</span>
                                                        <div className="text-zinc-500 text-xs">{meal.items}</div>
                                                    </div>
                                                    <span className="text-xs font-medium" style={{ color: plan.color }}>
                                                        {meal.cals}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="px-8 pb-8">
                                        <Link
                                            href="/pricing"
                                            className="btn-primary w-full justify-center"
                                            style={
                                                !plan.popular
                                                    ? {
                                                        background: "rgba(255,255,255,0.06)",
                                                        boxShadow: "none",
                                                        color: "white",
                                                    }
                                                    : {}
                                            }
                                        >
                                            <span>Get This Plan</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-white font-bold text-2xl mb-8 text-center">Common Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Are these plans suitable for vegetarians/vegans?",
                                        a: "Yes! All plans can be customized for vegetarian and vegan lifestyles. Premium members get personalized meal alternatives.",
                                    },
                                    {
                                        q: "How quickly can I expect results?",
                                        a: "Most members see measurable results within 2-4 weeks when following the plan consistently combined with the recommended workout program.",
                                    },
                                    {
                                        q: "Can I adjust the calorie targets?",
                                        a: "Premium members have access to a full macro calculator and customizable targets based on your TDEE and specific body composition goals.",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="p-6 rounded-xl"
                                        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
                                    >
                                        <div className="text-white font-semibold mb-2">{item.q}</div>
                                        <div className="text-zinc-500 text-sm">{item.a}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
