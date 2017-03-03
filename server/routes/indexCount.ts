///<reference path="../../node_modules/@types/hapi/index.d.ts"/>


import * as hapi from "hapi";
import {searchSchema} from "../schemas/searchSchema";
import {queryES} from "../controllers/query-es";


export const search = (server: hapi.Server) => {

    server.route({
        method: "POST",
        path: "/api/indices",
        config: {
            handler: (request: hapi.Request, reply: hapi.IReply) => {

                const payload = request.payload.payload;

                queryES(payload, (err, ESResponse) => {

                    if(err) {

                        return reply(err);
                    }

                     reply(ESResponse);
                })
            },
            validate: {
                payload: {
                    payload: searchSchema
                }
            }
        }
    });

}