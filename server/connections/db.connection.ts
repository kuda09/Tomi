///<reference path="../../typings/modules/mongoose/index.d.ts"/>
import {connect} from 'mongoose'

export const connectToDatabase = (cb) => {

    const dbUrl = process.env.DATABASE_URL;

    connect(dbUrl)
        .connection.on('connected', () => {
            console.log(`Mongoose connected to: ${dbUrl}`)
        cb();
    })
        .on('error', err => {
            console.error(`Mongoose connection error: ${err}`);
            cb(err);
        })
        .on('disconnected', () => {
            console.warn(`Mongoose disconnected`);
        });
}
