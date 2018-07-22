const express = require('express')
const app = express();

app.use(function (req, res) {
    console.log('Receive request', req.path ,req.method);
    res.json({
        succeed: true,
        method: req.method,
        path: req.path,
    });
});

app.listen(3001, () => console.log('Target server listening on port 3000!'))
