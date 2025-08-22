# Back Country Lifestyle

## Overview
Back Country Lifestyle is a premium outdoor gear e-commerce platform designed with world-class digital product design principles. Inspired by Apple's design DNA meets Patagonia's storytelling, the platform creates a bold, immersive, and story-driven experience that feels timeless, intuitive, and iconic. The platform showcases curated international outdoor brands alongside exclusive "Back Country Originals" private label collections.

## Creative Direction
Acting as a world-class digital product designer with Apple-level craft, the platform emphasizes:
- **Uniqueness**: Every section intentionally crafted, avoiding generic ecommerce layouts
- **Minimalism**: Whitespace, balance, and clean lines as important as content
- **Storytelling**: Every product and brand tells a story, designed for curiosity and immersion
- **Human Touch**: Subtle microinteractions, warm typography, and crafted details make digital feel personal

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Vite + React with TypeScript for modern development experience and fast hot reloading
- **Routing**: React Router DOM for client-side navigation with catch-all 404 handling
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface
- **Styling**: TailwindCSS with custom design tokens implementing the Back Country brand system
- **Typography**: Custom font stack featuring Montserrat Alternates (headings), Inter (body), Oswald (accent), and Playfair Display (serif)

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Type Safety**: Full TypeScript implementation across client, server, and shared modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **API Structure**: RESTful API with `/api` prefix routing

### Data Storage
- **Primary Database**: PostgreSQL configured through Drizzle with migrations support
- **ORM**: Drizzle ORM chosen for type safety and developer experience
- **Validation**: Zod schemas with Drizzle integration for runtime type validation
- **Connection**: Neon Database serverless driver for cloud PostgreSQL connectivity

### Design System
- **Color Palette**: Forest green primary (#1B3A2A), navy secondary (#0E2A47), refined burnt orange accent (#C8491C), sand beige (#F4E3C1)
- **Typography**: Typography carries the feeling of crafted outdoor adventure gear — bold yet refined, with Apple-like clarity
- **Motion Design**: Meaningful, not decorative — Apple-like transitions that guide attention, provide context, and feel fluid
- **Component Library**: Custom button variants including "hero" and "premium" styles with gradient backgrounds
- **Responsive Design**: Mobile-first approach with standard Tailwind breakpoints
- **Accessibility**: WCAG compliance with semantic HTML, focus management, and proper contrast ratios

### Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot module replacement with runtime error overlay
- **Type Checking**: Strict TypeScript configuration with path aliases for clean imports
- **Database Migrations**: Drizzle Kit for schema management and database migrations

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Cloud PostgreSQL database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **express**: Web server framework
- **connect-pg-simple**: PostgreSQL session store

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives for complex components
- **lucide-react**: Icon library providing outdoor and lifestyle iconography
- **cmdk**: Command palette interface
- **embla-carousel-react**: Touch-friendly carousel components

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Enhanced development error handling
- **@replit/vite-plugin-cartographer**: Development environment integration
- **class-variance-authority**: Type-safe component variant management
- **clsx**: Conditional class name utility
- **date-fns**: Date manipulation and formatting

### Styling and Design
- **tailwindcss**: Utility-first CSS framework
- **@hookform/resolvers**: Form validation integration
- **postcss**: CSS processing and optimization

### Type Safety and Validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **nanoid**: Unique ID generation
- **zod**: Runtime type validation and schema definition