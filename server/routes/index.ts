///<reference path="../../node_modules/@types/hapi/index.d.ts"/>
import * as hapi from "hapi";
import {search} from "./searchRoute";


export class Routes {

    constructor(private serverInstance: hapi.Server) {

    }

    init() {

        search(this.serverInstance);
    }
}