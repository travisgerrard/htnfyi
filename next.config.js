const images = require('remark-images');
const emoji = require('remark-emoji');
const withImages = require('next-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji],
  },
});

module.exports = withMDX(
  withImages({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    // Target must be serverless
    // target: 'serverless',
  })
);

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [images, emoji],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: '@mdx-js/react',
//   },
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure pageExtensions to include md and mdx
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//   // Optionally, add any other Next.js config below
//   reactStrictMode: true,
// };

// // Merge MDX config with Next.js config
// module.exports = withMDX(nextConfig);
