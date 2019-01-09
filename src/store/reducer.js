import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as searchReducer} from '../pages/searchPage/store'


const reducer = combineReducers({
    header:headerReducer,
    search:searchReducer
})

export default reducer