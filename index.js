const express = require('express')
const app = express();
const mockMiddleware = require('./src/mockMiddleware');

app.use(mockMiddleware({
    whitelist: [/^\/bi/],
    blacklist: [/\/bi\/create/],
    remoteServer: {
        hostname: '127.0.0.1',
        port: 8888
    }
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
