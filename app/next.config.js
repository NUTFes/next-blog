const API_BASE_URL = process.env.API_BASE_URL
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  env: {
    API_BASE_URI: API_BASE_URL,
    ACCESS_TOKEN: ACCESS_TOKEN,
  },
}

module.exports = nextConfig
