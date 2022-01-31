import path from 'path';

module.exports = {
entry: './js/dashboard_main.js',
output: {
path: path.resolve(__dirname, 'public'),
filename: 'bundle.js',
},
mode: 'production'
};