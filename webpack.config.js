const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
  entry: {
    main: "src/index.js"
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  // Source maps support ('inline-source-map' also works)
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "ts-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader?exportAsEs6Default",
            options: {
              minimize: true
            }
          }
        ]
      },
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: "html-loader",
      //     options: {
      //       attrs: [":data-src"]
      //     }
      //   }
      // },
      // {
      //   test: /\.tsx?$/,
      //   exclude: [path.resolve(__dirname, "node_modules")],
      //   loaders: [
      //     "angular2-template-loader?keepUrl=true",
      //     "ts-loader"
      //   ]
      //   // exclude: [/\.(spec|e2e)\.ts$/]
      // },
      /* Embed files. */
      // {
      //   test: /\.(html)$/,
      //   loader: "raw-loader",
      //   exclude: /\.async\.(html|css)$/
      // },
      // /* Async loading. */
      // {
      //   test: /\.async\.(html|css)$/,
      //   loaders: ["file?name=[name].[hash].[ext]", "extract"]
      // }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.resolve(__dirname, "../src")
    )
  ],
  externals: []
};
