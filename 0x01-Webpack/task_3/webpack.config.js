const path = require('path');

const bypass = [["html-webpack-plugin", "clean-webpack-plugin"], ["inline-source-map"], ["all"]]

module.exports = {
entry: {
header: './modules/header/header.js',
body: './modules/body/body.js',
footer: './modules/footer/footer.js'
},
output: {
filename: '[name].bundle.js',
path: path.resolve(__dirname, 'public'),

},
devServer: {
static: {
directory: path.join(__dirname, 'public'),
},
compress: true,
contentBase: './public',
port: 8564,
},
module: {
rules: [
{
test: /\.css$/i,
use: ["style-loader", "css-loader"],
},
{
test: /\.(jpe?g|png|gif|svg)$/i,
use: [
{loader: 'image-webpack-loader'}
]
},
],
},
mode: 'development',
};