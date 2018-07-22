var path = require('path');
// var request = require('request');

function isReg(target) {
    return Object.prototype.toString.call(target) === '[object RegExp]';
}

function inList(str, list) {
    var i;

    for (i = 0; i < list.length; i++) {
        var ele = list[i];

        // 正则匹配
        if (isReg(ele) && ele.test(str)) {
            return true;
        }

        // 字符串匹配
        if (ele === str) {
            return true;
        }
    }

    return false;
}

function mockMiddleware(options) {
    options = options || {};
    var mockFilePath = options.mockFilePath || path.join(__dirname);
    var refererReg = options.refererReg || /[?&](?:ed|enable_debug)\b/i;
    var localMapping = options.localMapping || localMapping;
    var blacklist = options.blacklist || {};
    var whitelist = options.whitelist || {};

    function localMapping(reqPath) {
        return reqPath.replace(/^\/api/, '');
    }

    function resolveMockFilePath(reqPath) {
        return path.join(mockFilePath, 'mockup', localMapping(reqPath));
    }

    /**
     * 本地mock数据
     *
     * @param {object} req request
     */
    function responseMockData(req, res) {
        var reqPath = req.path;
        var mockFilePath = resolveMockFilePath(reqPath);

        console.log('Try mock, request path:', reqPath);
        console.log('Try mock, mock file path:', mockFilePath);

        // 删除缓存，每次编辑完文件之后不用重新启动服务
        delete require.cache[require.resolve(mockFilePath)];

        var resHandler = require(mockFilePath);

        // 请求接口的延迟
        var timeout = resHandler.timeout || 0;

        // 请求数据
        var data = resHandler.response(req);

        console.log('Find mock file:', mockFilePath);
        console.log('Mock file timeout:', timeout);
        console.log('Mock file data:', data);

        setTimeout(function () {
            res.send(data);
        }, timeout);
    }

    /**
     * mock中间件
     *
     * @param {Object} req request
     * @param {Object} res response
     * @param {function} next next trick
     */
    return function mock(req, res, next) {
        var reqPath = req.path;
        var referer = req.headers.referer;

        console.log('referer', referer);

        // 不在白名单里面或者在黑名单里面的，不做mock处理
        if (!inList(reqPath, whitelist) || inList(reqPath, blacklist)) {
            return next();
        }

        // 开启了mock
        // if (refererReg.test(referer)) {
            try {
                return responseMockData(req, res);
                console.log('[MOCK FILE SUCCESS]: ', reqPath);
            }
            catch (error) {
                console.error('[MOCK FILE ERROR]', error);
            }
        // }
        next();
    }
}

module.exports = mockMiddleware;
