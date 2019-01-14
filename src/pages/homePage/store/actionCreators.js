import * as constants from './constants'


import axios from 'axios'



const categories = (data) =>{
    return {
        type:constants.CATEGORY,
        categories:data
    }
}

export const getCategory = () =>{
    return (dispatch) =>{
        axios.get('/categories').then((res)=>{
            const data = res.data
            dispatch(categories(data))
        })
    }
}