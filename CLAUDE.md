# LMW Labs LLC - Portfolio Website
# Project Documentation & Claude Code Instructions

> **PROJECT:** LMW Labs Portfolio Website
> **DOMAIN:** lmwlabs.faith
> **STATUS:** In Development
> **Last Updated:** 2026-01-11

---

## 🎯 PROJECT OVERVIEW

Build a professional portfolio website for LMW Labs LLC, an AI-powered development studio based in Brandon, Mississippi. The site showcases completed projects, services, and pricing to attract new clients without relying on freelance platforms.

### Business Context
- **Company:** LMW Labs LLC
- **Owner:** Self-taught developer and entrepreneur
- **Location:** Brandon, Mississippi
- **Specialty:** AI-integrated app development, logistics software, contractor websites
- **Goal:** Generate inbound leads, establish credibility, avoid freelance platform fees

---

## 🛠️ TECH STACK

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Hosting | Vercel |
| Domain | lmwlabs.faith (Namecheap) |
| Forms | Formspree (or similar) |
| Analytics | Vercel Analytics / Google Analytics |

---

## 📁 PROJECT STRUCTURE

```
lmwlabs-site/
├── src/
│   └── app/
│       ├── globals.css       # Tailwind + custom styles
│       ├── layout.tsx        # Root layout with metadata
│       ├── page.tsx          # Main homepage (all sections)
│       ├── portfolio/
│       │   └── [slug]/
│       │       └── page.tsx  # Individual project pages
│       └── api/
│           └── contact/
│               └── route.ts  # Contact form handler
├── public/
│   ├── images/              # Project screenshots, logos
│   └── favicon.ico
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## 🎨 DESIGN SPECIFICATIONS

### Brand Colors
```css
/* Primary - Deep Purple/Indigo */
--primary-400: #7f95f8;
--primary-500: #5f6ff1;
--primary-600: #4a4de5;
--primary-700: #3d3dca;
--primary-900: #303381;
--primary-950: #1e1e4b;

/* Accent - Gold/Amber */
--accent-400: #fbbf24;
--accent-500: #f59e0b;
--accent-600: #d97706;

/* Background */
--bg-dark: #0a0a0f;
--bg-section: #12121a;
--bg-card: rgba(26, 26, 46, 0.6);
```

### Typography
- **Display Font:** Space Grotesk (headings, logo, stats)
- **Body Font:** Outfit (paragraphs, descriptions)
- **Load from:** Google Fonts

### Design Aesthetic
- Dark mode only
- Glass morphism for nav and cards
- Subtle noise texture overlays
- Gradient accents (purple → gold)
- Smooth animations (fade-in-up, hover-lift)
- Professional but bold - NOT generic AI slop

---

## 📄 PAGE SECTIONS

### 1. Navigation (Fixed)
- Logo: "LMW Labs" with gradient icon
- Links: Services, Portfolio, Pricing, Contact
- CTA Button: "Get Started"
- Mobile hamburger menu

### 2. Hero Section
- Badge: "AI-Powered Development Studio"
- Headline: "We Build Apps That Move Your Business"
- Subheadline: Value prop + location
- CTAs: "Start Your Project" + "View Our Work"
- Stats: 5+ Apps Shipped | 4 Weeks Avg | 100% AI-Enhanced | 24/7 Support

### 3. Services Section
Six service cards with icons, descriptions, feature lists:
1. **Mobile App Development** - Flutter, Firebase, cross-platform
2. **Web Applications** - Next.js, React, TypeScript, SaaS
3. **AI Integration** - GPT-4, RAG, embeddings, vector DBs
4. **Logistics Software** - TMS, load management, GPS tracking
5. **Business Automation** - Dashboards, APIs, workflows
6. **Contractor Websites** - Local SEO, quote forms, lead gen

### 4. Portfolio Section
Five featured projects (horizontal cards with color bars):

| Project | Type | Tech | Description |
|---------|------|------|-------------|
| **FaithFeed** | Mobile/Web App | Flutter, Next.js, Firebase, OpenAI, Pinecone | Christian social platform with AI Bible study, 31K verse embeddings |
| **Basketball Scouting Platform** | Web App | Next.js, Firebase, Cloudflare R2, OpenAI | Player prospecting for ex-Harlem Globetrotter, video uploads, AI analysis |
| **KHCL Logistics** | Logistics Platform | Next.js, PostgreSQL, Supabase | Freight brokerage - quotes, load board, tracking |
| **Cooper Generations Asphalt** | Contractor Website | Next.js, Tailwind, Vercel | 35+ year asphalt company, SEO, estimate forms |
| **BlacktopProz** | Business Framework | Branding, Documents | Asphalt/concrete contractor system, quotes, invoicing |

### 5. Pricing Section
**Package Cards:**
| Package | Price | Features |
|---------|-------|----------|
| Starter Website | $1,500 | 5-7 pages, mobile-optimized, contact forms, basic SEO, 30 days support |
| Custom Web App | $5,000+ | Custom features, auth, database, admin dashboard, 60 days support |
| Mobile App | $8,000+ | Flutter, iOS/Android, backend, push notifications, 90 days support |

**Hourly Rate Card:**
| Category | Rate | Description |
|----------|------|-------------|
| Development & Integration | $100/hr | Core coding, API work, lead gen features |
| Design & SEO | $85/hr | UI/UX, marketing strategy, maintenance |
| Setup & Project Management | $75/hr | Environment setup, revisions, media |
| Content & Training | $65/hr | Copywriting, documentation, research |
| Social Media | $50/hr | Content creation, posting, engagement |

### 6. Contact Section
**Left Column:**
- Headline: "Ready to Build?"
- Description
- Email link: contact@lmwlabs.faith
- Phone link: (update with real number)
- Calendly booking link
- Location: Brandon, Mississippi

**Right Column - Form Fields:**
- Name (required)
- Email (required)
- Phone
- Budget Range (dropdown: $1-3K, $3-5K, $5-10K, $10K+)
- Project Type (dropdown: Website, Web App, Mobile App, AI Integration, Logistics, Other)
- Message textarea
- Submit button

### 7. Footer
- Logo
- Copyright: © 2025 LMW Labs LLC
- Links: Privacy, Terms

---

## 💰 BILLING LOG

### LMW Labs Rate Card
| Category | Rate |
|----------|------|
| DEVELOPMENT | $100/hr |
| INTEGRATION | $100/hr |
| LEAD GEN | $100/hr |
| DESIGN | $85/hr |
| SEO | $85/hr |
| MARKETING | $85/hr |
| MAINTENANCE | $85/hr |
| SETUP | $75/hr |
| REVISIONS | $75/hr |
| PROJECT MGMT | $75/hr |
| MEDIA | $75/hr |
| CONTENT | $65/hr |
| TRAINING | $65/hr |
| RESEARCH | $65/hr |
| SOCIAL | $50/hr |

### Work Log
| Date | Task | Category | Hours | Amount | Status |
|------|------|----------|-------|--------|--------|
| 2026-01-11 | Project setup, documentation, initial build | PM/SETUP | 1.0 | $75.00 | ☐ |
| 2026-01-11 | Homepage design and development | DESIGN/DEV | 2.0 | $185.00 | ☐ |
| | | | | | |

---

## ✅ TASK CHECKLIST

### Phase 1: Core Build
- [x] Project initialization (Next.js, TypeScript, Tailwind)
- [x] Global styles and design system
- [x] Navigation component
- [x] Hero section
- [x] Services section
- [x] Portfolio section
- [x] Pricing section
- [x] Contact section with form
- [x] Footer
- [ ] Mobile responsiveness testing
- [ ] Contact form backend (Formspree integration)

### Phase 2: Content & Polish
- [ ] Add real project screenshots/images
- [ ] Individual portfolio project pages
- [ ] Testimonials section (if available)
- [ ] Blog/articles section (optional)
- [ ] SEO optimization (meta tags, OG images)
- [ ] Performance optimization
- [ ] Accessibility audit

### Phase 3: Launch
- [ ] Connect domain (lmwlabs.faith → Vercel)
- [ ] SSL certificate verification
- [ ] Analytics setup
- [ ] Contact form testing
- [ ] Final QA
- [ ] Go live

---

## 🚀 DEPLOYMENT

### Vercel Setup
1. Push to GitHub repository
2. Connect to Vercel
3. Configure domain: lmwlabs.faith
4. Set environment variables (if any)
5. Deploy

### DNS Configuration (Namecheap → Vercel)
```
Type: A
Host: @
Value: 76.76.21.21

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

---

## 📝 CLAUDE CODE INSTRUCTIONS

### Before Starting Any Task
1. Read this CLAUDE.md file completely
2. Understand the current project state
3. Log your task in the Work Log before starting
4. Update status when complete

### Code Standards
- Use TypeScript strict mode
- Follow Next.js App Router conventions
- Use Tailwind for all styling (no inline styles)
- Keep components in page.tsx unless they need to be shared
- Use Lucide React for icons
- Mobile-first responsive design

### When Adding Features
1. Check if it exists in the current codebase
2. Follow the established design system
3. Test on mobile and desktop
4. Update this documentation

### When Fixing Bugs
1. Identify the root cause
2. Fix without breaking other features
3. Test the fix
4. Log the work

### Git Commits
Use conventional commits:
- `feat: add testimonials section`
- `fix: mobile nav menu not closing`
- `style: update button hover states`
- `docs: update CLAUDE.md with new tasks`

---

## 🔗 USEFUL LINKS

- **Domain Registrar:** Namecheap
- **Hosting:** Vercel
- **Fonts:** https://fonts.google.com
- **Icons:** https://lucide.dev
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## 📞 CONTACT INFO (For Site)

- **Email:** contact@lmwlabs.faith
- **Phone:** (update with real number)
- **Location:** Brandon, Mississippi
- **Calendly:** (add booking link)

---

*LMW Labs LLC - Brandon, Mississippi*
*Last Updated: January 2026*
