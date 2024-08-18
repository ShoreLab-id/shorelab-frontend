/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shorelab-backend.vercel.app',
        port: '',
        pathname: '/api/static/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/api/static/**'
      },
    ]
  }
};

export default nextConfig;
