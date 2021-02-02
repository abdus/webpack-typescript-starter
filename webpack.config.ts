import * as path from "path";
import * as webpack from "webpack";
import * as MiniCssExtract from "mini-css-extract-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === "prod" ? "production" : "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve("build"),
    filename: "[name].[contenthash].js",
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtract(),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  // modules and loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },

      {
        test: /\.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
    ],
  },

  // dev server config
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
  },
};

export default config;
