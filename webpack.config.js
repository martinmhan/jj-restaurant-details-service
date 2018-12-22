const path = require("path");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./client/src/"),
    output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
},
module: {
    rules: [
        {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    }
    ]
},
// module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   },
resolve: {
    extensions: [".js", ".jsx"]
}
};

