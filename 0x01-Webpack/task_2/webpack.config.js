const path = require('path');

const bypass = ["file-loader"];

module.exports = {
entry: './js/dashboard_main.js',
output: {
path: path.resolve(__dirname, 'public'),
filename: 'bundle.js',
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
mode: 'production'
};