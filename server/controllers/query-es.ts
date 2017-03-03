import {client} from "./../config/connections";


export const queryES = (payload, cb) => {

    client.search(payload, cb);


    client.indices.get({
        "index": "swarm_sessions"
    }).then(
        res => console.log(res),
        err => console.log(err)
    );

}

export const pingES = (cb) => {

    client.ping({requestTimeout: Infinity}, cb)
}


export const getIndices = payload => client.indices.get(payload);