import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";

export const metadata: Metadata = {
  title: "FitForge — Premium Gym & Fitness Coaching",
  description: "Transform your body with personalized workout plans, expert nutrition guidance, and premium coaching. Join thousands of members achieving their fitness goals.",
  keywords: "gym, fitness, coaching, workout plans, nutrition, diet plans, personal training",
  openGraph: {
    title: "FitForge — Premium Gym & Fitness Coaching",
    description: "Transform your body with personalized workout plans, expert nutrition guidance, and premium coaching.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
