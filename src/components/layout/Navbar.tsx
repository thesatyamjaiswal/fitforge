"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/nutrition", label: "Nutrition" },
    { href: "/diet-plans", label: "Diet Plans" },
    { href: "/workouts", label: "Workouts" },
    { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur border-b border-white/5 shadow-lg" : ""
                }`}
            style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
        >
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"
                            style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)" }}
                        >
                            FF
                        </div>
                        <div>
                            <span className="text-white font-bold text-xl tracking-tight">Fit</span>
                            <span className="font-bold text-xl tracking-tight" style={{ color: "#e11d48" }}>Forge</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                                        ? "text-white bg-white/10"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        {session ? (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-xs font-bold">
                                        {session.user?.name?.[0]?.toUpperCase() || "U"}
                                    </div>
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-red-400 transition-all"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-all"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="btn-primary text-sm px-5 py-2.5"
                                >
                                    <span>Get Started</span>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden nav-blur border-t border-white/5 px-4 pb-6 pt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-4 flex flex-col gap-2">
                        {session ? (
                            <>
                                <Link href="/dashboard" className="btn-secondary text-center justify-center" onClick={() => setMobileOpen(false)}>
                                    Dashboard
                                </Link>
                                <button onClick={() => signOut({ callbackUrl: "/" })} className="btn-outline-red justify-center">
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="btn-secondary text-center justify-center" onClick={() => setMobileOpen(false)}>
                                    Sign In
                                </Link>
                                <Link href="/signup" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                                    <span>Get Started Free</span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
