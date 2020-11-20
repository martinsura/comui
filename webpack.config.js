const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

const isDev = process.env.WEBPACK_DEV_SERVER || false;
const isProd = isDev === false;
const publicPath = process.env.PUBLIC_PATH || "/";
const version = process.env.GITHUB_SHA;
const apiUrl = process.env.API_URL || "";

function useCache(loaders) {
  if (isDev) {
    return ["cache-loader"].concat(loaders);
  }

  return loaders;
}

const webpackConfig = {
  entry: {
    app: ["./src/main.tsx"],
  },
  resolve: {
    extensions: [".mjs", ".ts", ".js", ".tsx", ".svelte", ".json"],
  },
  devtool: false,
  devServer: {
    //host: "0.0.0.0",
    hot: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: publicPath,
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: useCache(["babel-loader"]),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|png|eot|svg|jpg|JPG|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: publicPath === "/" ? "assets/[name].[hash].[ext]" : "/assets/[name].[hash].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      base: publicPath !== "/" ? publicPath + "/" : undefined,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new webpack.DefinePlugin({
      IS_DEBUG: JSON.stringify(isDev),
      VERSION: JSON.stringify(version),
      API_URL: JSON.stringify(apiUrl),
      PUBLIC_PATH: JSON.stringify(publicPath),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],

  mode: isDev ? "development" : "production",
};

if (isDev) {
  webpackConfig.plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
}
if (isProd) {
  const config = process.env.CONFIG || "prod";
  webpackConfig.mode = "production";
  webpackConfig.optimization = {
    nodeEnv: "production",
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          extractComments: "all",
          compress: {
            //drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  };

  webpackConfig.plugins.push(
    //new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/favicon.ico",
          to: path.resolve(__dirname, "./dist/favicon.ico"),
        },
      ],
    })
  );
}

module.exports = webpackConfig;
