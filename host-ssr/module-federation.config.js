const deps = require("./package.json").dependencies;

const HEADER_APP_URL =
  process.env.NEXT_PUBLIC_HEADER_APP_URL || "http://localhost:3002";
const HOME_APP_URL =
  process.env.NEXT_PUBLIC_HOME_APP_URL || "http://localhost:3001";
const LOGIN_APP_URL =
  process.env.NEXT_PUBLIC_LOGIN_APP_URL || "http://localhost:3003";
const CART_APP_URL =
  process.env.NEXT_PUBLIC_CART_APP_URL || "http://localhost:3004";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    header: `header@${HEADER_APP_URL}/_next/static/${location}/remoteEntry.js`,
    home: `home@${HOME_APP_URL}/_next/static/${location}/remoteEntry.js`,
    login: `login@${LOGIN_APP_URL}/_next/static/${location}/remoteEntry.js`,
    cart: `cart@${CART_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = ({ isServer }) => ({
  name: "host",
  filename: "static/chunks/remoteEntry.js",
  remotes: remotes(isServer),
  extraOptions: {
    automaticAsyncBoundary: true,
    skipSharingNextInternals: true,
  },
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
});
