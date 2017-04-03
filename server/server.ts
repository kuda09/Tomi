///<reference path="../node_modules/@types/hapi/index.d.ts"/>
///<reference path="../typings/modules/joi/index.d.ts"/>
///<reference path="../typings/modules/dotenv/index.d.ts"/>


"use strict";

import * as hapi from "hapi";
import * as env from "dotenv";
import {Routes} from "./routes/index";
import {connectToDatabase} from "./connections/db.connection";

env.config();
connectToDatabase((err) => {

    if(err) {
        console.log(`Failed to connect to the database`);
        return;
    }

    const server: hapi.Server = new hapi.Server();
    server.connection({port: process.env.API_PORT, host: process.env.ES_HOST});
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

});

