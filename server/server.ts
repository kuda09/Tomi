///<reference path="../node_modules/@types/hapi/index.d.ts"/>
///<reference path="../typings/modules/joi/index.d.ts"/>
///<reference path="../typings/modules/dotenv/index.d.ts"/>


"use strict";

import * as hapi from "hapi";
import * as env from "dotenv";
import {Routes} from "./routes/index";

env.config();
const server: hapi.Server = new hapi.Server();
server.connection({port: process.env.API_PORT, host: process.env.ES_HOST});
server.register(require('inert'), (err) => {

    if(err) {

        throw err;
    }

    const routes = new Routes(server);
    routes.init();
    server.start(err => {
        if (err) throw err;
        console.log(`Server up and running at:${server.info.uri}`);
    })

})
