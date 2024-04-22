import NextFederationPlugin from "@module-federation/nextjs-mf";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import pack from "./package.json" assert { type: "json" };
const deps = pack.dependencies;

const HEADER_APP_URL =
  process.env.NEXT_PUBLIC_HEADER_APP_URL || "http://localhost:3002";
const HOME_APP_URL =
  process.env.NEXT_PUBLIC_HOME_APP_URL || "http://localhost:3001";
const LOGIN_APP_URL =
  process.env.NEXT_PUBLIC_LOGIN_APP_URL || "http://localhost:3003";
const CART_APP_URL =
  process.env.NEXT_PUBLIC_CART_APP_URL || "http://localhost:3004";

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
    const { isServer } = options;
    const location = isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          header: `header@${HEADER_APP_URL}/_next/static/${location}/remoteEntry.js`,
          home: `home@${HOME_APP_URL}/_next/static/${location}/remoteEntry.js`,
          login: `login@${LOGIN_APP_URL}/_next/static/${location}/remoteEntry.js`,
          cart: `cart@${CART_APP_URL}/_next/static/${location}/remoteEntry.js`,
        },
        extraOptions: {
          automaticAsyncBoundary: true,
          skipSharingNextInternals: true,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
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
        filename: "static/css/host-styles.css",
      })
    );

    return config;
  },
};

export default configNext;
