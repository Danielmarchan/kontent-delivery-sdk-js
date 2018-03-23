const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './lib/index.ts',
    resolve: { extensions: ['.ts', '.js'] },
    output: {
        // Puts the output at the root of the dist folder
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/, loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, "lib"), // include only library
                ],
            },
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // workaround for Parse5
            // fixes WARNING Critical dependency: the request of a dependency is an expression
            /(.+)?parse5(\\|\/)(.+)?/,
            path.join(__dirname, 'lib')
        )
    ]
};