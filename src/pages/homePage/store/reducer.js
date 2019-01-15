import * as constants from './constants'


import {fromJS} from 'immutable'

const defaultState = fromJS({
    category:[],
    rankCategory:[],
    maleRanking:[],
    femaleRanking:[]
})

export default (state = defaultState,action) =>{
    if (action.type===constants.CATEGORY) {
        return state.set('category',action.categories)
    }
    if (action.type===constants.RANKCATEGORY) {
        return state.set('rankCategory',action.rankCategory)
    }
    if (action.type===constants.MALERANKING) {
        return state.set('maleRanking',action.ranking)
    }
    if (action.type===constants.FEMALERANKING) {
        return state.set('femaleRanking',action.ranking)
    }
    return state

}

