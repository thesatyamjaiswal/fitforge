import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import crypto from "crypto";
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, plan } = await req.json();

        const key_secret = process.env.RAZORPAY_KEY_SECRET!;
        const expectedSignature = crypto
            .createHmac("sha256", key_secret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
        }

        // Update user subscription
        await connectDB();
        const startDate = new Date();
        const endDate = new Date();
        if (plan === "monthly") {
            endDate.setMonth(endDate.getMonth() + 1);
        } else {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        await User.findOneAndUpdate(
            { email: session.user.email },
            {
                "subscription.plan": plan,
                "subscription.status": "active",
                "subscription.startDate": startDate,
                "subscription.endDate": endDate,
                "subscription.razorpaySubscriptionId": razorpay_payment_id,
            }
        );

        return NextResponse.json({ success: true, message: "Subscription activated!" });
    } catch (error) {
        console.error("Payment verify error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
