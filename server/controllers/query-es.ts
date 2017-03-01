import {client} from "./../config/connections";



export const queryES = (payload, cb) => {

    client.search(payload, cb)

}
