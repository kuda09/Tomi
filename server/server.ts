///<reference path="../node_modules/@types/hapi/index.d.ts"/>
///<reference path="../typings/modules/joi/index.d.ts"/>
///<reference path="../typings/modules/dotenv/index.d.ts"/>


"use strict";

import * as hapi from "hapi";
import * as env from "dotenv";
import {Routes} from "./routes/index";
import {connectToDatabase} from "./connections/db.connection";
import {pingElasticSearch} from "./controllers/elastic-search/query-es.controller";

env.config();

connectToDatabase((err) => {

    if(err) {
        console.log(`Failed to connect to the database`);
        return;
    }

    pingElasticSearch((err, response) => {

        if(err) {

            console.error(`Failed to connect to Elastic Search ${err}`);
        }

        console.log(`Connected to Elastic search ${response}`);
    })

});

const server: hapi.Server = new hapi.Server();
server.connection({port: process.env.API_PORT, host: process.env.ES_HOST});

server.register({
    register: require('hapi-cors'),
    options: {
        origins: ['http://localhost:4210']
    }
})
server.register(require('inert'), (err) => {

    if(err) {

        throw err;
    }

    new Routes(server).init();

    server.start(err => {
        if (err) throw err;
        console.log(`Server up and running at:${server.info.uri}`);
    })

})

