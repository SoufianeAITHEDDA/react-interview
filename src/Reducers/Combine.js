import {combineReducers} from "redux";

import paginateRed from "./Pagination";
import ReducerM from "./Reducer";


const rootReducer = combineReducers({
    data: ReducerM,
    pagi: paginateRed,

})

export default rootReducer
