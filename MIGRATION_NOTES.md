# Zakir Hasan Hriday — Portfolio (Next.js version)

React (Vite) থেকে **Next.js 16 (App Router)** এ migrate করা হয়েছে, মূলত SEO এর জন্য —
এখন পুরো page build-time এ static HTML হিসেবে prerender হয় (আগের মতো খালি JS bundle নয়)।

## যা যা করা হয়েছে

- Vite + React Router সরিয়ে Next.js App Router বসানো হয়েছে
- `index.html` এর সব meta tag, Open Graph, Twitter card, JSON-LD (Person + WebSite schema)
  Next.js এর **Metadata API** তে (`src/app/layout.jsx`) migrate করা হয়েছে
- `src/app/sitemap.js` ও `src/app/robots.js` যোগ করা হয়েছে (dynamic sitemap.xml / robots.txt)
- **গুরুত্বপূর্ণ ফিক্স:** আগে `WelcomeScreen` অ্যানিমেশন শেষ না হওয়া পর্যন্ত আসল content
  (Hero/About/Skills ইত্যাদি) DOM এ mount হতো না — যেটা crawler কে খালি হাতে ফেরত পাঠাতো।
  এখন এটা overlay pattern এ বদলানো হয়েছে: আসল content শুরু থেকেই DOM এ থাকে,
  WelcomeScreen শুধু উপরে animated overlay হিসেবে বসে এবং শেষে DOM থেকে সরে যায়।
- Static-imported image (`AboutSection`, `SkillsSection`) `<img>` থেকে `next/image` এ
  convert করা হয়েছে — Next.js এ static import করা image plain `<img src={...}>` এ কাজ করে না
  (object হয়ে যায়), `next/image` ব্যবহার করলে automatic optimization + lazy loading ফ্রি পাওয়া যায়।
- Component/folder নাম সব lowercase এ normalize করা হয়েছে (`Components` → `components`,
  `Pages` → বাদ, App Router নিজেই routing করে) — এটা Linux-based production build
  (Vercel ইত্যাদি, যেগুলো case-sensitive) এ ভবিষ্যতে ভাঙন এড়াবে।
- `lucide-react` original version (`0.501.0`) এ pin করা হয়েছে, কারণ latest major version এ
  কিছু icon rename হয়েছে যেগুলো original component code এর সাথে মেলে না।

## চালানো (local dev)

```bash
npm install
npm run dev
```

`http://localhost:3000` এ ওপেন হবে।

## Production build/test

```bash
npm run build
npm run start
```

## Deploy

- **Vercel (recommended, সবচেয়ে সহজ):** GitHub এ push করে vercel.com এ import করলেই হয়ে যাবে,
  কোনো extra config লাগবে না।
- **Netlify:** এই প্রজেক্ট এখন SSR-capable Next.js app (আগের মতো pure static SPA না)।
  Netlify এ deploy করতে চাইলে তাদের official Next.js runtime/adapter ব্যবহার করতে হবে
  (Netlify এখন এটা auto-detect করে)।

## ⚠️ Deploy করার আগে অবশ্যই যা বদলাতে হবে

`src/lib/site-config.js` ফাইলে `siteConfig.url` — এখনো পুরনো Netlify URL বসানো আছে
(`https://benevolent-tiramisu-6e488a.netlify.app`)। নতুন domain এ deploy করার পর এই একটা
জায়গা বদলালেই sitemap, robots.txt, canonical URL, OG tags সব জায়গায় automatically আপডেট
হয়ে যাবে।

## Deploy এর পর SEO checklist

1. Google Search Console এ নতুন domain add করে sitemap (`/sitemap.xml`) submit করো
2. [Rich Results Test](https://search.google.com/test/rich-results) দিয়ে JSON-LD schema verify করো
3. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) দিয়ে OG image/preview চেক করো
4. `public/apple-touch-icon.png` ফাইলটা এখনো নেই — যোগ করে দিও (মেটাডাটা তে reference করা আছে)
