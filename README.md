# Garibook - Freedom in Every Journey

A modern car rental platform for Bangladesh built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚗 **Intercity Car Rental** - Travel across all 64 districts of Bangladesh
- ✈️ **Airport Transfer** - Reliable pickup and drop services at all major airports
- ⏰ **Hourly Rental** - Flexible hourly bookings for local trips
- 🏢 **Corporate Solutions** - Enterprise vehicle management system with advanced analytics
- 📱 **Mobile Responsive** - Fully responsive design for all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and smooth animations via Framer Motion

## Tech Stack

- **Framework:** Next.js 15.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Garibook
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Run the development server
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
Garibook/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroBookingWidget.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── MetricsSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CorporateDriverCTA.tsx
│   │   ├── MobileAppBanner.tsx
│   │   └── Footer.tsx
│   ├── lib/                 # Utilities and data
│   │   ├── data.ts         # Static data
│   │   ├── types.ts        # TypeScript types
│   │   └── utils.ts        # Helper functions
│   └── index.css           # Global styles
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## Key Components

### Navbar
- Fixed navigation with language selector (EN/BN)
- Mobile-responsive menu
- Login/signup modal

### HeroBookingWidget
- Dual-tab booking widget (Car Rental / Airport Transfer)
- Location and time selection
- Vehicle class selection

### ValueProposition
- Three-step booking process
- Key feature highlights
- Trust indicators

### ServicesGrid
- Four main service offerings
- Feature lists for each service
- Interactive hover effects

### MetricsSection
- Animated counters
- Key business metrics
- Dark background section

### Testimonials
- Customer reviews with ratings
- Grid layout with star ratings
- User avatars

### CorporateDriverCTA
- Two-column CTA section
- Business and driver onboarding
- Feature lists and action buttons

### MobileAppBanner
- App download promotion
- iOS and Android download buttons
- Phone mockup illustration

### Footer
- Company information
- Multi-column navigation links
- Social media links
- Payment methods display
- Contact information

## Color Palette

Primary Green:
- 50: #E6F7EF
- 500: #00A859 (Main brand color)
- 600: #008647
- 900: #002112

Slate Gray:
- 50-900: Neutral grays for text and backgrounds
- 950: #0F172A (Dark backgrounds)

## License

© 2024 Garibook. All rights reserved.

## Contact

For support or inquiries:
- Email: support@garibook.com
- Phone: +880 1XXX-XXXXXX
