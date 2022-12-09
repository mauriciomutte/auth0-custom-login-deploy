/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const branchName = process.env.BRANCH_NAME;
const assetPrefix = `${process.env.STATIC_CDN_URI}/${branchName}`;

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: isProd ? assetPrefix : undefined,
};

module.exports = nextConfig;
