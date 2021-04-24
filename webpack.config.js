const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                          resources: [path.resolve(__dirname, "src/shared/resources.scss")]
                        }
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ],
    },
    resolve: {
        alias: {
          "@assets": path.resolve(__dirname, "src/assets/"),
          "@components": path.resolve(__dirname, "src/components/"),
          "@shared": path.resolve(__dirname, "src/shared/")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};