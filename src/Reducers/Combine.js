import {combineReducers} from "redux";

import paginateRed from "./Pagination";
import ReducerM from "./Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    data: ReducerM,
    pagi: paginateRed,

})

export default rootReducer
