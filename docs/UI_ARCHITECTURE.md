# WebtrixPro UI Architecture Documentation

## Table of Contents
1. [Overview](#overview)
2. [Design System](#design-system)
3. [Component Structure](#component-structure)
4. [Page Architecture](#page-architecture)
5. [Styling Approach](#styling-approach)
6. [Component Patterns](#component-patterns)
7. [Best Practices](#best-practices)
8. [File Organization](#file-organization)

---

## Overview

The WebtrixPro website is built using **Next.js 16** with the **App Router** architecture. The UI follows a component-based approach with a strong emphasis on reusability, type safety, and maintainability.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Type Safety**: TypeScript
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod validation

---

## Design System

### Color Palette

The WebtrixPro design system uses a carefully selected color palette defined in `app/globals.css`:

#### Primary Colors (Green)
\`\`\`css
--primary: 142 76% 36%;           /* Main brand green */
--primary-foreground: 0 0% 100%;  /* White text on green */
\`\`\`

#### Secondary Colors (Yellow/Gold)
\`\`\`css
--secondary: 48 100% 50%;          /* Bright yellow for accents */
--accent: 45 93% 47%;              /* Gold for highlights */
\`\`\`

#### Neutral Colors (Grays)
\`\`\`css
--background: 0 0% 100%;           /* White background */
--foreground: 222.2 84% 4.9%;     /* Near-black text */
--muted: 210 40% 96.1%;           /* Light gray backgrounds */
--muted-foreground: 215.4 16.3% 46.9%; /* Gray text */
\`\`\`

#### Semantic Colors
\`\`\`css
--destructive: 0 84.2% 60.2%;     /* Red for errors/delete */
--success: 142 76% 36%;            /* Green for success states */
--warning: 48 100% 50%;            /* Yellow for warnings */
\`\`\`

### Typography

The website uses the **Geist** font family system:

- **Sans Serif**: Geist (primary font for UI)
- **Mono**: Geist Mono (for code snippets if needed)

#### Font Configuration
\`\`\`typescript
// app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })
\`\`\`

#### Typography Scale
- **Display 1**: `text-5xl md:text-6xl lg:text-7xl font-bold` (Hero headings)
- **Display 2**: `text-4xl md:text-5xl font-bold` (Section headings)
- **Heading 1**: `text-3xl md:text-4xl font-bold` (Page titles)
- **Heading 2**: `text-2xl md:text-3xl font-semibold` (Subsections)
- **Heading 3**: `text-xl md:text-2xl font-semibold` (Card titles)
- **Body**: `text-base leading-relaxed` (Paragraph text)
- **Small**: `text-sm` (Captions, labels)

### Spacing System

Tailwind's default spacing scale is used (4px base unit):
- `p-4` = 16px padding
- `gap-6` = 24px gap between elements
- `mb-8` = 32px margin bottom
- `mt-12` = 48px margin top

### Border Radius
\`\`\`css
--radius: 0.5rem; /* 8px - used globally via Tailwind config */
\`\`\`

---

## Component Structure

### Component Hierarchy

\`\`\`
app/
├── page.tsx                    # Homepage (Screen)
├── about/page.tsx              # About page (Screen)
├── services/page.tsx           # Services listing (Screen)
├── portfolio/page.tsx          # Portfolio showcase (Screen)
├── testimonials/page.tsx       # Client testimonials (Screen)
└── contact/page.tsx            # Contact page (Screen)

components/
├── shared/                     # Shared components across pages
│   ├── LoadingSpinner.tsx      # Loading state component
│   ├── ErrorState.tsx          # Error display with retry
│   └── EmptyState.tsx          # Empty state placeholder
├── contact/                    # Contact-specific components
│   ├── ContactForm.tsx         # Contact form with validation
│   └── ContactInfo.tsx         # Contact information display
├── header.tsx                  # Site header/navigation
├── footer.tsx                  # Site footer
└── ui/                         # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── form.tsx
    └── ... (other shadcn components)
\`\`\`

### Component Types

#### 1. **Screen Components** (Pages)
- Located in `app/` directory
- Can be Server or Client Components
- Handle data fetching via hooks
- Compose feature components and layout

**Example: Homepage**
\`\`\`typescript
// app/page.tsx
'use client'

import { useHomepage } from '@/hooks/use-homepage'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { ErrorState } from '@/components/shared/ErrorState'

export default function HomePage() {
  const { data, isLoading, error, refetch } = useHomepage()

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorState error={error} retry={refetch} />

  return (
    <main>
      {/* Page content */}
    </main>
  )
}
\`\`\`

#### 2. **Feature Components**
- Domain-specific components (e.g., `ContactForm`, `ServiceCard`)
- Encapsulate business logic for specific features
- Use hooks for data management
- Located in `components/{feature}/`

**Example: Contact Form**
\`\`\`typescript
// components/contact/ContactForm.tsx
'use client'

export function ContactForm() {
  const { mutate, isPending } = useCreateContact()
  
  const form = useForm<CreateContactInput>({
    resolver: zodResolver(createContactSchema),
  })

  return (
    <Form {...form}>
      {/* Form fields */}
    </Form>
  )
}
\`\`\`

#### 3. **Shared Components**
- Reusable across multiple features
- Generic and configurable via props
- Located in `components/shared/`

**Example: Loading Spinner**
\`\`\`typescript
// components/shared/LoadingSpinner.tsx
export function LoadingSpinner({ size = 'default' }: LoadingSpinnerProps) {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className={cn('animate-spin', sizeClasses[size])} />
    </div>
  )
}
\`\`\`

#### 4. **UI Components** (shadcn/ui)
- Primitive, unstyled components
- Highly composable and accessible
- Located in `components/ui/`
- Based on Radix UI primitives

---

## Page Architecture

### Page Structure Pattern

Every page follows this structure:

\`\`\`typescript
// 1. Imports
import { usePageHook } from '@/hooks/use-page-hook'
import { Component } from '@/components/feature/Component'

// 2. Page Component
export default function PageName() {
  // 3. Data fetching
  const { data, isLoading, error, refetch } = usePageHook()

  // 4. Loading state
  if (isLoading) return <LoadingSpinner />

  // 5. Error state
  if (error) return <ErrorState error={error} retry={refetch} />

  // 6. Main content
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Content */}
        </div>
      </section>

      {/* Additional sections */}
    </main>
  )
}
\`\`\`

### Section Pattern

Each page is divided into semantic sections:

\`\`\`tsx
{/* Hero Section */}
<section className="bg-gradient-to-br from-primary/5 to-white py-20 md:py-32">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Empowering businesses to{' '}
        <span className="text-primary">work smarter</span>, not harder.
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Supporting text goes here
      </p>
      <Button size="lg">Get Started</Button>
    </div>
  </div>
</section>

{/* Features Section */}
<section className="py-20 bg-slate-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      What We <span className="text-primary">Do</span>.
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Feature cards */}
    </div>
  </div>
</section>
\`\`\`

---

## Styling Approach

### Tailwind CSS v4

The project uses **Tailwind CSS v4** with inline theme configuration in `globals.css`:

\`\`\`css
@import 'tailwindcss';

@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  
  /* Custom colors, spacing, etc. */
}
\`\`\`

### Styling Conventions

#### 1. **Component Variants with cn()**
Use the `cn()` utility from `lib/utils.ts` to combine class names:

\`\`\`typescript
import { cn } from '@/lib/utils'

<Button 
  className={cn(
    'bg-primary text-white',
    isPending && 'opacity-50 cursor-not-allowed',
    size === 'large' && 'px-8 py-4'
  )}
/>
\`\`\`

#### 2. **Responsive Design**
Mobile-first approach using Tailwind breakpoints:

\`\`\`tsx
<div className="
  w-full           /* Mobile: full width */
  md:w-1/2         /* Tablet: half width */
  lg:w-1/3         /* Desktop: one third */
  px-4             /* Horizontal padding */
  py-6 md:py-8     /* Responsive vertical padding */
">
\`\`\`

#### 3. **Layout Patterns**

**Flexbox (Most Common)**
\`\`\`tsx
<div className="flex items-center justify-between gap-4">
  {/* Horizontal layout with space between */}
</div>

<div className="flex flex-col gap-6">
  {/* Vertical stack with gap */}
</div>
\`\`\`

**Grid**
\`\`\`tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Responsive grid */}
</div>
\`\`\`

**Container Pattern**
\`\`\`tsx
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      {/* Centered content with max width */}
    </div>
  </div>
</section>
\`\`\`

#### 4. **Color Usage**

\`\`\`tsx
{/* Text colors */}
<h1 className="text-foreground">Main text</h1>
<p className="text-muted-foreground">Secondary text</p>
<span className="text-primary">Brand color text</span>

{/* Background colors */}
<div className="bg-background">White background</div>
<div className="bg-primary text-primary-foreground">Brand background</div>
<div className="bg-slate-900 text-white">Dark background</div>

{/* Gradient backgrounds */}
<div className="bg-gradient-to-br from-primary/5 to-white">
  Subtle gradient
</div>
\`\`\`

---

## Component Patterns

### 1. **Card Component Pattern**

\`\`\`tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Service Title</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Detailed content goes here</p>
  </CardContent>
</Card>
\`\`\`

### 2. **Button Variants**

\`\`\`tsx
import { Button } from '@/components/ui/button'

{/* Primary action */}
<Button variant="default" size="lg">
  Get Started
</Button>

{/* Secondary action */}
<Button variant="outline">
  Learn More
</Button>

{/* Destructive action */}
<Button variant="destructive">
  Delete
</Button>

{/* With icon */}
<Button>
  <Phone className="mr-2 h-4 w-4" />
  Call Now
</Button>
\`\`\`

### 3. **Form Pattern**

\`\`\`tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'

function MyForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { ... }
  })

  const onSubmit = (data: FormData) => {
    // Handle submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fieldName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Field Label</FormLabel>
              <FormControl>
                <Input placeholder="Enter value" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  )
}
\`\`\`

### 4. **Loading States**

\`\`\`tsx
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

{/* Full page loading */}
{isLoading && <LoadingSpinner size="large" fullScreen />}

{/* Inline loading */}
{isLoading ? (
  <LoadingSpinner size="small" />
) : (
  <Content />
)}

{/* Button loading */}
<Button disabled={isPending}>
  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  Submit
</Button>
\`\`\`

### 5. **Error States**

\`\`\`tsx
import { ErrorState } from '@/components/shared/ErrorState'

{error && (
  <ErrorState 
    error={error}
    retry={refetch}
    title="Failed to load data"
    description="Please try again or contact support"
  />
)}
\`\`\`

---

## Best Practices

### 1. **Component Composition**

✅ **Good**: Break down into smaller components
\`\`\`tsx
function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
\`\`\`

❌ **Bad**: One large monolithic component
\`\`\`tsx
function HomePage() {
  return (
    <main>
      {/* 500 lines of JSX */}
    </main>
  )
}
\`\`\`

### 2. **Props Typing**

✅ **Good**: Explicit interface
\`\`\`tsx
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

function Button({ variant = 'default', size = 'md', ...props }: ButtonProps) {
  // ...
}
\`\`\`

❌ **Bad**: Any type
\`\`\`tsx
function Button(props: any) {
  // ...
}
\`\`\`

### 3. **Conditional Rendering**

✅ **Good**: Early returns
\`\`\`tsx
if (isLoading) return <LoadingSpinner />
if (error) return <ErrorState error={error} />
if (!data) return <EmptyState />

return <Content data={data} />
\`\`\`

❌ **Bad**: Nested ternaries
\`\`\`tsx
return isLoading ? <Spinner /> : error ? <Error /> : data ? <Content /> : <Empty />
\`\`\`

### 4. **State Management**

✅ **Good**: Use hooks for server state
\`\`\`tsx
const { data, isLoading, error } = useServices()
\`\`\`

❌ **Bad**: Manual fetch in useEffect
\`\`\`tsx
const [data, setData] = useState(null)

useEffect(() => {
  fetch('/api/services')
    .then(res => res.json())
    .then(setData)
}, [])
\`\`\`

### 5. **Accessibility**

Always include:
- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<article>`)
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Focus states

\`\`\`tsx
<button 
  className="focus:ring-2 focus:ring-primary focus:outline-none"
  aria-label="Open menu"
>
  <Menu />
</button>
\`\`\`

---

## File Organization

### Project Structure

\`\`\`
webtrixpro-cms-ui-config/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles + Tailwind
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── testimonials/
│   ├── contact/
│   └── api/                      # API routes
│       └── v1/
│           ├── homepage/
│           ├── about/
│           └── ...
├── components/
│   ├── shared/                   # Reusable components
│   ├── contact/                  # Feature components
│   ├── header.tsx
│   ├── footer.tsx
│   └── ui/                       # shadcn/ui primitives
├── hooks/                        # Custom hooks
│   ├── use-homepage.ts
│   ├── use-services.ts
│   └── ...
├── lib/                          # Utilities & services
│   ├── services/                 # API service layer
│   ├── providers/                # Context providers
│   ├── utils.ts                  # Helper functions
│   ├── custom-fetch.ts
│   └── logger.ts
├── types/                        # TypeScript types
│   ├── homepage/
│   ├── service/
│   └── ...
├── public/                       # Static assets
│   └── images/
└── docs/                         # Documentation
\`\`\`

### Naming Conventions

- **Components**: PascalCase (`ContactForm.tsx`, `LoadingSpinner.tsx`)
- **Hooks**: camelCase with `use` prefix (`use-homepage.ts`, `use-contacts.ts`)
- **Types**: PascalCase interfaces (`CreateContactInput`, `Service`)
- **Files**: kebab-case for multi-word (`contact-form.tsx`, `use-global-error.ts`)
- **CSS Classes**: Tailwind utility classes (no custom CSS files)

---

## Summary

The WebtrixPro UI is built with:
1. **Component-based architecture** for reusability and maintainability
2. **Type-safe** with TypeScript interfaces and Zod schemas
3. **Tailwind CSS v4** for consistent, utility-first styling
4. **Responsive design** with mobile-first approach
5. **Accessibility** as a core principle
6. **Layered architecture** separating concerns (Screen → Hook → Service → API)

This architecture ensures the UI is scalable, maintainable, and provides an excellent user experience across all devices.
