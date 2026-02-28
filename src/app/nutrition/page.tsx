import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nutrition Articles | FitForge",
    description: "Evidence-based nutrition articles on macros, supplements, meal timing, and diet strategies for peak performance.",
};

const articles = [
    {
        category: "Macronutrients",
        icon: "🥩",
        title: "The Complete Guide to Protein: How Much You Really Need",
        desc: "Protein intake myths debunked. Discover the science-backed optimal range for muscle building, fat loss, and general health based on your goals.",
        readTime: "8 min read",
        tags: ["Protein", "Muscle Gain", "Science"],
        featured: true,
    },
    {
        category: "Fat Loss",
        icon: "🔥",
        title: "Caloric Deficit Mastery: Lose Fat Without Losing Muscle",
        desc: "How to set the right deficit, protect lean mass, and maintain energy throughout your cut. Includes real-world protocols used by physique athletes.",
        readTime: "10 min read",
        tags: ["Fat Loss", "Dieting", "Metabolism"],
        featured: true,
    },
    {
        category: "Supplements",
        icon: "💊",
        title: "The Only Supplements Worth Your Money (And 5 to Skip)",
        desc: "A science-first evaluation of popular supplements including creatine, whey, BCAAs, pre-workouts, and more. Save money and get actual results.",
        readTime: "12 min read",
        tags: ["Supplements", "Creatine", "Whey"],
        featured: false,
    },
    {
        category: "Carbohydrates",
        icon: "🌾",
        title: "Carb Cycling: The Ultimate Strategy for Body Recomposition",
        desc: "How strategic carbohydrate manipulation can help you build muscle and lose fat simultaneously — the right way to cycle carbs around workouts.",
        readTime: "9 min read",
        tags: ["Carbs", "Recomp", "Performance"],
        featured: false,
    },
    {
        category: "Meal Timing",
        icon: "⏰",
        title: "Pre & Post-Workout Nutrition: Fuel Performance, Speed Recovery",
        desc: "What to eat before training, the anabolic window myth vs. reality, and the best post-workout nutrition protocols for maximizing your gains.",
        readTime: "7 min read",
        tags: ["Timing", "Pre-Workout", "Recovery"],
        featured: false,
    },
    {
        category: "Hydration",
        icon: "💧",
        title: "Hydration for Athletes: Performance Impact & Optimization",
        desc: "Even mild dehydration reduces strength and endurance. Learn how much water you really need based on activity level, sweat rate, and climate.",
        readTime: "6 min read",
        tags: ["Hydration", "Water", "Performance"],
        featured: false,
    },
    {
        category: "Gut Health",
        icon: "🦠",
        title: "Gut Microbiome and Athletic Performance: The Hidden Connection",
        desc: "New research links gut health to energy, recovery, immune function, and even body composition. How to optimize your microbiome for better training.",
        readTime: "11 min read",
        tags: ["Gut Health", "Recovery", "Research"],
        featured: false,
    },
    {
        category: "Fasting",
        icon: "🌙",
        title: "Intermittent Fasting for Gym-Goers: Does It Work?",
        desc: "A balanced look at IF for people who lift weights. The real benefits, limitations, and how to implement it without sacrificing performance.",
        readTime: "9 min read",
        tags: ["Intermittent Fasting", "Weight Loss"],
        featured: false,
    },
];

const categories = ["All", "Macronutrients", "Fat Loss", "Supplements", "Carbohydrates", "Meal Timing", "Hydration"];

export default function NutritionPage() {
    const featured = articles.filter((a) => a.featured);
    const regular = articles.filter((a) => !a.featured);

    return (
        <main>
            <Navbar />
            <div className="pt-20">
                {/* Hero */}
                <section
                    className="relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #0a0a0a, #111)",
                        padding: "80px 0",
                    }}
                >
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(225,29,72,0.15), transparent)",
                        }}
                    />
                    <div className="container relative z-10">
                        <div className="badge mb-6">
                            <span>📚</span>
                            <span>Evidence-Based Nutrition</span>
                        </div>
                        <h1 className="section-title mb-5">
                            Nutrition{" "}
                            <span className="gradient-text">Knowledge Hub</span>
                        </h1>
                        <p className="section-subtitle">
                            Science-backed articles, guides, and strategies to optimize your
                            nutrition for performance, aesthetics, and longevity.
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <div
                    className="sticky top-20 z-40 border-b"
                    style={{
                        background: "rgba(10,10,10,0.95)",
                        backdropFilter: "blur(20px)",
                        borderColor: "rgba(255,255,255,0.06)",
                    }}
                >
                    <div className="container">
                        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${cat === "All"
                                            ? "text-white"
                                            : "text-zinc-500 hover:text-white hover:bg-white/5"
                                        }`}
                                    style={
                                        cat === "All"
                                            ? { background: "rgba(225,29,72,0.2)", border: "1px solid rgba(225,29,72,0.3)" }
                                            : { background: "transparent", border: "1px solid transparent" }
                                    }
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="section">
                    <div className="container">
                        {/* Featured Articles */}
                        <h2 className="text-white font-bold text-2xl mb-8">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {featured.map((article, i) => (
                                <div
                                    key={i}
                                    className="card p-8 cursor-pointer hover:border-red-500/30 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                            style={{ background: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.2)" }}
                                        >
                                            {article.icon}
                                        </div>
                                        <span className="tag-red tag text-xs">{article.category}</span>
                                        <span className="text-zinc-600 text-xs ml-auto">{article.readTime}</span>
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-red-400 transition-colors leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-5">{article.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {article.tags.map((tag) => (
                                            <span key={tag} className="tag text-xs">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-red-400 text-sm font-medium group-hover:gap-3 transition-all">
                                        <span>Read Article</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* All Articles */}
                        <h2 className="text-white font-bold text-2xl mb-8">All Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {regular.map((article, i) => (
                                <div
                                    key={i}
                                    className="card p-6 cursor-pointer hover:border-red-500/30 transition-all group"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                                    >
                                        {article.icon}
                                    </div>
                                    <span className="tag text-xs mb-3 block">{article.category}</span>
                                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-400 transition-colors leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-zinc-600 text-xs leading-relaxed mb-4 line-clamp-3">{article.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-zinc-600 text-xs">{article.readTime}</span>
                                        <span className="text-red-400 text-xs group-hover:mr-1 transition-all">Read →</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Newsletter signup */}
                        <div
                            className="mt-20 rounded-3xl p-10 text-center"
                            style={{
                                background: "linear-gradient(135deg, rgba(225,29,72,0.08), rgba(159,18,57,0.04))",
                                border: "1px solid rgba(225,29,72,0.15)",
                            }}
                        >
                            <div className="text-3xl mb-4">📬</div>
                            <h3 className="text-white font-bold text-2xl mb-3">Get Weekly Nutrition Updates</h3>
                            <p className="text-zinc-400 mb-6">
                                New evidence-based articles delivered to your inbox every week. No spam, ever.
                            </p>
                            <div className="flex gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    className="input-field flex-1"
                                    placeholder="your@email.com"
                                />
                                <button className="btn-primary whitespace-nowrap">
                                    <span>Subscribe</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
