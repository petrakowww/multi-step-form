import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { isDevMode, isProdMode } from "./utils/build.type";
import { BuildOptions } from "./types/build.options";

export const buildPlugins = (
    options: BuildOptions
): Configuration["plugins"] => {
    const {mode, paths} = options;
    const isDev = isDevMode(mode);
    const isProd = isProdMode(mode);

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];

    if (isDev) {
        plugins.push(new ProgressPlugin());
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
