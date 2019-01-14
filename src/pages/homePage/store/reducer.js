import * as constants from './constants'


import {fromJS} from 'immutable'

const defaultState = fromJS({
    category:[]
})

export default (state = defaultState,action) =>{
    if (action.type===constants.CATEGORY) {
        console.log(action)
        return state.set('category',action.categories)
    }
    return state

}
