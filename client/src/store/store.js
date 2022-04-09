import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { toDoList } from '../modules/toDoList/redux/reducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
    combineReducers(
        {
            toDoList: toDoList
        }
    ),
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;