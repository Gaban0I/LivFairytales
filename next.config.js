/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/legal/mentions-legales',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/extras/partnerships',
        destination: '/partnership',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
