import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this section
  async rewrites() {
    return [
      {
        source: '/:locale/not-found',
        destination: '/:locale/404',
      },
    ];
  },
};

export default withNextIntl(nextConfig);