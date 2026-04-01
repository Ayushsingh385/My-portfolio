# Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimal aesthetic with dark/light mode
- **Smooth Animations**: Framer Motion for scroll animations and micro-interactions
- **Fully Responsive**: Works on mobile, tablet, and desktop
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and Open Graph support
- **Fast Performance**: Optimized images, code splitting, and lazy loading
- **Accessible**: ARIA labels, keyboard navigation, and skip links
- **Contact Form**: Working contact form with EmailJS integration
- **Project Filtering**: Filter projects by category
- **Downloadable Resume**: Button to download resume PDF

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Google Fonts (Inter, Fira Code)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Build for production:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start production server:
```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Customization

### Personal Information

Edit `src/data/index.ts` to update:
- Name, title, and bio
- Contact information
- Social links
- Skills and technologies
- Projects
- Experience and education

### Colors

The color palette is defined in `tailwind.config.ts`. Modify:
- `primary` - Main accent color (default: sky blue)
- `accent` - Secondary accent color (default: purple)

### Fonts

Fonts are configured in `src/app/layout.tsx`. The default fonts are:
- `Inter` - Body text
- `Fira Code` - Code/monospace text

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Netlify dashboard
6. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Export as static site (if not using server features):
```bash
npm run export
```

3. Deploy the `out` folder to any static hosting service.

## Project Structure

```
portfolio-website/
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── icon.svg
│   └── projects/           # Project images
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── not-found.tsx   # 404 page
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   └── robots.ts       # Dynamic robots.txt
│   ├── components/         # React components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Reusable UI components
│   ├── data/               # Static data/content
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Made with ❤️ using Next.js and Tailwind CSS