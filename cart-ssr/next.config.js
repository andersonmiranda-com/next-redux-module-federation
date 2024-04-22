const NextFederationPlugin = require('@module-federation/nextjs-mf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const moduleFederationConfig = require('./module-federation.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'paris.cl',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cms-paris.ecomm.cencosud.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3002',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3003',
                pathname: '**',
            },
        ],
    },
    /**
     *
     * @param {import('webpack').Configuration} config
     * @returns {import('webpack').Configuration}
     */
    webpack(config, options) {
        config.optimization = {
            ...config.optimization,
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: "styles",
                        type: "css/mini-extract",
                        chunks: "all",
                        enforce: true,
                    },
                },
            },
        };

        config.module.rules.push({
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
            ],
        });

        config.plugins.push(
            new NextFederationPlugin(
                moduleFederationConfig(options)
            )
        );

        config.plugins.push(new MiniCssExtractPlugin({
            filename: "static/chunks/[name].css",
        }));
        return config;
    },
}

module.exports = nextConfig;
