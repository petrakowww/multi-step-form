import "webpack-dev-server";
import path from "path";
import { Configuration } from "webpack";
import { buildDevServer } from "./build.dev-server";
import { buildLoaders } from "./build.loaders";
import { buildPlugins } from "./build.plugins";
import { buildResolvers } from "./build.resolvers";
import { BuildOptions } from "./types/build.options";
import { isDevMode } from "./utils/build.type";

export const buildWebpack = (options: BuildOptions): Configuration => {
    const { mode, paths } = options;

    const isDev = isDevMode(mode);

    const config: Configuration = {
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        target: "web",
        devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
        devServer: isDev ? buildDevServer(options) : undefined,
    };

    return config;
};
