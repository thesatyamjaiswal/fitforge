"use client";

import Link from "next/link";

const footerLinks = {
    Programs: [
        { label: "Workout Plans", href: "/workouts" },
        { label: "Diet Plans", href: "/diet-plans" },
        { label: "Nutrition Guide", href: "/nutrition" },
        { label: "Progress Tracker", href: "/dashboard" },
    ],
    Company: [
        { label: "About Us", href: "#" },
        { label: "Our Trainers", href: "#trainers" },
        { label: "Success Stories", href: "#testimonials" },
        { label: "Pricing", href: "/pricing" },
    ],
    Support: [
        { label: "FAQ", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0a" }}>
            <div className="container section-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                                style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)" }}
                            >
                                FF
                            </div>
                            <span className="text-white font-bold text-xl">
                                Fit<span style={{ color: "#e11d48" }}>Forge</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-6">
                            Transform your body and mind with expert-crafted workout programs,
                            personalized nutrition plans, and professional coaching.
                        </p>
                        <div className="flex gap-3">
                            {["𝕏", "📘", "📸", "▶"].map((icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "#71717a",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.background = "rgba(225,29,72,0.15)";
                                        (e.target as HTMLElement).style.borderColor = "rgba(225,29,72,0.3)";
                                        (e.target as HTMLElement).style.color = "#fb7185";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                                        (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                                        (e.target as HTMLElement).style.color = "#71717a";
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-500 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                    <p className="text-zinc-600 text-sm">
                        © 2025 FitForge. All rights reserved. Built with ❤️ for fitness enthusiasts.
                    </p>
                    <div className="flex items-center gap-2 text-zinc-600 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
