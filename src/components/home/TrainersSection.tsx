"use client";

const trainers = [
    {
        name: "Raj Malhotra",
        title: "Head Strength Coach",
        exp: "12 Years Experience",
        specialty: "Powerlifting & Hypertrophy",
        cert: "CSCS, NSCA",
        emoji: "💪",
        clients: "500+",
        rating: 4.9,
    },
    {
        name: "Priya Sharma",
        title: "Nutrition Specialist",
        exp: "8 Years Experience",
        specialty: "Sports Nutrition & Weight Management",
        cert: "RD, CISSN",
        emoji: "🥗",
        clients: "300+",
        rating: 4.8,
    },
    {
        name: "Vikram Singh",
        title: "HIIT & Cardio Expert",
        exp: "10 Years Experience",
        specialty: "Fat Loss & Athletic Performance",
        cert: "ACSM, CPT",
        emoji: "🏃",
        clients: "450+",
        rating: 4.9,
    },
    {
        name: "Nisha Patel",
        title: "Yoga & Flexibility Coach",
        exp: "7 Years Experience",
        specialty: "Mobility, Recovery & Mind-Body",
        cert: "RYT-500, FMS",
        emoji: "🧘",
        clients: "250+",
        rating: 5.0,
    },
];

export default function TrainersSection() {
    return (
        <section id="trainers" className="section" style={{ background: "#0a0a0a" }}>
            <div className="container">
                <div className="text-center mb-16">
                    <div className="badge mx-auto mb-6">
                        <span>👨‍💼</span>
                        <span>Expert Team</span>
                    </div>
                    <h2 className="section-title mb-5">
                        Meet Your{" "}
                        <span className="gradient-text">Elite Coaches</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        World-class certified professionals dedicated to your transformation
                        with proven track records of results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, i) => (
                        <div key={i} className="card p-6 text-center group relative overflow-hidden">
                            {/* Avatar */}
                            <div className="relative mb-5">
                                <div
                                    className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-4xl group-hover:scale-110 transition-transform"
                                    style={{
                                        background: "linear-gradient(135deg, #1c1c1c, #2a0a14)",
                                        border: "2px solid rgba(225,29,72,0.3)",
                                    }}
                                >
                                    {trainer.emoji}
                                </div>
                                <div
                                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                    style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)" }}
                                >
                                    ✓
                                </div>
                            </div>

                            <h3 className="text-white font-bold text-lg mb-1">{trainer.name}</h3>
                            <div className="text-red-400 text-sm font-medium mb-1">{trainer.title}</div>
                            <div className="text-zinc-500 text-xs mb-4">{trainer.exp}</div>

                            <div className="text-zinc-400 text-xs mb-5 leading-relaxed">{trainer.specialty}</div>

                            {/* Stats row */}
                            <div
                                className="flex gap-3 justify-center mb-5 pb-5"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                            >
                                <div className="text-center">
                                    <div className="text-white font-bold text-sm">{trainer.clients}</div>
                                    <div className="text-zinc-600 text-xs">Clients</div>
                                </div>
                                <div className="w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                                <div className="text-center">
                                    <div className="text-white font-bold text-sm">{trainer.rating}</div>
                                    <div className="text-zinc-600 text-xs">Rating</div>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="tag text-xs">{trainer.cert}</div>

                            {/* Book button */}
                            <button className="btn-outline-red w-full justify-center mt-4 text-xs py-2">
                                Book Session
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
