import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        if (password.length < 8) {
            return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
        }

        try {
            await connectDB();
        } catch (dbError) {
            console.error("Database connection error:", dbError);
            return NextResponse.json(
                { error: "Unable to connect to database. Please try again later." },
                { status: 503 }
            );
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json({ error: "Email already registered. Please sign in instead." }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            role: "user",
            subscription: {
                plan: "free",
                status: "active",
                startDate: new Date(),
            },
        });

        return NextResponse.json({
            message: "Account created successfully! Redirecting to dashboard...",
            user: { id: user._id.toString(), name: user.name, email: user.email },
        }, { status: 201 });
    } catch (error: unknown) {
        console.error("Signup error:", error);

        // Handle MongoDB duplicate key error
        if (error && typeof error === "object" && "code" in error && (error as { code: number }).code === 11000) {
            return NextResponse.json({ error: "Email already registered. Please sign in instead." }, { status: 400 });
        }

        return NextResponse.json(
            { error: "Something went wrong during registration. Please try again." },
            { status: 500 }
        );
    }
}
