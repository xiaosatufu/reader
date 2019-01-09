import * as constants from './constants'
// import axios from 'axios'
// import {
//     fromJS
// } from 'immutable'


export const changeSearchTxt = (val) =>({
    type:constants.HEADER_SEARCHTXT,
    val
})


// export const getSearch = () =>{
//     return (dispatch) =>{
//         axios.get('/search?keyword=遮天').then((res)=>{
//             console.log(res)
//         })
//     }
// }