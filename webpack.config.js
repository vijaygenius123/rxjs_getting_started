const path = require("path");

console.log(path.resolve(__dirname, 'dist'));
module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }
        ]
    },
    output: {
        filename: "./dist/main.js",
        path: path.resolve(__dirname, 'dist')
    }
}
