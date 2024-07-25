/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_POSTHOG_KEY: 'phc_ecjhMgqiGNytLadyxazStAv0ke4TUCL8YiQQZY2QBWC',
    NEXT_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com",
  },
};

export default nextConfig;
