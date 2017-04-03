import {Component, OnInit, Input} from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-indice-preview',
    templateUrl: 'indice-preview.component.html',
    styleUrls: ['indice-preview.component.scss']
})
export class IndicePreviewComponent implements OnInit {


    @Input()
    indices;


    constructor() {

    }

    ngOnInit() {

    }

    mergeMappings(mappings) {

        return _.reduce(_.values(mappings), function (acc, mapping) {

            return _.assign({}, _.cloneDeep(acc), _.cloneDeep(mapping));

        }, {});

    }

    keysArray(mappings) {

        let keys = [];

        for(let key in mappings) {

            keys.push({
                key: key,
                value: mappings[key]
            })
        }

        return keys;

    }


}
