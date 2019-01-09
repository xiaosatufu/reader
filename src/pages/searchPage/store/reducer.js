import * as constants from './constants'
import {
    fromJS
} from 'immutable'

const defaultState = fromJS({
    books:[],
    totalBooks:0
})

export default (state=defaultState,action) =>{
    if (action.type===constants.SEARCH_LIST) {
        // return state.set('books',action.books)
        return state.merge({
            books:fromJS(action.books),
            totalBooks:action.totalBooks
        })
    }
    return state
}
