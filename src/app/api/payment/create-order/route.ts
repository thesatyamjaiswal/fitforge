import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { plan } = await req.json();
        if (!["monthly", "yearly"].includes(plan)) {
            return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
        }

        const amount = plan === "monthly" ? 49900 : 499900; // in paise (₹499/mo, ₹4999/yr)
        const currency = "INR";

        // Razorpay Order creation (server-side)
        const key_id = process.env.RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        if (!key_id || !key_secret) {
            return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
        }

        const authHeader = "Basic " + Buffer.from(`${key_id}:${key_secret}`).toString("base64");

        const response = await fetch("https://api.razorpay.com/v1/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authHeader,
            },
            body: JSON.stringify({
                amount,
                currency,
                receipt: `receipt_${Date.now()}`,
                notes: { plan, userEmail: session.user.email },
            }),
        });

        const order = await response.json();
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
        }

        return NextResponse.json({ orderId: order.id, amount, currency, plan });
    } catch (error) {
        console.error("Payment order error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
