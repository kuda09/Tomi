import {UserState} from "./store/state/user.state";
import * as _ from 'lodash';
import {IndiceState} from "./store/state/indices.state";

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