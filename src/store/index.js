import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const enhancer = applyMiddleware(thunkMiddleware)
// store
export default createStore(reducer, enhancer)