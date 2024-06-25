const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJSON = require("../package.json");

const devConfig = {
  mode: "development", //Specifies that webpack should operate in development mode.
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    //This object configures the webpack development server.
    port: 8082, //Specifies the port on which the development server will run.
    historyApiFallback: {
      // Configures fallback behavior for history API usage. In this case, it redirects all requests to "index.html", which is useful for client-side routing in single-page applications (SPAs).
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: packageJSON.dependencies,
    }),
    new HtmlWebpackPlugin({
      //Creates an instance of the HtmlWebpackPlugin with configuration options. In this case, it specifies the path to the template HTML file (./public/index.html). This plugin will generate an HTML file based on this template and inject the webpack bundles into it.
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); //This merges the two configurations, with properties from devConfig taking precedence over properties from commonConfig. This allows for easy customization and overrides for specific environments.
