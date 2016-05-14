/**
 * Created by Vlad on 5/13/2016.
 */
/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />

import * as express from 'express';

const app = express();

import * as bodyParser from 'body-parser';

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

router.get('/', function (req, res) {
    res.json({message: 'welcome'});
});

// prefixed all routes with /api
app.use('/api', router);

app.listen(port,function(){   
    console.log('http://127.0.0.1:' + port + '/api');
});

