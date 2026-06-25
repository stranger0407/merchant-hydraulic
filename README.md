# Merchant Hydraulic Website

A production-ready, modern website for Merchant Hydraulic, an Indian B2B hydraulic manufacturing company. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Overview

This is a high-performance, SEO-optimized website designed for an industrial hydraulic solutions company. The site features a premium industrial design aesthetic with navy blue, steel gray, and orange accents, reflecting the company's professional image in the manufacturing sector.

## Features

### Implemented Pages (9 Total)

1. **Home (`/`)** - Landing page with hero, stats, products, solutions, industries, testimonials, infrastructure preview, and CTAs
2. **About (`/about`)** - Company story, timeline, milestones, leadership team, certifications
3. **Products (`/products`)** - Product category listing with search functionality
4. **Product Detail (`/products/[slug]`)** - Individual product pages with specs, features, applications
5. **Custom Solutions (`/custom-solutions`)** - Custom hydraulic design services, process, case studies, quote form
6. **Industries (`/industries`)** - Industry-specific solutions (construction, mining, agriculture, railways, etc.)
7. **Infrastructure (`/infrastructure`)** - Manufacturing facility overview, machinery, capacity, certifications
8. **Contact (`/contact`)** - Comprehensive contact form with WhatsApp integration, sales offices

### Key Components

- **Chatbot Widget** - Multi-step conversational inquiry assistant
- **Header** - Sticky navigation with mobile menu, product dropdown
- **Footer** - Newsletter, quick links, certifications
- **Responsive Design** - Mobile-first approach

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (customized)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod (ready for implementation)

## Project Structure

```
merchant-hydraulic/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── about/
│   ├── products/
│   │   ├── page.tsx       # Products listing
│   │   └── [slug]/
│   │       └── page.tsx   # Product detail
│   ├── custom-solutions/
│   ├── industries/
│   ├── infrastructure/
│   └── contact/
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer
│   ├── chatbot/           # Chatbot widget
│   └── sections/          # Page sections
├── lib/
│   ├── data/              # Static data files
│   │   ├── products.ts
│   │   ├── productCategories.ts
│   │   ├── industries.ts
│   │   ├── testimonials.ts
│   │   └── companyProfile.ts
│   └── utils.ts           # Utility functions
├── public/
│   ├── images/            # Static images
│   │   ├── products/
│   │   ├── industry/
│   │   ├── infra/
│   │   └── clients/
│   └── fonts/             # Custom fonts
├── styles/
│   └── globals.css        # Global styles
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json
```

## Color Palette

```
Primary (Navy Blue):     #0c4a6e (sky-700), #075985 (sky-800), #0369a1 (sky-600)
Accent (Orange):         #ea580c (orange-600), #f97316 (orange-500), #c2410c (orange-700)
Secondary (Steel Gray):  #475569 (slate-600), #334155 (slate-700), #1e293b (slate-800)
Background:              #ffffff, #f8fafc (slate-50), #f1f5f9 (slate-100)
Text:                     #0f172a (slate-900), #334155 (slate-700), #64748b (slate-500)
```

## Installation

1. **Clone and navigate:**
   ```bash
   cd merchant-hydraulic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Development Mode Features

- Hot module replacement
- Full error overlay
- Source maps
- Unoptimized images (faster rebuilds)

## Production Build

The site is optimized for:
- Static HTML export (`dist/` folder)
- Image optimization
- Font optimization
- CSS optimization

## Dependencies

### Production
- next
- react
- react-dom
- framer-motion
- lucide-react
- tailwindcss
- @radix-ui/react-*
- class-variance-authority
- clsx
- tailwind-merge

### Development
- typescript
- @types/react
- @types/node
- eslint
- eslint-config-next
- postcss
- autoprefixer

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Performance Optimizations

- **Static Generation:** Pre-rendered pages for fast load times
- **Image Optimization:** Next.js Image component with lazy loading
- **Component Code Splitting:** Automatic code splitting per route
- **Font Optimization:** Next.js built-in font optimization
- **CSS Optimization:** Tailwind purges unused styles in production

## SEO Features

- Meta titles and descriptions per page
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Clean URL structure
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Files Reference

### Data Layer
- `lib/data/products.ts` - Product catalog
- `lib/data/productCategories.ts` - Category definitions
- `lib/data/industries.ts` - Industry data
- `lib/data/testimonials.ts` - Customer testimonials
- `lib/data/companyProfile.ts` - Company information

### Components
- `components/sections/` - Reusable page sections
- `components/layout/Header.tsx` - Navigation header
- `components/layout/Footer.tsx` - Site footer
- `components/chatbot/Chatbot.tsx` - Inquiry chatbot

### Styling
- `globals.css` - Global styles and Tailwind imports
- `tailwind.config.ts` - Custom theme configuration

## Customization Guide

### Adding Products
Edit `lib/data/products.ts` and add new product objects following the existing structure.

### Changing Theme Colors
Modify `tailwind.config.ts` in the theme.extend.colors section.

### Adding New Pages
1. Create folder in `app/` with `page.tsx`
2. Import required components
3. Add to Header navigation if needed
4. Update any links referencing the page

## Known Limitations & Future Enhancements

### Current Limitations
- Static data only (no backend/database)
- Contact forms don't actually submit (requires backend API)
- No user authentication system
- No e-commerce functionality
- Images are placeholders requiring replacement

### Suggested Future Enhancements
1. **Backend Integration:**
   - Contact form submission API
   - Product catalog API
   - Newsletter subscription API
   - Quote request handling

2. **CMS Integration:**
   - Headless CMS (Strapi, Sanity, or Contentful)
   - Dynamic content management

3. **Advanced Features:**
   - Product filtering and search
   - User accounts and order history
   - Live chat support
   - Product configurator
   - Download center with actual PDFs

4. **Analytics:**
   - Google Analytics 4
   - Google Search Console
   - Heatmap tracking

5. **SEO Enhancements:**
   - XML sitemap
   - robots.txt generation
   - Structured data (JSON-LD)
   - Open Graph images

## License

Proprietary - Merchant Hydraulic

## Support

For technical support or inquiries, contact:

- **Developer Support:** devsupport@merchanthydraulic.com
- **Sales:** sales@merchanthydraulic.com

## Demo Notes

### Current Functionality
- All pages render correctly with static data
- Navigation works across all pages
- Responsive design works on mobile, tablet, desktop
- Animations and transitions are smooth
- Chatbot widget appears on all pages

### Placeholder Content Notice
To ready this site for production, these items need to be addressed:

1. **Images:** Replace `placeholder.svg` references with actual product/industry images
2. **Forms:** Connect contact forms to a backend API or service (e.g., Formspree, Netlify Forms)
3. **PDF Downloads:** Add actual technical datasheets and brochures
4. **Google Maps:** Replace placeholder with actual map embed
5. **Google Analytics:** Add tracking ID for production
6. **WhatsApp Link:** Update with actual WhatsApp business number

