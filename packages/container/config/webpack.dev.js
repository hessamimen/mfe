const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJSON = require("../package.json");

const devConfig = {
  mode: "development", //Specifies that webpack should operate in development mode.
  devServer: {
    //This object configures the webpack development server.
    port: 8080, //Specifies the port on which the development server will run.
    historyApiFallback: {
      // Configures fallback behavior for history API usage. In this case, it redirects all requests to "index.html", which is useful for client-side routing in single-page applications (SPAs).
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); //This merges the two configurations, with properties from devConfig taking precedence over properties from commonConfig. This allows for easy customization and overrides for specific environments.
