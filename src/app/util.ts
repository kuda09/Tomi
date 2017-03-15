import {UserState} from "./store/state/user.state";
import * as _ from 'lodash';
import {IndiceState} from "./store/state/indices.state";
import * as moment from 'moment';
import * as uuid from 'uuid';

const bodyBuilder = require('bodybuilder');

let typeCache: {[label: string]: boolean} = {}

export function type<T>(label: T | ''): T {

    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }

    typeCache[<string>label] = true;

    return <T>label;

}
export function getSelectedIndiceIndexAndType(state: UserState) {

    let indices = state.indices;

    let selectedIndice = _.filter(indices, (indice: IndiceState) => indice.selected === true);

    return {
        index: selectedIndice[0].index,
        type: Object.keys(selectedIndice[0].mappings)[0]
    }
}
export function getCurrentDate() {

    return moment().format('d/MM/YYYY')
}
export function getPreviousDayDate() {

    return moment().subtract(1, 'days').format('d/MM/YYYY');
}
export function getSelectedIndex(indices) {
    return _.filter(indices, (indice: IndiceState) => indice.selected === true)[0];
}
export function generateUniqueId() {
    return uuid.v1();
}
export function getListOfFieldNames(indice) {

    return _.reduce(_.values(indice.mappings), (acc, mapping) => {
        return mapping;
    }, [])
}
export function getNumberFields(fields) {

    return _.filter(fields, field => field.type === 'long');
}
export function getStringFields(fields) {

    return _.filter(fields, field => field.type === 'string');
}
export function getDateFields(fields) {

    return _.filter(fields, field => field.type === 'date');
}

export function createQuery(query) {

    const buckets = query.buckets;
    const metrics = query.metrics;

    let body =  {
        query: {
            filtered: {
                query: {
                    query_string: {
                        query: '*',
                        analyze_wildcard: true
                    }
                }
            }
        },
        size: 0,
        aggs: {}
    }

    body.aggs["2"] = {};
    body.aggs["2"][buckets.agg.aggregration] = {};
    body.aggs["2"][buckets.agg.aggregration]['field'] = buckets.agg.field;
    body.aggs["2"][buckets.agg.aggregration]['min_doc_count'] = 1;
    body.aggs["2"][buckets.agg.aggregration]['interval'] = buckets.agg.interval;

    return body;
}
export function getResultsCount (buckets) {

    return _.reduce(buckets, (acc, bucket) => [...acc,bucket.doc_count] ,[]);
}

export function getLabels (buckets: {}[]): string [] {

    return _.reduce(buckets, (acc, bucket) => [...acc,(bucket.from_as_string + ' - to - ' + bucket.to_as_string)] ,[]);
}