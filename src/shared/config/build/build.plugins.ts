import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { isDevMode, isProdMode } from "./utils/build.type";
import { BuildOptions } from "./types/build.options";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";

export const buildPlugins = (
    options: BuildOptions
): Configuration["plugins"] => {
    const { mode, paths } = options;
    const isDev = isDevMode(mode);
    const isProd = isProdMode(mode);

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, "favicon.png"),
        }),
    ];

    if (isDev) {
        plugins.push(
            new ProgressPlugin(),
            new ReactRefreshWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin()
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            })
        );
    }

    return plugins.filter(Boolean);
};
