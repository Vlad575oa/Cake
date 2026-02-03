# SAVA-LINE - Premium Ventilation Systems

A production-ready, SEO-optimized Next.js website for SAVA-LINE, featuring high-performance concealed ventilation systems designed for modern architectural aesthetics.

## 🚀 Features

### SEO & Performance
- ✅ **Google & Yandex Optimized** - Comprehensive SEO implementation
- ✅ **Core Web Vitals** - LCP < 2.5s, CLS < 0.1, INP < 200ms
- ✅ **Structured Data** - JSON-LD schemas (Organization, WebSite, BreadcrumbList)
- ✅ **Image Optimization** - Next.js Image with AVIF/WebP support
- ✅ **Font Optimization** - Preloaded Google Fonts with `display: swap`
- ✅ **Server-Side Rendering** - SSR/SSG for crawlability
- ✅ **Semantic HTML** - Proper heading hierarchy and accessibility

### Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
sava_3/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with global SEO
│   │   ├── page.tsx            # Home page
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── seo/
│   │   │   └── JsonLd.tsx      # Structured data component
│   │   ├── home/               # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductBento.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   └── TechnicalSpecs.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   └── providers/
│   ├── content/
│   │   ├── homeContent.ts      # Content data
│   │   └── specContent.tsx     # Technical specs
│   └── lib/
│       ├── seo.ts              # SEO utilities
│       └── utils.ts            # Helper functions
├── public/
│   ├── robots.txt              # Search engine directives
│   ├── manifest.json           # PWA manifest
│   └── images/                 # Static images
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── SEO_GUIDE.md               # Comprehensive SEO documentation
```

## 🎯 SEO Implementation

### Metadata
- Unique title and description per page
- Open Graph tags for social sharing
- Twitter Cards
- Canonical URLs
- Robots meta tags

### Structured Data (JSON-LD)
- Organization schema
- WebSite schema with SearchAction
- BreadcrumbList schema
- Product schema (ready for product pages)

### Performance
- Image optimization with Next.js Image
- Font preloading and optimization
- Static asset caching (1 year)
- Minimal JavaScript bundle
- Server-side rendering

See [`SEO_GUIDE.md`](SEO_GUIDE.md) for detailed documentation.

## 🛠️ Scripts

```bash
# Development
npm run dev              # Start dev server on port 3000
npm run dev-port         # Start dev server on port 3001

# Production
npm run build            # Build for production
npm run start            # Start production server

# Utilities
npm run lint             # Run ESLint
npm run restart-dev      # Kill and restart dev server
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://sava-line.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | ✅ |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ |
| INP (Interaction to Next Paint) | < 200ms | ✅ |
| First Contentful Paint | < 1.8s | ✅ |
| Time to Interactive | < 3.8s | ✅ |

## 🧪 Testing

### Build Test
```bash
npm run build
npm run start
```

### SEO Validation
1. **Lighthouse**: Chrome DevTools > Lighthouse
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **Rich Results Test**: https://search.google.com/test/rich-results
4. **Schema Validator**: https://validator.schema.org/

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images for all screen sizes

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Alt texts for all images
- Proper heading hierarchy
- Color contrast compliance

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker

## 📝 Content Management

Content is managed through TypeScript files in [`src/content/`](src/content/):
- [`homeContent.ts`](src/content/homeContent.ts) - Main content data
- [`specContent.tsx`](src/content/specContent.tsx) - Technical specifications

This approach provides:
- Type safety
- Easy version control
- No CMS overhead
- Fast builds

## 🎨 Design System

### Colors
- Primary: Custom brand color
- Background: Dark theme
- Foreground: Light text
- Muted: Secondary text

### Typography
- Display: Manrope (headings)
- Body: Inter (text)

### Components
- Reusable UI components in [`src/components/ui/`](src/components/ui/)
- Consistent spacing and sizing
- Smooth animations with Framer Motion

## 📄 License

Private - SAVA-LINE

## 🤝 Contributing

This is a private project. For questions or support, contact the development team.

---

**Built with ❤️ for SAVA-LINE** | Production-ready | SEO-optimized | Performance-first

