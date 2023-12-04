/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'diskopukm.palembang.go.id',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
