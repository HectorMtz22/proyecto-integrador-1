/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/inventario',
                destination: '/inventario/requisicion',
                permanent: true
            }
        ]
    },
}

module.exports = nextConfig
