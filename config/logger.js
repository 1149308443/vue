const path = require('path');
const log4js = require('log4js');

const isDev = process.env.NODE_ENV === 'development';

const devConfig = {
    appenders: {
        out: { type: 'stdout', layout: { type: 'coloured' } },
        longLogFile: {
            type: 'file',
            filename: path.resolve(__dirname, '../logs/long.log'),
            // 10MB
            maxLogSize: 1024 * 1024 * 10,
            backups: 5,
            keepFileExt: true,
            layout: { type: 'basic' }
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'debug' },
        long: { appenders: ['longLogFile'], level: 'info' }
    }
};

const prdConfig = {
    appenders: {
        defaultLogFile: {
            type: 'file',
            filename: path.resolve(__dirname, '../logs/app.log'),
            // 10MB
            maxLogSize: 1024 * 1024 * 10,
            backups: 5,
            keepFileExt: true,
            layout: { type: 'basic' }
        },
        longLogFile: {
            type: 'file',
            filename: path.resolve(__dirname, '../logs/long.log'),
            // 10MB
            maxLogSize: 1024 * 1024 * 10,
            backups: 5,
            keepFileExt: true,
            layout: { type: 'basic' }
        }
    },
    categories: {
        default: {
            appenders: ['defaultLogFile'],
            level: 'info'
        },
        long: { appenders: ['longLogFile'], level: 'info' }
    }
};

log4js.configure(isDev ? devConfig : prdConfig);

const logger = log4js.getLogger();

module.exports = logger;