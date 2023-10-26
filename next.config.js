/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/inventario',
                destination: '/inventario/requisicion',
                permanent: true
            },
            {
                source: '/ingredientes',
                destination: '/ingredientes/listado',
                permanent: true
            },
            // {
            //     source: '/platillos',
            //     destination: '/platillos/listado',
            //     permanent: true
            // }
        ]
    },
}

module.exports = nextConfig
