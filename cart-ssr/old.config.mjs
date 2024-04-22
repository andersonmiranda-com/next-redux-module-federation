import NextFederationPlugin from "@module-federation/nextjs-mf";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import pack from "./package.json" assert { type: "json" };
const deps = pack.dependencies;

const configNext = {
  output: "standalone",
  assetPrefix: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "paris.cl",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cms-paris.ecomm.cencosud.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3002",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3003",
        pathname: "**",
      },
    ],
    formats: ["image/webp"],
  },
  reactStrictMode: true,
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

    config.plugins.push(
      new NextFederationPlugin({
        name: "cart",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        extraOptions: {
          automaticAsyncBoundary: true,
          skipSharingNextInternals: true,
        },
        exposes: {
          "./cartReducer": "./src/store/slices/cartSlice.ts",
          "./styles": "./src/styles/cart-styles.css",
        },
        shared: {
          redux: {
            singleton: true,
            requiredVersion: deps["redux"],
          },
          "react-redux": {
            singleton: true,
            requiredVersion: deps["react-redux"],
          },
          "@reduxjs/toolkit": {
            singleton: true,
            requiredVersion: deps["@reduxjs/toolkit"],
          },
        },
      })
    );

    config.module.rules.push({
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/css/cart-styles.css",
      })
    );

    return config;
  },
};

export default configNext;
