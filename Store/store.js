import {createStore, applyMiddleware,combineReducers} from 'redux'
import ThunkMidleware from 'redux-thunk'

import PhotoReducer from './Photos/PhotoReducer'



const store = createStore(PhotoReducer,applyMiddleware(ThunkMidleware))

export default store
