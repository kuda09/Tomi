///<reference path="../../typings/modules/joi/index.d.ts"/>
import * as joi from "joi";

export const searchSchema = joi.object().keys({
    "index": joi.string().required(),
    "type": joi.string().required(),
    "body": joi.object().keys({
        "query": joi.object().keys({
            "query_string": joi.object().keys({
                "query": joi.string().required()
            }).required()
        }).required()
    })

})
