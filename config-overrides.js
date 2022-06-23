/* config-overrides.js */
const {
  rewiredSingleSpa,
  rewiredSingleSpaDevServer,
} = require("react-app-rewired-single-spa");

// use `customize-cra`
const { override, overrideDevServer } = require("customize-cra");

module.exports = {
  webpack: override(
    rewiredSingleSpa({
      orgName: "thaddeusjiang",
      projectName: "legacy",
      entry: "./src/thaddeus-legacy.js",
      reactPackagesAsExternal: true,
      peerDepsAsExternal: true,
      orgPackagesAsExternal: true,
    })
  ),
  devServer: overrideDevServer(rewiredSingleSpaDevServer()),
};
