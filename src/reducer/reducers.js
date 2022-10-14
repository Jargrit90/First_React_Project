import { combineReducers } from "redux";
import {variables} from '../variables/variables';


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

function mainpageReducer(state = variables, action){
    switch (action.type){
        case 'changeYear': {
            return {
                ...state,
                active_num: action.payload
            }
        }
        default:
        return state
    }
}
export const rootReducer = combineReducers({
    submenu: subMenuReducer,
    mainpage: mainpageReducer
});