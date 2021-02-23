const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const autoprefixer = require('autoprefixer');
const Html = require('./webpack/Html');
const Entry = require('./webpack/Entry');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


const PUBLIC_PATH = path.join(__dirname, 'public', 'assets');
const IMG_PATH = path.join(PUBLIC_PATH, 'images');


module.exports = {
    mode   : 'production',
    devtool: false,
    stats  : {
                colors      : true,
                hash        : true,
                timings     : true,
                assets      : true,
                chunks      : true,
                chunkModules: true,
                modules     : true,
                children    : false,
            },
    entry: { ...Entry.create(), },
    output: {
                publicPath: '/assets/',
                path: PUBLIC_PATH,
                filename: 'js/[name].[chunkhash:8].js',
                chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
            },
    optimization: {
                minimize: true,
                noEmitOnErrors: true,
                splitChunks: {
                chunks: 'all',
                name: false,
                            },
                },
    node: {
                fs: "empty",
        },
    plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new AssetsPlugin({
        filename   : 'assets.json',
        path       : PUBLIC_PATH,
        prettyPrint: true,
        entrypoints: true,
    }),
    
    new MiniCssExtractPlugin({
        filename: 'css/[name].[chunkhash:8].css',
        chunkFilename: 'css/[name].[chunkhash:8].css',
    }),
    new SpriteLoaderPlugin({
        plainSprite: false,
    })
    ],
    resolve:{},
    module: {
        rules: [
                {
                test: /\.vue$/,
                loader: 'vue-loader'
                },
                {
                    test   : /\.js$/,
                    exclude: /node_modules/,
                    use    : 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader'
                    ]
                },
                {
                    test   : /\.pug$/,
                    oneOf: [{
                        resourceQuery: /^\?vue/,
                        use: 'pug-plain-loader'
                    }, {
                        use: {
                            loader : 'pug-loader',
                            options: {
                                pretty: true,
                            },
                        }
                    }],
                },    
                {
                    test: /fonts[\\\/].+\.(eot|ttf|woff|woff2)$/,
                    use: {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]'
                                    }
                        },
                },
                {
                    test: /images[\\\/].+\.(gif|png|jpe?g|svg)$/i,
                    use: [{
                            loader: 'file-loader',
                            options: {
                                    name: 'images/[name].[ext]',
                                    }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                    mozjpeg: {
                                    progressive: true,
                                    quality: 70
                                    },
                                    optipng: {
                                        enabled: true
                                    },
                                    pngquant: {
                                        quality: [0.7, 0.7],
                                        speed: 4
                                    },
                                    gifsicle: {
                                        interlaced: false
                                    },
                                }
                            },
                            ],
                },
                {
                    test: /\.s?css/i,
                    use : [
                        {
                            loader : 'sass-loader',
                            options: {
                                implementation: require('sass'),
                            }
                        },
                        'sass-loader',
                        {
                            loader : MiniCssExtractPlugin.loader,
                            options: {
                            publicPath: '/assets/',
                            },
                        },
                        'css-loader'
                        ]
                },
                {
                    test: /icons[\\\/].+\.svg$/i,
                    use: [
                        {
                            loader: path.resolve(__dirname, './svgClean.js'),
                        },
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract:true,
                                spriteFilename: 'icons/icons.svg',
                            }
                        }, 
                    ]
                }
            ]
    },
};
