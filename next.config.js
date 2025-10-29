/** 
 * @type {import('next').NextConfig} 
 **/
const nextConfig = {
    output: 'standalone',
    transpilePackages: ['@refinedev/antd', '@refinedev/core', 'antd'],
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
    },
    experimental: {
        optimizeCss: true,
        cssChunking: 'loose',
        gzipSize: true,
        webVitalsAttribution: ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'],
        swcMinify: true,
    },
    typescript: {
        ignoreBuildErrors: true, // 👈 Bỏ qua lỗi TypeScript khi build
    },
};

module.exports = nextConfig;
