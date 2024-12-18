import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pximg.xiaohan-kaka.me',
        pathname: '/img-original/img/**',
      },
    ],
  },
};

export default withMDX(config);
