/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'tf.fi' },
      { protocol: 'https', hostname: 'cms.tf.fi' },
      { protocol: 'https', hostname: 'test.tf.fi' },
      { protocol: 'http', hostname: 'localhost' },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/drive-storage/**',
      },
    ],
  },
  output: 'standalone',
}
