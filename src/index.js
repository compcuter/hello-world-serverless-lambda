import serverless from 'serverless-http';
import express from 'express';

import getUser from './getUser';

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    next();
});

app.get('/hello', function (req, res) {
    async function hello() {
        try {
            res.send("hello world!");
        } catch (e) {
            console.error(e);
        }
    }
    hello();
});

app.get('/user', function (req, res) {
    async function user() {
        try {
            const username = req.query.name;
            const user = await getUser(username);
            res.send(user);
        } catch (e) {
            console.error(e);
        }
    }
    user();
});

module.exports.handler = serverless(app);