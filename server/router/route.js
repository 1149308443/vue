const express = require('express');
const proxy = require('http-proxy-middleware');

const { logger, urlEnv } = require('../../config');

const router = express.Router();

const proxyFun = (req, res, next) => {
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
};

logger.info(urlEnv);

router.use('/api', proxyFun);

router.use('/api', proxy({
    //target: urlEnv.api,
    target: 'http://www.baidu.com',
    changeOrigin: true
}));

module.exports = router;