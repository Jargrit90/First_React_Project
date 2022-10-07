import { combineReducers } from "redux";
import {variables} from '../variables/variables';
function appReducer(state = variables, action){
    switch (action.type) {
        case 'changeValue_1': {
            return {
                ...state,
                value_1: "cccc"
            }
        }
        default:
        return state
    }
}

function appReducer2(state = variables, action){
    switch (action.type) {
        case 'changeValue_2': {
            if(state.value_2 === "bbbb"){
                return {
                    ...state,
                    value_2: "dddd"
                }
            }
            else {
                return {
                    ...state,
                    value_2: "bbbb"
                }
            }
        }
        default:
        return state
    }
}

function subMenuReducer(state = variables, action){
    switch (action.type){
        case 'toggleState': {
            return {
                ...state,
                isVisible: !state.isVisible
            }
        }
        case 'setIsVisibleFalse': {
            return {
                ...state,
                isVisible: false
            }
        }
        default:
        return state
    }
}

export const rootReducer = combineReducers({
    app: appReducer,
    app2: appReducer2,
    submenu: subMenuReducer
});