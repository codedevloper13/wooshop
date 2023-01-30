/** @format */

const path = require("path");

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	trailingSlash: false,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
		// Important: return the modified config
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},

	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
