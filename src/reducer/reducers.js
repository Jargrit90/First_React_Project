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
function memberReducer(state = variables, action){
    switch (action.type){
        case 'changeMember': {
            return {
                ...state,
                member_num: action.payload
            }
        }
        case 'activeGallery': {
            return {
                ...state,
                gallery_active: !state.gallery_active,
                member_num: action.payload[0],
                num_of_photo: action.payload[1],
                subPhotoSrc: state.members[state.member_num].photos[action.payload[1]],
            }
        }
        case 'changePhotoInGallery': {
            return {
                ...state,
                subPhotoSrc: state.members[state.member_num].photos[action.payload[1]],
            }
        }
        case 'closeGallery': {
            return {
                ...state,
                gallery_active: false
            }
        }
        default: 
        return state
    }
}
function discographyReducer(state = variables, action){
    switch(action.type){
        case 'changeSong': {
            return {
                ...state,
                song_num: action.payload,
                play: false,
                s: 0,
                m: 0,
            }
        }
        case 'playSong': {
            return {
                ...state,
                play: action.payload
            }
        }
        case 'changeS': {
            if(state.play === true){
                if(state.s < 59){
                    return {
                        ...state,
                        s: state.s + 1,
                    }
                }
                else {
                    return {
                        ...state,
                        s: 0,
                        m: state.m + 1,
                    }
                }
            }
            else {
                return state
            }
        }
        case 'resetSong': {
            return {
                ...state,
                s: 0,
                m: 0,
                timer: 0,
                play: false
            }
        }
        default:
        return state
    }
}
export const rootReducer = combineReducers({
    submenu: subMenuReducer,
    mainpage: mainpageReducer,
    member: memberReducer,
    discography: discographyReducer
});