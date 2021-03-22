module.exports = {
    entry: "./src/main.ts",
    mode: 'development',
    output: {
        filename: "./dist/bundle.js",
        libraryTarget: 'umd',
        library: 'ODL',
        umdNamedDefine: true
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        fallback: {
            util: require.resolve('util'),
            assert: require.resolve('assert')
        }
    },
    module: {
        rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        { test: /\.tsx?$/, loader: "ts-loader" },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" },
        ],
    },
    // Other options...
};