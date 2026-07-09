# NESHAT Industry — Design Philosophy

## Brand Overview
**Neshat Industry** is a professional lighting solutions provider specializing in LED lamps, industrial lighting, decorative fixtures, and ceiling lights. The brand targets commercial and industrial spaces with premium, reliable products.

---

## Design Approach: Premium Industrial Minimalism

### Design Movement
**Modern Industrial Elegance** — A fusion of minimalist design principles with industrial authenticity. Inspired by contemporary architecture and premium brand aesthetics.

### Core Principles
1. **Precision & Clarity** — Every element serves a purpose; no decorative clutter
2. **Dark Sophistication** — Dark backgrounds (#2C2C2C, #1A1A1A) convey professionalism and premium quality
3. **Warm Accent Hierarchy** — Gold (#B07A10) creates focal points and guides user attention
4. **Functional Beauty** — Clean typography and generous whitespace enhance readability and trust

### Color Philosophy
- **Primary Dark**: #2C2C2C (charcoal) — Professional, stable, industrial
- **Secondary Dark**: #1A1A1A (near-black) — Depth and contrast
- **Accent Gold**: #B07A10 — Warmth, luxury, and call-to-action emphasis
- **Neutrals**: #FFFFFF (white), #D0D0D0 (light gray), #999 (medium gray) — Text and secondary elements
- **Rationale**: Dark backgrounds reduce eye strain for industrial/commercial audiences, while gold accents signal premium positioning and guide interaction

### Layout Paradigm
**Asymmetric Grid with Breathing Space** — Avoid centered, symmetrical layouts. Use:
- Hero sections with diagonal overlays and strategic content placement
- Staggered product grids (not uniform columns)
- Full-width sections with asymmetric padding
- Sticky navigation with scroll-triggered transparency transitions

### Signature Elements
1. **Wave Dividers** — Organic, flowing transitions between sections (top/bottom variants)
2. **Gold Accent Lines** — Thin horizontal dividers and left borders on key sections
3. **Gradient Overlays** — Dark semi-transparent gradients over images for text contrast and depth

### Interaction Philosophy
- **Hover States**: Subtle lift (transform: translateY(-4px)) on product cards
- **Button Interactions**: Scale down on click (scale: 0.97) for tactile feedback
- **Navigation**: Smooth underline animation on hover, active state in gold
- **Scroll Animations**: Fade-in-up on section entrance (staggered by 200ms per element)

### Animation Guidelines
- **Entrance Animations**: `fadeInUp` (300ms ease-out) for hero elements, staggered by 200-400ms
- **Hover Transitions**: 200-300ms ease-out for smooth, responsive feel
- **Button Press**: 100-160ms scale transition for tactile confirmation
- **Scroll Triggers**: Fade-in-up at 30% viewport threshold
- **Avoid**: Excessive motion; respect `prefers-reduced-motion`

### Typography System
- **Display Font**: Shabnam (Persian, bold weights) — Headlines, hero text
- **Body Font**: Shabnam (regular) — All body text, descriptions
- **Sizes**: 
  - H1: 48px (bold) — Hero heading
  - H2: 32px (bold) — Section titles
  - H3: 20px (bold) — Subsection titles
  - Body: 15-17px (regular) — Descriptions, nav
  - Small: 13px (regular) — Metadata, footer
- **Letter Spacing**: 4px on small caps/tags for premium feel

### Brand Essence
**Premium Industrial Lighting for Professionals** — Trusted supplier of high-quality LED and industrial lighting solutions for commercial and industrial spaces. Professional, reliable, innovative.

**Personality**: Authoritative, Trustworthy, Modern, Sophisticated

### Brand Voice
- **Headlines**: Direct, benefit-focused ("روشنایی حرفه‌ای برای فضاهای صنعتی و تجاری" = "Professional Lighting for Industrial & Commercial Spaces")
- **CTAs**: Action-oriented ("مشاهده محصولات" = "View Products", "درخواست نمایندگی" = "Request Reseller Partnership")
- **Microcopy**: Clear, Persian-first, no generic filler
- **Tone**: Professional but approachable; technical but not jargon-heavy

### Wordmark & Logo
- **Concept**: Bold geometric symbol (stylized light bulb or LED element) on transparent background
- **Style**: Minimalist, modern, instantly recognizable
- **Color**: Gold (#B07A10) or white depending on background
- **Never**: Use brand name in default font; always use custom mark

### Signature Brand Color
**Gold (#B07A10)** — Unmistakably Neshat. Used for:
- Primary buttons and CTAs
- Hover states and active navigation
- Accent lines and dividers
- Icon highlights
- Product category tags

---

## Implementation Notes
- **RTL Layout**: All sections use `direction: rtl` for Persian text
- **Sticky Header**: Transparent on load → dark background on scroll (scroll > 40px)
- **Product Grid**: Staggered, asymmetric layout (not uniform columns)
- **Wave Dividers**: Custom SVG paths for organic section transitions
- **Responsive**: Mobile-first design with breakpoints at 640px, 1024px

---

## Pages to Build
1. **Home** — Hero, featured products, services overview, CTA sections
2. **About** — Company story, values, team, experience
3. **Services** — Lighting solutions, industrial applications, consultation
4. **Shop** — Product catalog, categories, filters, product detail pages
5. **Contact** — Contact form, location, phone, email
6. **Agency** — Reseller/partnership application form
7. **Header/Footer** — Global navigation, social links, quick access

---

## Visual Assets
- Hero background image (industrial/commercial space with lighting)
- Product category images (LED lamps, industrial fixtures, decorative lights, ceiling lights)
- Team/company photos
- Brand logo (custom mark)
- Wave divider SVGs (top and bottom variants)
