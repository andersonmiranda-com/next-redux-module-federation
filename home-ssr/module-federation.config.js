const deps = require("./package.json").dependencies;

const CART_APP_URL =
  process.env.NEXT_PUBLIC_CART_APP_URL || "http://localhost:3004";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    cart: `cart@${CART_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = ({ isServer }) => ({
  name: "home",
  filename: "static/chunks/remoteEntry.js",
  remotes: remotes(isServer),
  extraOptions: {
    automaticAsyncBoundary: true,
    skipSharingNextInternals: true,
  },
  exposes: {
    "./Home": "./src/components/Home.tsx",
    "./styles": "./src/styles/home-styles.css",
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
});
