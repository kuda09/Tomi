import {client} from "../../connections/elastic-search.connection";


export const queryES = (payload, cb) => {

    client.search(payload, cb);

}

export const pingES = (cb) => {

    client.ping({requestTimeout: Infinity}, cb)
}


export const getIndices = payload => client.indices.get(payload);