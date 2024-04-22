import NextFederationPlugin from "@module-federation/nextjs-mf";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import pack from "./package.json" assert { type: "json" };
const deps = pack.dependencies;

const LOGIN_APP_URL =
  process.env.NEXT_PUBLIC_LOGIN_APP_URL || "http://localhost:3003";
const CART_APP_URL =
  process.env.NEXT_PUBLIC_CART_APP_URL || "http://localhost:3004";

const configNext = {
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "header",
        remotes: {
          login: `login@${LOGIN_APP_URL}/_next/static/${location}/remoteEntry.js`,
          cart: `cart@${CART_APP_URL}/_next/static/${location}/remoteEntry.js`,
        },

        filename: "static/chunks/remoteEntry.js",
        extraOptions: {
          automaticAsyncBoundary: true,
          skipSharingNextInternals: true,
        },
        exposes: {
          "./Header": "./src/components/Header.tsx",
          "./styles": "./src/styles/header-styles.css",
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
        filename: "static/css/header-styles.css",
      })
    );

    return config;
  },
};

export default configNext;
