# Portfolio Website Design Guidelines for Asmaa Shaheen

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from modern professional portfolios with emphasis on **Linear's** clean typography and professional aesthetics, **Notion's** content hierarchy, and contemporary portfolio trends that balance technical credibility with visual appeal.

**Design Philosophy**: Professional sophistication meets creative confidence - showcasing technical expertise through clean, modern design that builds trust while maintaining visual interest.

---

## Core Design Elements

### Color Palette

**Primary Colors** (Professional & Technical):
- **Deep Blue**: 220 85% 25% (primary brand, headers, CTAs)
- **Slate**: 215 20% 15% (text, professional contrast)
- **Cloud White**: 0 0% 98% (backgrounds, breathing room)

**Accent Colors**:
- **Electric Blue**: 210 90% 55% (interactive elements, highlights)
- **Steel Gray**: 215 15% 50% (secondary text, borders)
- **Success Green**: 145 65% 45% (achievements, certifications)

**Dark Mode Palette**:
- Background: 220 25% 8%
- Surface: 220 20% 12%
- Text: 0 0% 95%
- Accent: 210 85% 60%

### Typography

**Font Families** (via Google Fonts):
- **Primary**: Inter (headings, UI elements) - weights 400, 500, 600, 700
- **Body**: Source Sans Pro (body text, descriptions) - weights 400, 600
- **Mono**: JetBrains Mono (code snippets, technical details) - weight 400

**Type Scale**:
- Hero Heading: 4xl-6xl (48px-72px desktop, 32px-40px mobile)
- Section Headings: 3xl-4xl (36px-48px desktop, 24px-32px mobile)
- Subsection: xl-2xl (24px-30px)
- Body: base-lg (16px-18px)
- Caption: sm (14px)

### Layout System

**Spacing Primitives** (Tailwind units):
- Micro spacing: 2, 4 (gaps, small padding)
- Component spacing: 6, 8, 12 (card padding, element separation)
- Section spacing: 16, 20, 24, 32 (vertical rhythm, page sections)
- Macro spacing: 40, 48 (major section breaks)

**Grid System**:
- Container max-width: 7xl (1280px) for content sections
- Hero sections: full-width with inner max-w-6xl for content
- Multi-column: 12-column grid, responsive collapse at md breakpoint

---

## Page-Specific Design Guidelines

### Home Page

**Hero Section** (80vh minimum):
- Large professional hero image (full-bleed background) showing workspace/technology environment with subtle gradient overlay (220 85% 25% at 40% opacity)
- Centered content with strong typographic hierarchy
- Animated typing effect for role titles: "Data Analyst | Full-Stack Developer | Technical Coordinator"
- Dual CTAs: Primary (solid blue) "View My Work", Secondary (outline with backdrop-blur-md) "Download CV"
- Floating particle effect (20-30 dots, subtle movement, 210 90% 55% at 20% opacity)

**Services Grid** (4-column desktop, 2-column tablet, 1-column mobile):
- Card-based layout with subtle shadow (shadow-lg)
- Icon at top (64px, electric blue)
- Title, 2-line description
- Hover: lift effect (translateY -8px) with increased shadow

**Stats Counter Section**:
- Dark background panel (220 25% 8%)
- 3-4 animated counters in row
- Large numbers (6xl font) with labels below
- Scroll-triggered count animation

### Education Page

**Timeline Layout**:
- Vertical timeline with alternating left/right cards (desktop), stacked (mobile)
- Timeline line: 3px solid electric blue, with dot markers (20px circle) at each node
- Education cards with institution logo placeholder (80px circle), degree title, GPA badges
- Graduation year in large display font on timeline
- Cards have white background with subtle border, lift on hover

### Projects Page

**Hero Grid** (Masonry-style):
- Featured project: large card spanning 2 columns (top)
- 3-column grid for remaining projects (2-column tablet, 1-column mobile)
- Each card: project image placeholder (16:9 ratio), title overlay on gradient
- Technology tags below (pill-shaped, small font, steel gray background)
- IEEE publication badge (top-right corner, success green)
- Hover: scale image 1.05, show "View Details" overlay with blurred backdrop

**Filter System**:
- Horizontal pill buttons (All, Web Dev, Arduino, Research, Data Analysis)
- Active state: solid electric blue background
- Smooth filtering with fade transitions

### Skills Page

**Categorized Tabs**:
- Tab navigation: Technical | Professional | Soft Skills
- Active tab: bottom border (4px electric blue), bold font
- Content area with generous padding (p-12)

**Technical Skills**:
- 3-column grid of skill cards
- Each card: Icon (48px) + Skill name + Animated progress bar
- Progress bars: rounded-full, gradient from deep blue to electric blue
- Percentage label aligned right

**Professional/Soft Skills**:
- 2-column layout with checkmark bullets (success green)
- Larger font (lg), comfortable line-height (1.8)

### Certificates Page

**Masonry Grid** (4 columns desktop, 2 tablet, 1 mobile):
- Certificate cards with organization logo, title, date
- Category badges (Humanitarian: success green, Technical: electric blue)
- Credential ID in mono font (small)
- Verify/Download icon buttons (bottom-right)
- Hover: slight rotation (2deg) and shadow enhancement

### Resume/Experience Page

**Interactive Timeline**:
- Left-aligned timeline (desktop), centered (mobile)
- Position cards expand on click to show full responsibilities
- Company logo (64px circle) at timeline node
- Date range in caption font, location in steel gray
- Duration badge (e.g., "1 year 6 months") in electric blue pill
- Collapsed state: Company + Role + Duration, Expanded: Full details with bullet points

**Download CV Section**:
- Prominent card with CV icon (128px)
- Primary download button (large, px-12 py-4)
- Print button (secondary, outline)

---

## Global Components

### Navigation

**Desktop Header** (sticky, backdrop-blur-lg, bg-white/90 dark:bg-slate-900/90):
- Logo: "AS" monogram (left, 40px)
- Center nav links (Inter 600, spacing-x-8, hover: electric blue underline 3px)
- Social icons (right, 24px, hover: scale 1.1)

**Mobile Menu**:
- Hamburger icon (right, 32px with animated lines)
- Full-screen overlay (slide-in from right)
- Large nav items (2xl font, centered, spacing-y-6)

### Footer

**Multi-Column Layout** (4 columns desktop, 2 tablet, 1 mobile):
- Column 1: Logo + tagline
- Column 2: Quick Links (all pages)
- Column 3: Contact info with icons (email, phone, location)
- Column 4: Social media icons (larger, 32px)
- Bottom bar: Copyright + "Built with passion in Palestine" (italic, steel gray)
- Dark background (220 25% 8%), light text

### Buttons

**Primary**: Solid electric blue background, white text, px-8 py-3, rounded-lg, hover: darken 10%, active: scale 0.98
**Secondary**: Outline 2px steel gray, transparent background, hover: bg-steel-gray/10
**On Images**: Outline white, backdrop-blur-md, bg-white/20

---

## Images & Visual Assets

### Hero Images (Required):
1. **Home Page Hero**: Professional workspace/technology environment (laptop, code, modern office) - full-bleed background with gradient overlay
2. **Projects Page**: Each project needs 16:9 thumbnail - for NFC projects: hardware/IoT devices; for web projects: interface screenshots
3. **Education Page**: Institution building photos or academic imagery (subtle, in timeline cards)

### Icons:
- Use **Heroicons** (outline style) for UI elements via CDN
- 24px default size, 32px for prominent actions, 48px-64px for feature highlights
- Electric blue color for active/interactive states

### Illustrations:
- Abstract tech patterns for section backgrounds (subtle, 5% opacity)
- Data visualization graphics for skills section (charts, graphs, minimalist style)

---

## Interactions & Animations

**Scroll Animations** (Intersection Observer):
- Fade-in + slide-up (translateY 20px → 0) for cards and sections
- Stagger delay (100ms between items) for grid elements
- Scale-in for featured items (scale 0.95 → 1)

**Hover States**:
- Cards: translateY -4px, shadow-xl transition
- Buttons: darken/brighten 10%, transition 200ms
- Links: underline 3px electric blue, transition 150ms
- Images: scale 1.05, brightness 0.9

**Page Load**:
- Hero typing animation (1.5s duration, cursor blink)
- Stats counter animation (scroll-triggered, count-up effect)
- Particle movement (continuous, subtle float)

**Micro-interactions**:
- Tab switching: smooth content fade (300ms)
- Timeline expansion: slide-down with ease-out (400ms)
- Filter activation: pulse effect on selection
- Form validation: shake animation on error

**Performance**:
- Lazy load images below fold
- Debounce scroll events (100ms)
- Use CSS transforms for animations (GPU acceleration)
- Preload critical fonts and hero image

---

**Accessibility**: High contrast text (WCAG AA), keyboard navigation focus rings (2px electric blue), ARIA labels for interactive elements, semantic HTML structure throughout.