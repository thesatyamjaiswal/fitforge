import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    image?: string;
    role: "user" | "admin";
    subscription: {
        plan: "free" | "monthly" | "yearly";
        status: "active" | "inactive" | "cancelled";
        startDate?: Date;
        endDate?: Date;
        razorpaySubscriptionId?: string;
    };
    profile: {
        age?: number;
        weight?: number;
        height?: number;
        fitnessGoal?: string;
        activityLevel?: string;
    };
    progress: Array<{
        date: Date;
        weight?: number;
        workoutCompleted?: boolean;
        caloriesConsumed?: number;
        notes?: string;
    }>;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, select: false },
        image: String,
        role: { type: String, enum: ["user", "admin"], default: "user" },
        subscription: {
            plan: { type: String, enum: ["free", "monthly", "yearly"], default: "free" },
            status: { type: String, enum: ["active", "inactive", "cancelled"], default: "inactive" },
            startDate: Date,
            endDate: Date,
            razorpaySubscriptionId: String,
        },
        profile: {
            age: Number,
            weight: Number,
            height: Number,
            fitnessGoal: String,
            activityLevel: String,
        },
        progress: [
            {
                date: { type: Date, default: Date.now },
                weight: Number,
                workoutCompleted: Boolean,
                caloriesConsumed: Number,
                notes: String,
            },
        ],
    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
