import { combineReducers } from 'redux'
import productsLikeReducer from './productsLikeReducer'

const rootReducer = combineReducers({
    likeProducts: productsLikeReducer,
})

export default rootReducer
