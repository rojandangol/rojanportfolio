// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',           // ← Export static site (important!)
  assetPrefix: './',          // ← Use relative paths for CSS/JS/images
};

export default nextConfig;
