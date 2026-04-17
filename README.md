# Yielded Circle Tech - Website

A modern, high-converting Next.js website for Yielded Circle Tech - a software development agency specializing in MVP validation and full-stack development for fintech, healthcare, and edtech founders.

## 🎯 Features

- **Dark theme** with professional aesthetics
- **Fully responsive** design (mobile, tablet, desktop)
- **High performance** with Next.js 14+ optimization
- **Conversion-focused** with strategic CTA placement
- **Smooth animations** and interactions
- **Accessibility** best practices (WCAG compliant)
- **SEO optimized** metadata and structure
- **Type-safe** with TypeScript
- **CSS Modules** for scoped styling

## 📋 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with global setup
│   └── page.tsx            # Main landing page
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── Work.tsx            # Portfolio/work showcase
│   ├── Process.tsx         # Process steps
│   ├── Industries.tsx      # Industries served
│   ├── Testimonials.tsx    # Client testimonials
│   ├── CTA.tsx             # Contact/lead capture form
│   └── Footer.tsx          # Footer navigation
├── styles/
│   ├── globals.css         # Global styles & dark theme
│   ├── navbar.module.css   # Navbar styles
│   ├── hero.module.css     # Hero styles
│   ├── services.module.css # Services grid styles
│   ├── work.module.css     # Work section styles
│   ├── process.module.css  # Process steps styles
│   ├── industries.module.css # Industries styles
│   ├── testimonials.module.css # Testimonials styles
│   ├── cta.module.css      # CTA form styles
│   └── footer.module.css   # Footer styles
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .gitignore             # Git ignore rules
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies & scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd yielded-circle-website-fe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your configuration values.

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 🎨 Styling & Theming

### Dark Theme Colors

The website uses a dark theme with carefully selected colors defined in CSS variables:

- **Background**: `#0A0A0A` (primary), `#141414` (secondary)
- **Text**: `#FFFFFF` (primary), `#B0B0B0` (secondary)
- **Brand**: `#B85C28` (primary), `#963F13` (dark)
- **Borders**: Various shades from `#1F1F1F` to `#333333`

All colors are defined in `styles/globals.css` and can be customized via CSS variables.

### Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 769px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

Media queries are implemented in each component's CSS module.

## ✨ Key Sections

### Hero Section
- Bold headline with brand accent
- Subheading with value proposition
- Dual CTA buttons (primary & secondary)
- Key stats/metrics

### Services
- 6 service cards with icons
- Detailed descriptions
- Service tags
- Hover animations

### Portfolio/Work
- Project showcase with badges
- Real project examples
- Category filtering via badge types
- Case studies setup

### Process
- 4-step process breakdown
- Clear descriptions
- Numbered steps
- Timeline-style layout

### Industries
- Industry pills with emojis
- Interactive hover states
- Flexible grid layout

### Testimonials
- Client testimonials
- Author information with avatars
- Rating-ready structure

### Contact/CTA
- Email capture form
- WhatsApp integration
- Success message
- Form validation

## 🔧 Customization

### Update Site Information

Edit `app/layout.tsx` to update:
- Site title and description
- Metadata (keywords, authors)
- Open Graph tags

### Change Brand Colors

Update in `styles/globals.css`:
```css
:root {
  --color-brand: #B85C28;
  --color-brand-dark: #963F13;
  --color-brand-light: #FFF0E6;
}
```

### Modify Typography

Update font sizes in `styles/globals.css`:
```css
h1 { font-size: clamp(2rem, 5vw, 2.75rem); }
h2 { font-size: clamp(1.75rem, 4vw, 2.125rem); }
```

### Update Navigation Links

Edit the `scrollToSection` function in `components/Navbar.tsx` to add new sections.

## 🛠️ Performance Optimizations

- **Image Optimization**: Ready for Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS Modules**: Scoped styles, reduced CSS bloat
- **Lazy Loading**: Ready for component lazy loading
- **Minification**: Automatic in production build
- **SWC Compiler**: Fast builds and bundling

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles where needed
- Keyboard navigation support
- Focus visible styles
- Color contrast compliance
- Form labels and validation

## 🔐 Security

- No hardcoded sensitive data
- XSS protection via React
- CSRF protection ready
- Environment variable support for secrets

## 📱 Mobile Optimization

- Touch-friendly button sizes (minimum 48px)
- Mobile-first design approach
- Optimized font sizes for readability
- Proper viewport meta tags
- iOS-friendly input handling

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push
4. Custom domain setup in dashboard

### Other Platforms

- **Netlify**: `npm run build` → deploy `out/` folder
- **AWS Amplify**: Connect GitHub repository
- **Docker**: Create Dockerfile with Node.js base image

## 📝 Environment Variables

Create `.env.local`:

```env
# API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# Email service (optional)
NEXT_PUBLIC_CONTACT_EMAIL=hello@yieldedcircle.tech
```

## 🐛 Troubleshooting

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not loading
- Clear browser cache: `Ctrl+Shift+Delete`
- Rebuild: `npm run build`
- Check CSS module imports

### TypeScript errors
```bash
npm run type-check
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [CSS Modules Docs](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

See [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions welcome! Please follow these steps:

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📞 Support

For issues or questions:
- Email: hello@yieldedcircle.tech
- WhatsApp: [Contact us](https://wa.me/2348000000000)
- LinkedIn: [Yielded Circle Tech](https://linkedin.com)

---

Built with ❤️ by Yielded Circle Tech