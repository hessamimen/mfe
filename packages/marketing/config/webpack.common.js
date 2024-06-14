// module.exports: This is a CommonJS syntax used to export the configuration object, making it available for Webpack to use.
module.exports = {
  module: {
    //module: This property contains settings related to how the different modules (files) within the project should be treated.
    rules: [
      //rules: This is an array of rules that tells Webpack how to process files that match certain conditions.
      {
        test: /\.m?js$/, //any string that ends with .js or .mjs. The rule will apply to any file with a .js or .mjs extension
        exclude: /node_modules/, // Exclude files in node_modules directory
        use: {
          //use: Specifies the loader(s) to be used for files that match the test condition
          loader: "babel-loader", // Use Babel to transpile the files
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //Presets are collections of plugins and configuration options that allow Babel to transpile specific types of JavaScript code. They simplify the setup process by bundling together commonly used plugins.
            plugins: ["@babel/plugin-transform-runtime"], //Plugins are used to extend Babel’s functionality by transforming specific syntax that isn’t covered by presets.
          },
        },
      },
    ],
  },
};
