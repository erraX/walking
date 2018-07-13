const path = require('path');
const express = require('express')
const proxy = require('http-proxy-middleware');
const app = express();
const mockMiddleware = require('./src/mockMiddleware');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(mockMiddleware({
    whitelist: [/^\/bi/],
    blacklist: [],
    mockFilePath: path.join(__dirname)
}));

app.use(proxy({
    target: 'http://bi-mj.addev.com',
    changeOrigin: true
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
