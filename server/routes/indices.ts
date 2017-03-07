///<reference path="../../node_modules/@types/hapi/index.d.ts"/>
///<reference path="../../typings/modules/lodash/index.d.ts"/>




import * as hapi from "hapi";
import * as _ from "lodash";
import {getIndices} from "../controllers/query-es";
import {indicesSchema} from "../schemas/indicesSchema";
import {indiceFormatter} from "../formatters/indicesFormatter";


export const getIndiceRoute = (server: hapi.Server) => {

    server.route({
        method: "POST",
        path: "/api/indices",
        config: {
            handler: (request: hapi.Request, reply: hapi.IReply) => {

                const payload = request.payload.payload;

                getIndices(payload)
                    .then(
                        res => reply(indiceFormatter(res)),
                        err => reply(err)
                    )
            },
            validate: {
                payload: {
                    payload: indicesSchema
                }
            }
        }
    });

}