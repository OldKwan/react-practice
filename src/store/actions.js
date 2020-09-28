import axios from 'axios'
import {
    INCREMENT,
    DECREMENT,
    ADD_NUMBER,
    SUB_NUMBER,
    ADD_BANNER,
    ADD_RECOMMEND,
} from './constant'
// action
export function increment(){
    return {type: INCREMENT}
}
export function decrement(){
    return {type: DECREMENT}
}
export function addNumber(num){
    return {type: ADD_NUMBER, num }
}
export function subNumber(num){
    return {type: SUB_NUMBER, num }
}

export function addBanner(banner){
    return {type: ADD_BANNER, banner }
}
export function addRecommend(recommend){
    return {type: ADD_RECOMMEND, recommend }
}

export function addMulDataActions(dispatch){
    axios({url: 'http://123.207.32.32:8000/home/multidata'}).then(res =>{
        const { data } = res
        if (data.success) {
            dispatch(addBanner(data.data.banner.list))
            dispatch(addRecommend(data.data.recommend.list))
        }
    })
}