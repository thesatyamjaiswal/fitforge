"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false,
        });

        setLoading(false);
        if (res?.error) {
            setError("Invalid username, email, or password. Please try again.");
        } else {
            router.push("/dashboard");
        }
    };

    const handleGoogle = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };

    return (
        <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen pt-20">
                <div className="w-full max-w-md px-6">
                    {/* Card */}
                    <div
                        className="rounded-3xl p-8 md:p-10"
                        style={{
                            background: "#111",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                        }}
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div
                                className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center font-bold text-xl"
                                style={{ background: "linear-gradient(135deg, #e11d48, #9f1239)" }}
                            >
                                FF
                            </div>
                            <h1 className="text-white font-bold text-2xl mb-2">Welcome Back</h1>
                            <p className="text-zinc-500 text-sm">Sign in to continue your fitness journey</p>
                        </div>

                        {/* Google */}
                        <button
                            onClick={handleGoogle}
                            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl mb-6 font-medium text-sm transition-all hover:bg-white/8"
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "white",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18">
                                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
                                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
                                <path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" />
                                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" />
                            </svg>
                            Continue with Google
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                            <span className="text-zinc-600 text-xs">OR</span>
                            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-zinc-400 text-sm font-medium mb-2">Email or Username</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="your_username or you@example.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-zinc-400 text-sm font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    required
                                />
                            </div>

                            {error && (
                                <div
                                    className="p-3 rounded-xl text-red-400 text-sm"
                                    style={{ background: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.2)" }}
                                >
                                    {error}
                                </div>
                            )}

                            <div className="flex justify-end">
                                <a href="#" className="text-red-400 text-sm hover:text-red-300 transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary w-full justify-center py-3.5 text-base"
                                style={{ opacity: loading ? 0.7 : 1 }}
                            >
                                <span>{loading ? "Signing in..." : "Sign In"}</span>
                            </button>
                        </form>

                        <p className="text-center text-zinc-500 text-sm mt-6">
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-red-400 font-medium hover:text-red-300 transition-colors">
                                Sign up free
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
