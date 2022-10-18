import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import authReducer from './Reducers/authReducer';
import thunk from 'redux-thunk'

const rootReducer=combineReducers({authReducer})
export default createStore(rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
 