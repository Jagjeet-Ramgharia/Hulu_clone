/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.digitaltveurope.com",
      "icon-library.com",
      "www.pngfind.com",
      "image.tmdb.org",
      "links.papareact.com",
    ],
  },
};

module.exports = nextConfig;
