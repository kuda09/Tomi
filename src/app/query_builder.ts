import * as _ from 'lodash';

export class QueryBuilder {

    constructor() {

    }

    createQuery(query) {

        return {
            query:  this.buildQuery(),
            aggs: this.buildBuckets(query.buckets),
            size: 0
        }
    }

    buildBuckets(buckets) {


        let aggs = {};


        if (buckets.length === 0) {

           return _.assign({}, aggs);
        }


        _.reduce(buckets, (acc, bucket, index) => {

            let agg = {};
            agg[bucket.agg.aggregration] = {};
            agg[bucket.agg.aggregration]["field"] = bucket.agg.field;
            agg[bucket.agg.aggregration]['interval'] = bucket.agg.interval;
            agg[bucket.agg.aggregration]["time_zone"] = "Europe/London";
            agg[bucket.agg.aggregration]["min_doc_count"] = 1
            agg[bucket.agg.aggregration]["extended_bounds"] = {
                min: 1490179132546,
                max: 1490180032546
            };


            aggs[index + 2] = agg;

        }, {});


        return _.assign({}, aggs);

    }

    buildFilters() {

        return {
            bool: {
                must: [
                    {
                        range: {
                            time_start: {
                                gte: 1490098669084,
                                lte: 1490185069084,
                                format: "epoch_millis"
                            }
                        }
                    }
                ]
            }
        }
    }

    buildQuery () {

        return {
            filtered: {
                query: {
                    query_string: {
                        query: '*',
                        analyze_wildcard: true
                    }
                },
                filter: this.buildFilters(),
            }
        }
    }

}

