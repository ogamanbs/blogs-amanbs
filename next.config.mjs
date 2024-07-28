/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add any other Next.js configuration here if needed
    webpack(config) {
    // Ensure that `.mjs` files are resolved properly
    config.resolve.extensions.push('.mjs');
    // Return the modified config
    return config;
    },
};

export default nextConfig;
