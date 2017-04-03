export interface SearchState {
    index: string;
    type: string;
    body: {};
    results: any;
}

export interface SearchesState extends Array<SearchState>{}
export const INITIAL_SEARCH_STATE: SearchesState = [];