const deployEnv = process.env.DEPLOY_ENV;

const dev = {
    //开发
    api: ""
};

const prod = {
    //生产
    api: ""
};

const test = {
    //测试
    api: ""
};

let urlEnv;

switch (deployEnv) {
    case 'DEV':
        urlEnv = dev;
        break;
    case 'TEST':
        urlEnv = test;
        break;
    case 'PRD':
        urlEnv = prod;
        break;
    default:
        urlEnv = prod;
}

module.exports = urlEnv;