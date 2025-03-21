import { BuildMode } from "../types/build.options";

export const isDevMode = (mode: BuildMode) => {
    return mode === "development";
};

export const isProdMode = (mode: BuildMode) => {
    return mode === "production";
};
