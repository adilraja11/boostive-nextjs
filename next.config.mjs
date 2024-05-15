/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'daisyui.com'
            }
        ]
    }
};

export default nextConfig;
