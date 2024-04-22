const deps = require("./package.json").dependencies;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {};
};

module.exports = ({ isServer }) => ({
  name: "cart",
  filename: "static/chunks/remoteEntry.js",
  remotes: remotes(isServer),
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
});
