const path = require("path");
// const CleanWebpackPlugin = require("clean-webpack-plugin");s

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "Project OOP", "scripts"),
    publicPath: "Project OOP/scr"
  },
  devtool: "eval-cheap-module-source-map"
  // Plugin: [
  //   new CleanWebpackPlugin()
  // ]
};

// const webpackConfig = {
//   plugins: [
//     /**
//          * All files inside webpack's output.path directory will be removed once, but the
//          * directory itself will not be. If using webpack 4+'s default configuration,
//          * everything under <PROJECT_DIR>/dist/ will be removed.
//          * Use cleanOnceBeforeBuildPatterns to override this behavior.
//          *
//          * During rebuilds, all webpack assets that are not used anymore
//          * will be removed automatically.
//          *
//          * See `Options and Defaults` for information
//          */
//     new CleanWebpackPlugin()
//   ]
// };
