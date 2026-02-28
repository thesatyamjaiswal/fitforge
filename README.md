# 🏋️ FitForge — Premium Gym & Fitness Coaching Website

> A modern, full-stack fitness coaching platform with personalized workout plans, nutrition guidance, progress tracking, and Razorpay payment integration.

![FitForge](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-7-green?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)

---

## ✨ Features

### 🌐 Public Pages
- **Home Page** — Hero section, services overview, trainer profiles, testimonials, and CTA
- **Workout Plans** — Beginner to Advanced programs with schedules and progress tracking UI
- **Diet Plans** — Weight Loss, Muscle Gain & Maintenance plans with macro breakdowns and meal previews
- **Nutrition Hub** — Evidence-based articles with category filters and newsletter signup
- **Pricing** — Free / Monthly / Yearly tiers with integrated Razorpay payment

### 🔐 Authentication
- Email/Password registration with bcrypt hashing
- Google OAuth sign-in
- JWT session strategy via NextAuth.js

### 📊 User Dashboard
- Workout progress tracker (weekly view)
- Nutrition macro tracker
- Body measurements & weight chart
- Profile settings
- Premium content gating

### 💳 Payment Gateway
- Razorpay integration (India's leading payment gateway)
- Supports UPI, Cards, Net Banking, Wallets
- Subscription activation on verified payment
- 30-day money-back guarantee support

### 🎨 Design
- Premium dark theme (Black, Red, White)
- Glassmorphism effects
- Smooth CSS animations
- Mobile-responsive layout
- Custom fonts: Bebas Neue, Oswald, Inter

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + Custom CSS |
| Database | MongoDB + Mongoose |
| Auth | NextAuth.js v5 |
| Payment | Razorpay |
| Security | bcryptjs, JWT |
| Hosting | Vercel (recommended) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local or [Atlas](https://cloud.mongodb.com))
- Razorpay account (for payments)
- Google Cloud project (for Google sign-in)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/fitforge.git
cd fitforge

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual keys

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
MONGODB_URI=           # MongoDB connection string
NEXTAUTH_URL=          # Your app URL (http://localhost:3000)
NEXTAUTH_SECRET=       # Random secret (openssl rand -base64 32)
GOOGLE_CLIENT_ID=      # Google OAuth Client ID
GOOGLE_CLIENT_SECRET=  # Google OAuth Client Secret
RAZORPAY_KEY_ID=       # Razorpay Key ID (test or live)
RAZORPAY_KEY_SECRET=   # Razorpay Key Secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=  # Same as RAZORPAY_KEY_ID (public)
```

### Getting API Keys

**MongoDB Atlas (Free)**
1. [cloud.mongodb.com](https://cloud.mongodb.com) → Create free cluster
2. Database Access → Add user
3. Network Access → Allow all IPs (`0.0.0.0/0`)
4. Connect → Copy connection string

**Google OAuth**
1. [console.cloud.google.com](https://console.cloud.google.com)
2. APIs & Services → Credentials → Create OAuth 2.0 Client
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`

**Razorpay**
1. [dashboard.razorpay.com](https://dashboard.razorpay.com/app/keys)
2. Settings → API Keys → Generate Test Keys

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── login/page.tsx        # Login
│   ├── signup/page.tsx       # Signup
│   ├── dashboard/page.tsx    # User Dashboard
│   ├── workouts/page.tsx     # Workout Plans
│   ├── diet-plans/page.tsx   # Diet Plans
│   ├── nutrition/page.tsx    # Nutrition Articles
│   ├── pricing/page.tsx      # Pricing + Payment
│   └── api/
│       ├── auth/             # NextAuth routes
│       └── payment/          # Razorpay endpoints
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── home/                 # Page sections
│   └── providers/            # Auth provider
├── lib/
│   ├── auth.ts               # NextAuth config
│   └── mongodb.ts            # DB connection
└── models/
    └── User.ts               # User schema
```

---

## 💳 Pricing Plans

| Plan | Price | Features |
|------|-------|---------|
| Free | ₹0/forever | 3 workout plans, articles, 7-day tracking |
| Pro Monthly | ₹499/month | All programs, diet plans, 1-on-1 coaching |
| Pro Yearly | ₹4,999/year | Everything + 2 months free, concierge |

---

## 🚢 Deployment (Vercel)

```bash
npm install -g vercel
vercel --prod
```

Add all environment variables in Vercel Dashboard → Settings → Environment Variables.

> ⚠️ For production: use `NEXTAUTH_URL=https://yourdomain.com` and switch Razorpay to **Live Mode** keys.

---

## 📸 Screenshots

| Home Page | Workouts | Pricing |
|-----------|----------|---------|
| Hero with animated stats | Tiered workout programs | Razorpay payment integration |

---

## 📄 License

MIT License — feel free to use and modify for your projects.

---

## 🙏 Built With

- [Next.js](https://nextjs.org/) — React framework
- [NextAuth.js](https://next-auth.js.org/) — Authentication
- [MongoDB](https://www.mongodb.com/) — Database  
- [Razorpay](https://razorpay.com/) — Payment processing
- [Tailwind CSS](https://tailwindcss.com/) — Styling

---

> Made with ❤️ by [Satyam](https://github.com/satyamjais7023)
