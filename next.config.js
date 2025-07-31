/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental appDir as it's now stable in Next.js 14
  images: {
    unoptimized: true, // For Vercel deployment
  },
  // Ensure static export works properly
  trailingSlash: false,
  // Optimize for Vercel
  swcMinify: true,
}

module.exports = nextConfig 