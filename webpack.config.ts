import path from "path";
import { Configuration, DefinePlugin, WebpackPluginInstance } from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { merge } from "webpack-merge";

interface Env {
    development: boolean;
    hotReload: boolean;
}

function baseConfiguration(env: Env): Configuration {
    return {
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },

        mode: env.development ? "development" : "production",

        devtool: env.development ? "source-map" : undefined,

        plugins: [
            new DefinePlugin({
                ENVIRONMENT: JSON.stringify(env.development ? "development" : "production"),
            }),
        ],
    };
}

function mainConfiguration(env: Env): Configuration {
    return {
        name: "main",

        context: path.join(__dirname, "src/electron"),

        target: "electron-main",

        mode: env.development ? "development" : "production",

        externalsPresets: {
            electronMain: true,
        },

        entry: "./main.ts",

        output: {
            filename: "[name].js",
            path: path.join(__dirname, "dist"),
            clean: {
                keep: /renderer\//,
            },
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-typescript"],
                            plugins: ["@babel/plugin-transform-runtime"],
                        },
                    },
                },
            ],
        },

        plugins: [
            new CopyWebpackPlugin({
                patterns: ["../../package.json"],
            }),
        ],
    };
}

function RendererConfiguration(env: Env): Configuration {
    const babelConfig = {
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
        plugins: ["@babel/plugin-transform-runtime", env.hotReload && require.resolve("react-refresh/babel")].filter(Boolean),
    };

    return {
        name: "renderer",

        context: path.join(__dirname, "src/renderer"),

        target: "electron-renderer",

        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },

        externalsPresets: {
            electronRenderer: true,
        },

        entry: "./index.tsx",

        output: {
            filename: "scripts/[name].js",
            path: path.join(__dirname, "dist", "renderer"),
            clean: true,
            globalObject: env.hotReload ? "self" : undefined,
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: babelConfig,
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: "[name].[ext]",
                        },
                    },
                },
                {
                    test: /\.(ttf|otf|woff2?)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                            name: "[name].[ext]",
                        },
                    },
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
            }),

            (env.hotReload && new ReactRefreshWebpackPlugin()) as WebpackPluginInstance,
        ].filter(Boolean),

        devServer: {
            compress: true,
            hot: env.hotReload,
            port: 9000,
            historyApiFallback: true,
            devMiddleware: {
                writeToDisk: true,
            },
        },
    };
}

export default function (e: any) {
    const env: Env = {
        development: !e["production"],
        hotReload: !!e["hot-reload"] && !e["production"],
    };

    const baseConfig = baseConfiguration(env);
    const mainConfig = merge(baseConfig, mainConfiguration(env));
    const rendererConfig = merge(baseConfig, RendererConfiguration(env));

    return [mainConfig, rendererConfig];
}
