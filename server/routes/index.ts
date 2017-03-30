///<reference path="../../node_modules/@types/hapi/index.d.ts"/>
import * as hapi from "hapi";
import {search} from "./searchRoute";
import {getIndiceRoute} from "./indices";
import {loginRoute} from "./login";
import {homeRouter} from "./homeRoute";


export class Routes {

    constructor(private serverInstance: hapi.Server) {

    }

    init() {

        search(this.serverInstance);
        getIndiceRoute(this.serverInstance);
        loginRoute(this.serverInstance);
        homeRouter(this.serverInstance);
    }
}