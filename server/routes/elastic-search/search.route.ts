///<reference path="../../../node_modules/@types/hapi/index.d.ts"/>
import * as hapi from "hapi";
import {searchSchema} from "../../schemas/search.schema";
import {queryES} from "../../controllers/elastic-search/query-es.controller";
import {tokenValid} from "../../controllers/strategies/auth.basic";

const hapiJWT2 = require('hapi-auth-jwt2');


export const searchRouter = (server: hapi.Server) => {

    server.register(hapiJWT2, (err) => {

        if (err) {
            throw  err;
        }

        server.route({
            method: "POST",
            path: "/api/elasticsearch/search",
            config: {
                auth: 'jwt',
                handler: (request: hapi.Request, reply: hapi.IReply) => {

                    const payload = request.payload.payload;

                    queryES(payload, (err, ESResponse) => {

                        if (err) {

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
    })


}