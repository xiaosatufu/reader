import * as constants from './constants'
import {
    fromJS
} from 'immutable'

const defaultState = fromJS({
    searchTxt:""
})


export default (state = defaultState,action) =>{
    if (action.type===constants.HEADER_SEARCHTXT) {
        return state.set('searchTxt',action.val)
    }
    return state
}
