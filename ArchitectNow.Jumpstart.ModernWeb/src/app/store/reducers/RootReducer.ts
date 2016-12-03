import { combineReducers } from "redux";
import { IAppState } from "../IAppState";

import { PersonSearchReducer } from "./PersonSearchReducer";

export const RootReducer = combineReducers<IAppState>({
    personSearchState: PersonSearchReducer
});