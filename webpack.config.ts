import path from "path";
import "webpack-dev-server";
import { ProgressPlugin, Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Port } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariables {
    mode: Mode;
    port: Port;
}

export default (env: EnvVariables) => {
    const isDev = env.mode === "development";
    const isProd = env.mode === "production";

    const config: Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src/index.tsx"),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
            }),
            isDev && new ProgressPlugin(),
            isProd && new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            alias: {
                "@styles": path.resolve(__dirname, "src/shared/styles"),
            },
            extensions: [".tsx", ".ts", ".js"],
        },
        devtool: isDev && "inline-source-map",
        devServer: isDev
            ? {
                  port: env.port ?? 3000,
                  open: true,
              }
            : undefined,
    };

    return config;
};
