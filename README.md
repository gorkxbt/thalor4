# ThalorFi Landing Page

A modern, responsive landing page for ThalorFi built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful animated gradient background with floating orbs
- 🔗 Web3 wallet integration (MetaMask, Rabby, and other EVM wallets)
- 📝 Registration form with email, EVM address, and X account
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎯 TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd thalorfi-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page component
├── public/
│   └── logo.png             # ThalorFi logo
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

**Vercel will automatically detect this as a Next.js project and deploy it correctly.**

### GitHub Pages (Alternative)

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select "GitHub Actions" as source
4. Create a workflow file in `.github/workflows/deploy.yml`

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

No environment variables are required for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to ThalorFi. 