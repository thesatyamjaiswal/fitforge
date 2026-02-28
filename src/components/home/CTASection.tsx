import Link from "next/link";

export default function CTASection() {
    return (
        <section
            className="section relative overflow-hidden"
            style={{ background: "#0d0d0d" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(225,29,72,0.08) 0%, transparent 70%)",
                }}
            />
            <div className="grid-pattern absolute inset-0 opacity-50" />

            <div className="container relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="badge mx-auto mb-8">
                        <span>🎯</span>
                        <span>Limited Time — First Week Free</span>
                    </div>

                    <h2 className="section-title mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
                        Your{" "}
                        <span className="gradient-text">Transformation</span>
                        <br />
                        Starts Right Now
                    </h2>

                    <p className="section-subtitle mx-auto text-lg mb-10">
                        Join 50,000+ members who are crushing their goals with FitForge.
                        Access expert plans, track progress, and get results — starting today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/signup" className="btn-primary px-10 py-4 text-base animate-pulse-red">
                            <span>🚀 Start Your Free Trial</span>
                        </Link>
                        <Link href="/pricing" className="btn-secondary px-10 py-4 text-base">
                            View Pricing Plans
                        </Link>
                    </div>

                    {/* Guarantees */}
                    <div className="flex flex-wrap justify-center gap-6 text-zinc-500 text-sm">
                        {[
                            "✓ No credit card required",
                            "✓ 7-day free trial",
                            "✓ Cancel anytime",
                            "✓ 30-day money back",
                        ].map((item) => (
                            <span key={item} className="flex items-center gap-1">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
