import * as constants from  './constants'
import {fromJS} from 'immutable'


import axios from 'axios'

// export const searchBooks = (keywords) =>({
//     type:constants.SEARCH_BOOKS,
//     keywords
// })

const changeSearch = (data) =>{
    return {
        type:constants.SEARCH_LIST,
        books:data.books,
        totalBooks:data.total
    }
}


export const searchBooks = (keywords) =>{
    return (dispatch) =>{
        axios.get("/search?keyword="+ keywords).then((res)=>{
            // console.log(res)
            const data  = res.data
            console.log(data)
            dispatch(changeSearch(data))
        }).catch(()=>{
            console.log('err')
        })
    }
}
