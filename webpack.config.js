var config = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        inline: true,
        historyApiFallback: true,
        port: 3200,
    },
    module: {
        rules: [
            {
                test: /\.js?$/, // search for js files 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            },
            {
                 test:/\.(s*)css$/,
                 use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
}

module.exports = config;