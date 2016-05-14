/**
 * Created by Vlad on 5/13/2016.
 */
/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />

import * as express from 'express';

const app = express();

import * as bodyParser from 'body-parser';

import DAO = require('./db-connector');
const userDAO:DAO.UserDAO = new DAO.UserDAO();
// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port:number = process.env.PORT || 8080;
const router = express.Router();

router.get('/user/:id', function (req, res) {
   res.json(userDAO.read(req.params.id));
});
router.get('/user', function (req, res) {
    res.json(userDAO.getAll());
})
router.post('/user', function (req, res) {
    console.log(req.body);
    res.json(userDAO.create(req.body));
})
router.put('/user', function (req, res) {
    res.json({result : userDAO.update(req.body)});
});
router.delete('/user/:id', function (req, res) {
    res.json({result : userDAO.delete(req.params.id)});
});
// prefixed all routes with /api
app.use('/api', router);

app.listen(port,function(){
    console.log('http://127.0.0.1:' + port + '/api');
});

