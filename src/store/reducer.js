import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as searchReducer} from '../pages/searchPage/store'
import {reducer as homeReducer} from '../pages/homePage/store'


const reducer = combineReducers({
    header:headerReducer,
    search:searchReducer,
    home:homeReducer,
})

export default reducer