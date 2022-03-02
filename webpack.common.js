const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.tsx', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'bundle.js', // 输出文件
        clean: true,
    },
    devServer: {
        static: './dist',
        open: true,
        port: 10099
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // ts文件处理
                exclude: /(node_modules|bower_components)/,
                use: ['ts-loader', {
                    loader: 'babel-loader',
                    options: {
                        "plugins": [
                            [
                                "import", {
                                "libraryName": "antd",
                                "style": true
                            }
                            ]
                        ],
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                    }
                }
                ]
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                        },
                    },
                },]
            },
            {
                test: /\.css$/, // css文件处理
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // 模板路径
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json'] // 添加ts和tsx后缀
    },
};
