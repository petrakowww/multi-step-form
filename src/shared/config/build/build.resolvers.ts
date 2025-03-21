import path from "path";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/build.options";

export const buildResolvers = (
    options: BuildOptions
): Configuration["resolve"] => {
    return {
        alias: options.paths.aliases,
        extensions: [".tsx", ".ts", ".js"],
    };
};
