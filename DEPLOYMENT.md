# Deployment Guide

## Local Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Before Deployment

1. **Update metadata in `app/layout.tsx`:**
   - Site title
   - Description
   - URL
   - Social media links

2. **Update contact information:**
   - Email in Footer component
   - WhatsApp number
   - LinkedIn profile

3. **Add images:**
   - OG image for social sharing (`public/og-image.png`)
   - Favicon (`public/favicon.ico`)

4. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Update API endpoints if needed

## Vercel Deployment (Recommended)

### Step 1: Prepare for Deployment
```bash
# Build locally to test
npm run build
npm start
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy"

### Step 3: Configure Domain
- In Vercel dashboard → Settings → Domains
- Add custom domain (e.g., yieldedcircle.tech)
- Update DNS records with your registrar

### Step 4: Set Environment Variables
- In Vercel dashboard → Settings → Environment Variables
- Add any sensitive variables

**That's it!** Vercel auto-deploys on every push to main branch.

## Environment Variables

`.env.example` is gitignored in this repo, so the full list lives here. All of these
must exist locally in `.env.local` and in the hosting provider before deploying.

| Variable | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | Yes | Lead form email delivery |
| `LEADS_TO_EMAIL` | Yes | Where lead notifications are sent |
| `LEADS_FROM_EMAIL` | Yes | Verified Resend sender address |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | `uro99o5y` — public identifier, safe in the client bundle |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No | Defaults to `2024-10-01` |
| `SANITY_REVALIDATE_SECRET` | Yes | Server-only shared secret for the publish webhook |

The build fails loudly if a required Sanity variable is missing.

## Blog / Sanity Setup

The blog is powered by Sanity. The Studio is embedded at `/studio` and requires a
Sanity login — it is not public. Three things must be configured in
[sanity.io/manage](https://sanity.io/manage) for project `uro99o5y`:

### 1. CORS origins
API → CORS origins → Add, **with credentials allowed**:
- `http://localhost:3001`
- `https://yieldedcircletech.com`

Without these the Studio loads but cannot read or write.

### 2. Environment variables
Add the four Sanity variables above to the hosting provider. Generate the secret with
`openssl rand -hex 24` and use the same value in both places.

### 3. Publish webhook
API → Webhooks → Create webhook:

| Setting | Value |
|---|---|
| URL | `https://yieldedcircletech.com/api/revalidate` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| Filter | `_type in ["post","author","category"]` |
| HTTP method | `POST` |
| HTTP header | `x-revalidate-secret: <your SANITY_REVALIDATE_SECRET>` |

Published edits then appear within seconds. Without the webhook, pages still refresh
on their own within 60 seconds.

To deploy a standalone Studio at `*.sanity.studio` as well, run `npx sanity deploy` —
it uses the same `sanity.config.ts`.

## Alternative: Netlify Deployment

### Step 1: Build Configuration
Update `next.config.js`:
```javascript
module.exports = {
  output: 'export', // For static export
}
```

### Step 2: Build Command
```bash
npm run build
```

### Step 3: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub
4. Build command: `npm run build`
5. Publish directory: `out`
6. Deploy

## Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and deploy:
```bash
docker build -t yielded-circle-tech .
docker run -p 3000:3000 yielded-circle-tech
```

## Performance Optimization Checklist

- [ ] Run `npm run build` to check for warnings
- [ ] Test on mobile devices
- [ ] Check Lighthouse score (DevTools → Lighthouse)
- [ ] Minify images
- [ ] Enable compression (Vercel does this by default)
- [ ] Use CDN for static assets (Vercel does this)

## Monitoring & Analytics

### Add Google Analytics

1. Create project in Google Analytics 4
2. Get Measurement ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add Google Analytics script to `app/layout.tsx`:
   ```tsx
   <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
   ```

### Monitor Performance

- Vercel Analytics: Built-in, shows Core Web Vitals
- Sentry: Error tracking and monitoring
- LogRocket: Session replay and analytics

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Styles Not Loading
- Ensure CSS modules are imported correctly
- Check file names match imports
- Rebuild and restart dev server

### Images Not Showing
- Ensure images are in `public/` folder
- Use correct path: `/image-name.png`
- Consider using Next.js Image component

## Backup & Security

- [ ] Keep GitHub repository backed up
- [ ] Use environment variables for sensitive data
- [ ] Enable Vercel's deployment protection
- [ ] Set up GitHub branch protection rules
- [ ] Consider CDN for static assets

## Post-Deployment

1. Test all functionality in production
2. Check mobile responsiveness
3. Verify form submissions work
4. Set up monitoring/alerts
5. Update DNS records if using custom domain
6. Set up SSL certificate (automatic with Vercel)

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issue in repository
- Contact: hello@yieldedcircle.tech
