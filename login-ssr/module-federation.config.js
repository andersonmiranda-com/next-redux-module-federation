const deps = require("./package.json").dependencies;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {};
};

module.exports = ({ isServer }) => ({
  name: "login",
  filename: "static/chunks/remoteEntry.js",
  remotes: remotes(isServer),
  extraOptions: {
    automaticAsyncBoundary: true,
    skipSharingNextInternals: true,
  },
  exposes: {
    "./loginReducer": "./src/store/slices/loginSlice.ts",
    "./styles": "./src/styles/login-styles.css",
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
