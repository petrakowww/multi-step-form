import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/build.options";
import { isDevMode } from "./utils/build.type";
import ReactRefreshTypeScript from "react-refresh-typescript";

export const buildLoaders = (options: BuildOptions): ModuleOptions["rules"] => {
    const isDev = isDevMode(options.mode);

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };

    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: {
                            name: "convertColors",
                            params: {
                                currentColor: true,
                            },
                        },
                    },
                },
            },
        ],
    };

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev
                    ? "[path][name]__[local]"
                    : "[hash:base64:8]",
            },
        },
    };

    const cssLoaderWithoutModules = {
        loader: "css-loader",
        options: {
            modules: false,
        },
    };

    const scssModulesLoader = {
        test: /\.module\.s[ac]ss$/i, // для файлов с .module.scss
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithoutModules,
            "sass-loader",
        ],
    };

    const cssModulesLoader = {
        test: /\.module\.css$/i, // для файлов .module.css
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
        ],
    };

    const cssLoader = {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithoutModules,
        ],
    };

    const tsLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(
                            Boolean
                        ),
                    }),
                    transpileOnly: isDev,
                },
            },
        ],
    };

    return [
        assetLoader,
        svgLoader,
        fontLoader,
        scssModulesLoader,
        scssLoader,
        cssModulesLoader,
        cssLoader,
        tsLoader,
    ];
};
