/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        externalResolver: true,
        runtime: "edge"
    },
};

export default nextConfig;
