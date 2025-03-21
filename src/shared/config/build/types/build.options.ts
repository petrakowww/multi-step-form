import { Port } from "webpack-dev-server";

export type BuildMode = "production" | "development";

export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    aliases?: Record<string, string>;
    public: string;
}

export interface BuildOptions {
    port: Port;
    paths: BuildPaths;
    mode: BuildMode;
}

export interface BuildEnvVariables {
    mode: BuildMode;
    port: Port;
}
