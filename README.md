# NESHAT Industry — Professional Lighting Solutions

A modern, responsive website for NESHAT Industry built with **Vite + React + Tailwind CSS**. Fully optimized for deployment on Vercel with RTL support for Persian content.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd neshat-industry

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production

```bash
pnpm build
```

This generates optimized static files in the `dist/` directory.

### Deploy to Vercel

1. **Connect your GitHub repository to Vercel**
2. **Configure build settings:**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

3. **Deploy** — Vercel will automatically build and deploy on every push to main

### Deploy to Other Platforms

This is a static site and can be deployed to any static hosting:
- **Netlify**: Connect GitHub repo, build command: `pnpm build`, publish directory: `dist`
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3 + CloudFront**: Upload `dist/` contents to S3

## 📁 Project Structure

```
neshat-industry/
├── client/
│   ├── public/              # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/          # Page components (Home, Shop, Contact, etc.)
│   │   ├── components/     # Reusable UI components (Header, Footer, etc.)
│   │   ├── contexts/       # React contexts (Theme, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app with routing
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles & Tailwind config
│   └── index.html          # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design & Branding

**Color Palette:**
- Primary Dark: `#2C2C2C` (charcoal)
- Secondary Dark: `#1A1A1A` (near-black)
- Accent Gold: `#B07A10` (premium highlight)
- Text: White, Light Gray, Dark Gray

**Typography:**
- Font: Shabnam (Persian-optimized)
- Display: Bold weights for headers
- Body: Regular for readability

**Layout:**
- RTL (Right-to-Left) for Persian content
- Dark theme with gold accents
- Responsive mobile-first design

## 🔧 Development

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

### Adding New Pages

1. Create a new component in `client/src/pages/YourPage.tsx`
2. Add the route in `client/src/App.tsx`:
   ```tsx
   <Route path="/your-page" component={YourPage} />
   ```
3. Link to it from navigation components

### Customizing Styles

Global styles are in `client/src/index.css`. Modify:
- CSS variables for colors
- Tailwind theme configuration
- Font imports

Component-specific styles use Tailwind utility classes.

## 📱 Pages

- **Home** (`/`) — Hero section, product categories, features, CTA
- **About** (`/about`) — Company story, stats, values
- **Services** (`/services`) — Service offerings, process, FAQ
- **Shop** (`/shop`) — Product catalog with categories and filters
- **Product Detail** (`/product/:id`) — Individual product page with specs
- **Contact** (`/contact`) — Contact form, location, hours
- **Agency** (`/agency`) — Reseller/partnership application form

## 🌐 Internationalization (i18n)

Currently optimized for Persian (RTL). To add English:

1. Create a language context in `client/src/contexts/LanguageContext.tsx`
2. Add language toggle in Header component
3. Create translation files for each page
4. Wrap content with language-specific rendering

## 🔒 Environment Variables

No sensitive data is required for this static site. If you add backend features later, create a `.env.local` file:

```
VITE_API_URL=https://your-api.com
```

## 📊 Performance

- **Vite** provides instant HMR and optimized builds
- **Tailwind CSS** generates minimal CSS (~30KB gzipped)
- **React 19** with modern hooks and suspense
- Static site requires no server, ultra-fast delivery

## 🚀 Deployment Checklist

- [ ] Update company contact info in Footer component
- [ ] Replace placeholder product images with real images
- [ ] Update phone numbers and email addresses
- [ ] Configure custom domain in Vercel
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set up analytics (optional)
- [ ] Test all forms and links
- [ ] Mobile responsiveness check

## 📝 License

© 2024 NESHAT Industry. All rights reserved.

## 📞 Support

For issues or questions:
- Email: info@neshat-industry.com
- Phone: ۰۲۱-XXXXXXXX

---

**Built with ❤️ using Vite + React + Tailwind CSS**
