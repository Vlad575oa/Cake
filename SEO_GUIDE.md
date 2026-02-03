# SEO Implementation Guide

## Overview
This Next.js application is optimized for search engines (Google, Yandex) with production-ready SEO implementation following BigTech standards.

## Key Features Implemented

### 1. **Metadata & SEO**
- ✅ Comprehensive metadata in [`layout.tsx`](src/app/layout.tsx:23)
- ✅ Page-specific metadata in [`page.tsx`](src/app/page.tsx:17)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Robots meta tags
- ✅ Search engine verification tags (Google, Yandex)

### 2. **Structured Data (JSON-LD)**
Implemented Schema.org structured data:
- ✅ Organization schema
- ✅ WebSite schema with SearchAction
- ✅ BreadcrumbList schema
- ✅ Product schema (ready for product pages)

See [`seo.ts`](src/lib/seo.ts) for schema generators.

### 3. **Performance Optimization**

#### Image Optimization
- ✅ Next.js Image component with automatic optimization
- ✅ AVIF and WebP format support
- ✅ Responsive image sizes
- ✅ Lazy loading (except priority images)
- ✅ Descriptive alt texts for accessibility and SEO

#### Font Optimization
- ✅ Google Fonts with `display: swap`
- ✅ Font preloading
- ✅ Variable fonts for better performance

#### Caching Strategy
- ✅ Static assets cached for 1 year
- ✅ Immutable cache headers for versioned assets
- ✅ Proper Cache-Control headers

See [`next.config.ts`](next.config.ts) for configuration.

### 4. **Semantic HTML**
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Semantic HTML5 elements (`<main>`, `<section>`, `<article>`)
- ✅ ARIA labels where needed
- ✅ Accessible navigation

### 5. **Crawlability**
- ✅ [`robots.txt`](public/robots.txt) configured
- ✅ Dynamic [`sitemap.xml`](src/app/sitemap.ts) generation
- ✅ Clean, SEO-friendly URLs
- ✅ Server-side rendering (SSR)
- ✅ No JavaScript dependency for content rendering

## Core Web Vitals Targets

| Metric | Target | Implementation |
|--------|--------|----------------|
| **LCP** | < 2.5s | - Image optimization<br>- Priority loading for hero image<br>- Minimal JS bundle |
| **CLS** | < 0.1 | - Fixed image dimensions<br>- No layout shifts<br>- Proper aspect ratios |
| **INP** | < 200ms | - Minimal client-side JS<br>- Optimized animations<br>- Efficient event handlers |

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with global SEO
│   ├── page.tsx            # Home page with metadata
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── globals.css         # Global styles
├── components/
│   ├── seo/
│   │   └── JsonLd.tsx      # JSON-LD structured data component
│   ├── home/               # Page sections
│   └── layout/             # Layout components
├── lib/
│   └── seo.ts              # SEO utility functions and schema generators
└── content/
    ├── homeContent.ts      # Content data
    └── specContent.tsx     # Technical specs content
```

## Configuration Files

### Environment Variables
Copy [`.env.example`](.env.example) to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://sava-line.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-code
```

### Next.js Config
[`next.config.ts`](next.config.ts) includes:
- Image optimization settings
- Compression enabled
- Security headers
- Cache-Control headers

## SEO Checklist

### ✅ Completed
- [x] Title tags (unique per page)
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Robots.txt
- [x] Sitemap.xml
- [x] JSON-LD structured data
- [x] Alt texts for images
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast loading (optimized images, fonts)
- [x] Clean URLs
- [x] Heading hierarchy

### 📋 To Do (Before Production)
- [ ] Add Google Search Console verification
- [ ] Add Yandex Webmaster verification
- [ ] Create OG image (`/public/og-image.jpg`)
- [ ] Add favicon and app icons
- [ ] Set up analytics (Google Analytics, Yandex Metrica)
- [ ] Test with Lighthouse
- [ ] Test with PageSpeed Insights
- [ ] Validate structured data with Google Rich Results Test
- [ ] Submit sitemap to search engines

## Testing

### Local Testing
```bash
npm run build
npm run start
```

### SEO Validation Tools
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Lighthouse**: Built into Chrome DevTools
4. **PageSpeed Insights**: https://pagespeed.web.dev/

### Check Structured Data
Visit: `http://localhost:3000` and view page source to see JSON-LD schemas.

## Adding New Pages

When creating new pages, use the SEO utilities:

```typescript
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: ['keyword1', 'keyword2'],
  canonical: '/your-page-url',
});
```

## Performance Monitoring

Monitor Core Web Vitals in production:
- Google Search Console
- Chrome User Experience Report
- Real User Monitoring (RUM) tools

## Best Practices

1. **Content First**: Ensure all content is server-rendered
2. **Semantic HTML**: Use proper HTML5 elements
3. **Accessibility**: Good accessibility = Good SEO
4. **Mobile First**: Optimize for mobile devices
5. **Speed**: Fast sites rank better
6. **Quality Content**: Write for users, not just search engines

## Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev Performance](https://web.dev/performance/)
