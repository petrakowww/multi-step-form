/**
 * alias @ не будет работать до инициализации config, поэтому указываем полный путь до сборки
 *
 * Можно установить дополнительный npm пакет для решения данной проблемы module-alias
 */

import { buildWebpack } from './src/shared/config/build/build.webpack';
import {
    BuildEnvVariables,
    BuildPaths,
} from './src/shared/config/build/types/build.options';
import path from 'path';

export default (env: BuildEnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        aliases: {
            '@styles': path.resolve(__dirname, 'src/shared/styles'),
            '@config': path.resolve(__dirname, 'src/shared/config'),
            '@assets': path.resolve(__dirname, 'src/shared/assets'),
            '@': path.resolve(__dirname, 'src/'),
        },
        public: path.resolve(__dirname, 'public'),
    };

    const config = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
    });
    return config;
};
