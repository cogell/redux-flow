// @flow
import {combineReducers} from "redux";
import type {ExtractReturn} from "./types";
import counter from './counter'

const reducer = combineReducers({
  [counter.storeKey]: counter.reducer,
})

export type State = ExtractReturn<typeof reducer>

export default reducer
