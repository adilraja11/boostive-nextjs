/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'daisyui.com'
            },
            {
                protocol: 'https',
                hostname: 'pub-798a103be026442c82d91a50a5a41f0b.r2.dev',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
