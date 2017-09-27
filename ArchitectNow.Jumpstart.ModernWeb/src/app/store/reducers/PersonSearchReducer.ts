import { IPersonSearchState } from "../IPersonSearchState";

var INITIAL_STATE = { lastResults: {} } as IPersonSearchState;

export class PersonSearchReducerActions {
    static UpdateResults: string = "PersonSearch.UpdateResults";
}

export function PersonSearchReducer (state: IPersonSearchState = INITIAL_STATE, action: any): IPersonSearchState {
    switch (action.type) {
        case PersonSearchReducerActions.UpdateResults:
            return Object.assign({}, state, {lastResults: action.payload});
    }
    return state;
}