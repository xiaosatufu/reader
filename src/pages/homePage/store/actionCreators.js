import * as constants from './constants'


import axios from 'axios'



const categories = (data) => {
    return {
        type: constants.CATEGORY,
        categories: data
    }
}

export const getCategory = () => {
    return (dispatch) => {
        axios.get('/categories').then((res) => {
            const data = res.data
            dispatch(categories(data))
        })
    }
}



const rankCategory = (data) => {
    return {
        type: constants.RANKCATEGORY,
        rankCategory: data
    }
}
export const getRankCategory = () => {
    return (dispatch) => {
        axios.get('/rank-category').then((res) => {
            const data = res.data
            dispatch(rankCategory(data))
        })
    }
}



const maleRanking = (data) => {
    return {
        type: constants.MALERANKING,
        ranking: data
    }
}
const femaleRanking = (data) => {
    return {
        type: constants.FEMALERANKING,
        ranking: data
    }
}
export const getRanking = (id) => {
    return (dispatch) => {
        axios.get(`/rank/${id}`).then((res) => {
            // console.log(res.data.ranking.books.slice(0,10))
            // dispatch
            const data = res.data.ranking
            if (data.gender === "male") {
                dispatch(maleRanking(data.books.slice(0,10)))
            } else {
                dispatch(femaleRanking(data.books.slice(0,10)))
            }
        })
    }
}