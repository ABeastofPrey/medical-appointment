import mongoose from 'mongoose';

const options = {
    autoReconnect: true
};

// username 数据库用户名
// password 数据库密码
// localhost 数据库ip
// dbname 数据库名称
const url = 'mongodb://localhost:27017/test';

export const connect2DB = () => {
    mongoose.set('debug', true);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(url, options);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, '连接错误:'));
    db.once('open', () => {
        console.log('mongodb connect suucess');
    });
    return async (ctx, next) => {
        await next();
    };
};
