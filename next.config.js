/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const branchName = process.env.BRANCH_NAME;

const assetsURIByBranchName = {
	main: `${process.env.STATIC_CDN_URI}/main`,
	develop: `${process.env.STATIC_CDN_URI_DEV}/develop`,
	qa: `${process.env.STATIC_CDN_URI_DEV}/qa`,
};

const assetPrefix = assetsURIByBranchName[branchName];

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: isProd ? assetPrefix : undefined,
};

module.exports = nextConfig;
