import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {   
    const isDev = env.mode === 'development'
    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
                        "css-loader", 
                        "sass-loader"
                    ],
                },
                {
                    test: /\.m?jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-env',
                                [
                                    '@babel/preset-react',
                                    {
                                        runtime: isDev ? 'automatic' : 'classic',
                                    }
                                ]
                            ]
                        }
                    }
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                },
                // {
                //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
                //     type: 'asset/resource',
                // },
                // {
                //     test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                //     loader: 'file-loader',
                //     options: {
                //       name: 'fonts/[name].[contenthash:8].[ext]'
                //     }
                // },
            ]
        },
        resolve: {
            extensions: ['.jsx', '.js']
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true
        } : undefined,
    }
}