var config = {
    entry: './src/index.js',
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
            }
        ]
    }
}

module.exports = config;