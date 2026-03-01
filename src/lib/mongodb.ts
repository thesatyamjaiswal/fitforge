import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI not found in environment variables. Using fallback.");
}

const uri = MONGODB_URI || "mongodb://localhost:27017/fitforge";

interface GlobalMongoose {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: GlobalMongoose | undefined;
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached!.conn) return cached!.conn;

    if (!cached!.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        };
        cached!.promise = mongoose.connect(uri, opts).then((mongoose) => {
            console.log("✅ MongoDB connected successfully");
            return mongoose;
        });
    }

    try {
        cached!.conn = await cached!.promise;
    } catch (e) {
        cached!.promise = null;
        console.error("❌ MongoDB connection failed:", e);
        throw e;
    }

    return cached!.conn;
}

export default connectDB;
