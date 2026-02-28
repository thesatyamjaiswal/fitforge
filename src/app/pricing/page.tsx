"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useSession } from "next-auth/react";

const plans = [
    {
        id: "free",
        name: "Free",
        price: 0,
        period: "forever",
        desc: "Get started on your fitness journey",
        color: "#71717a",
        features: [
            { text: "Basic workout plans (3 programs)", included: true },
            { text: "Nutrition knowledge articles", included: true },
            { text: "Progress tracking (7 days)", included: true },
            { text: "Community access", included: true },
            { text: "Personalized diet plans", included: false },
            { text: "Advanced workout programs", included: false },
            { text: "1-on-1 trainer coaching", included: false },
            { text: "Unlimited progress history", included: false },
            { text: "Priority support", included: false },
        ],
        cta: "Get Started Free",
        href: "/signup",
    },
    {
        id: "monthly",
        name: "Pro Monthly",
        price: 499,
        period: "month",
        desc: "Full access to all features, billed monthly",
        color: "#e11d48",
        popular: true,
        features: [
            { text: "All workout programs (200+)", included: true },
            { text: "Personalized diet plans", included: true },
            { text: "Macro & calorie tracker", included: true },
            { text: "Unlimited progress history", included: true },
            { text: "1-on-1 trainer messaging", included: true },
            { text: "Weekly plan adjustments", included: true },
            { text: "Downloadable meal plans", included: true },
            { text: "Premium video tutorials", included: true },
            { text: "Priority support (24hr)", included: true },
        ],
        cta: "Start 7-Day Free Trial",
        planKey: "monthly",
    },
    {
        id: "yearly",
        name: "Pro Yearly",
        price: 4999,
        period: "year",
        originalPrice: 5988,
        saving: "Save ₹989",
        desc: "Best value — 2 months free with annual plan",
        color: "#f59e0b",
        features: [
            { text: "Everything in Pro Monthly", included: true },
            { text: "2 months FREE (₹989 savings)", included: true },
            { text: "Priority trainer assignment", included: true },
            { text: "Quarterly progress reports", included: true },
            { text: "Body transformation blueprint", included: true },
            { text: "Exclusive recipe library (500+)", included: true },
            { text: "Live group coaching sessions", included: true },
            { text: "Mobile app access (coming soon)", included: true },
            { text: "Concierge support", included: true },
        ],
        cta: "Get Best Value",
        planKey: "yearly",
    },
];

const faqs = [
    {
        q: "How does the 7-day free trial work?",
        a: "You get full Pro Monthly access for 7 days completely free. No credit card needed to start. If you love it, your subscription begins on day 8.",
    },
    {
        q: "Can I cancel anytime?",
        a: "Absolutely. Cancel anytime from your dashboard or by contacting our support team. No cancellation fees or long-term commitments.",
    },
    {
        q: "Is there a money-back guarantee?",
        a: "Yes! We offer a 30-day money-back guarantee if you're not satisfied for any reason. Just contact us and we'll process a full refund.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept UPI, credit/debit cards, net banking, and wallets (Paytm, PhonePe, Google Pay) via Razorpay — India's most trusted payment gateway.",
    },
    {
        q: "Can I share my account with family?",
        a: "Each subscription is for one user. However, family plans with multiple profiles are coming soon. Contact us for early access.",
    },
];

export default function PricingPage() {
    const { data: session } = useSession();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [loading, setLoading] = useState<string | null>(null);

    const handlePayment = async (planKey: string) => {
        if (!session) {
            window.location.href = "/signup";
            return;
        }

        setLoading(planKey);
        try {
            const res = await fetch("/api/payment/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ plan: planKey }),
            });
            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Payment failed. Please try again.");
                return;
            }

            const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
            if (typeof window !== "undefined" && (window as any).Razorpay) {
                const rzp = new (window as any).Razorpay({
                    key: razorpayKey,
                    amount: data.amount,
                    currency: data.currency,
                    name: "FitForge",
                    description: `${planKey === "monthly" ? "Monthly" : "Yearly"} Premium Subscription`,
                    order_id: data.orderId,
                    handler: async (response: any) => {
                        const verifyRes = await fetch("/api/payment/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ ...response, plan: planKey }),
                        });
                        const verifyData = await verifyRes.json();
                        if (verifyData.success) {
                            alert("🎉 Subscription activated! Welcome to FitForge Premium!");
                            window.location.href = "/dashboard";
                        }
                    },
                    prefill: {
                        name: session.user?.name,
                        email: session.user?.email,
                    },
                    theme: { color: "#e11d48" },
                });
                rzp.open();
            } else {
                alert("Payment gateway loading... Please try again.");
            }
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(null);
        }
    };

    return (
        <main>
            <Navbar />
            {/* Load Razorpay SDK */}
            <script src="https://checkout.razorpay.com/v1/checkout.js" async />

            <div className="pt-20">
                {/* Hero */}
                <section
                    className="relative overflow-hidden"
                    style={{ background: "#0a0a0a", padding: "80px 0 60px" }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(225,29,72,0.12), transparent)",
                        }}
                    />
                    <div className="container relative z-10 text-center">
                        <div className="badge mx-auto mb-6">
                            <span>💎</span>
                            <span>Simple, Transparent Pricing</span>
                        </div>
                        <h1 className="section-title mb-5">
                            Invest in Your <span className="gradient-text">Best Self</span>
                        </h1>
                        <p className="section-subtitle mx-auto text-center">
                            Less than a coffee a day for a complete transformation system.
                            Start free, upgrade when you&apos;re ready.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
                            {plans.map((plan, i) => (
                                <div
                                    key={i}
                                    className="rounded-3xl overflow-hidden flex flex-col relative"
                                    style={{
                                        background: "#111",
                                        border: plan.popular
                                            ? "1px solid rgba(225,29,72,0.4)"
                                            : plan.id === "yearly"
                                                ? "1px solid rgba(245,158,11,0.3)"
                                                : "1px solid rgba(255,255,255,0.08)",
                                        boxShadow: plan.popular ? "0 0 50px rgba(225,29,72,0.12)" : "none",
                                    }}
                                >
                                    {plan.popular && (
                                        <div
                                            className="text-center py-2 text-xs font-bold tracking-wider"
                                            style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)", color: "white" }}
                                        >
                                            ⭐ MOST POPULAR
                                        </div>
                                    )}
                                    {plan.id === "yearly" && (
                                        <div
                                            className="text-center py-2 text-xs font-bold tracking-wider"
                                            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#1a1a1a" }}
                                        >
                                            🏆 BEST VALUE — {plan.saving}
                                        </div>
                                    )}

                                    <div className="p-8 flex-1">
                                        {/* Plan name */}
                                        <div className="mb-6">
                                            <h2 className="text-white font-bold text-xl mb-1">{plan.name}</h2>
                                            <p className="text-zinc-500 text-sm">{plan.desc}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-zinc-400 text-xl">₹</span>
                                                <span
                                                    className="text-5xl font-bold"
                                                    style={{ color: plan.price === 0 ? "white" : plan.color, fontFamily: "'Bebas Neue', sans-serif" }}
                                                >
                                                    {plan.price.toLocaleString()}
                                                </span>
                                                <span className="text-zinc-500 text-sm">/{plan.period}</span>
                                            </div>
                                            {plan.originalPrice && (
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-zinc-600 line-through text-sm">
                                                        ₹{plan.originalPrice.toLocaleString()}/year
                                                    </span>
                                                    <span className="text-green-400 text-xs font-bold">{plan.saving}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feat, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm">
                                                    <span className={feat.included ? "text-green-400 mt-0.5" : "text-zinc-700 mt-0.5"}>
                                                        {feat.included ? "✓" : "✕"}
                                                    </span>
                                                    <span className={feat.included ? "text-zinc-300" : "text-zinc-600"}>
                                                        {feat.text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="px-8 pb-8">
                                        {plan.href ? (
                                            <a
                                                href={plan.href}
                                                className="btn-secondary w-full justify-center py-3.5"
                                            >
                                                {plan.cta}
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => handlePayment(plan.planKey!)}
                                                disabled={loading === plan.planKey}
                                                className="btn-primary w-full justify-center py-3.5"
                                                style={
                                                    plan.id === "yearly"
                                                        ? { background: "linear-gradient(135deg, #f59e0b, #d97706)" }
                                                        : {}
                                                }
                                            >
                                                <span>{loading === plan.planKey ? "Processing..." : plan.cta}</span>
                                            </button>
                                        )}
                                        {plan.planKey && (
                                            <p className="text-center text-zinc-600 text-xs mt-3">
                                                {plan.id === "monthly" ? "7-day free trial · Cancel anytime" : "30-day money-back guarantee"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap justify-center gap-8 mb-20 text-zinc-500 text-sm">
                            {[
                                { icon: "🔒", text: "Secure payments via Razorpay" },
                                { icon: "↩️", text: "30-day money-back guarantee" },
                                { icon: "❌", text: "Cancel anytime" },
                                { icon: "🔐", text: "256-bit SSL encryption" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* FAQs */}
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-white font-bold text-2xl mb-8 text-center">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl overflow-hidden cursor-pointer"
                                        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <div className="flex items-center justify-between p-5">
                                            <span className="text-white font-medium text-sm">{faq.q}</span>
                                            <span
                                                className="text-zinc-500 transition-transform"
                                                style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                                            >
                                                +
                                            </span>
                                        </div>
                                        {openFaq === i && (
                                            <div
                                                className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed"
                                                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                                            >
                                                <div className="pt-4">{faq.a}</div>
                                            </div>
                                        )}
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
