import {
    INCREMENT,
    DECREMENT,
    ADD_NUMBER,
    SUB_NUMBER,
    ADD_BANNER,
    ADD_RECOMMEND,
} from './constant'

// state
const initialState = {
    counter: 0,
    banner: [],
    recommend: [],
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case ADD_NUMBER:
            return {
                counter: state.counter + action.num
            }
        case SUB_NUMBER:
            return {
                counter: state.counter - action.num
            }
        case ADD_BANNER:
            return {
                ...state,
                banner: action.banner,
            }
        case ADD_RECOMMEND:
            return {
                ...state,
                recommend: action.recommend,
            }
        default:
            return state
    }
}