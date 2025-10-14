# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is Asmaa Shaheen's modern portfolio website built with React, TypeScript, and Vite. The project showcases professional experience, education, skills, certificates, and projects in a clean, responsive design using shadcn/ui components and Tailwind CSS.

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animation**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Routing**: Wouter (lightweight router)

### Project Structure
```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route-based page components  
│   │   ├── lib/           # Utilities and shared logic
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend/API layer (minimal)
├── shared/               # Shared types and schemas
├── attached_assets/      # Static assets and files
└── design_guidelines.md  # Comprehensive design specifications
```

### Component Architecture
- **Page Components**: Home, Projects, Skills, Education, Certificates, Resume
- **Layout Components**: Navigation, Footer
- **Feature Components**: HeroSection, ProjectsGrid, SkillsSection, etc.
- **UI Components**: shadcn/ui components with custom theming

## Common Development Commands

### Development
```bash
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run check        # TypeScript type checking
```

### Package Management
```bash
npm install          # Install dependencies
npm install <package> # Add new dependency
```

## Development Guidelines

### Design System
This project follows a comprehensive design system detailed in `design_guidelines.md`. Key elements:

- **Colors**: Professional blue-based palette with dark mode support
- **Typography**: Inter (headings), Source Sans Pro (body), JetBrains Mono (code)
- **Spacing**: Tailwind spacing scale with defined primitives
- **Components**: shadcn/ui New York style with custom CSS variables

### Component Patterns
- Use TypeScript for all components
- Follow shadcn/ui patterns for consistent styling
- Utilize CSS variables for theme customization
- Implement responsive design with Tailwind breakpoints

### File Organization
- Components are organized by feature/page in `client/src/components/`
- Shared utilities go in `client/src/lib/`
- Custom hooks in `client/src/hooks/`
- Type definitions can use the `shared/` directory for cross-cutting types

### Path Aliases
- `@/*` maps to `./client/src/*`
- `@assets/*` maps to `./attached_assets/*`

### Styling Approach
- Use Tailwind classes for styling
- Leverage CSS variables for dynamic theming
- Follow the design guidelines for consistent spacing and colors
- Use Framer Motion for smooth animations and transitions

## Important Files

- `design_guidelines.md` - Comprehensive design specifications and component guidelines
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Custom Tailwind configuration with design tokens
- `vite.config.ts` - Vite build configuration with path aliases
- `client/src/index.css` - Global styles and CSS variables

## Notes

- This is a portfolio website optimized for showcasing professional work
- The design emphasizes clean typography and professional aesthetics
- Built for static deployment with no complex backend requirements
- Follows modern React patterns with functional components and hooks
- Responsive design targets desktop, tablet, and mobile viewports