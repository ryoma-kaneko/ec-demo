import {
    createStore as reduxCreateStore,combineReducers,applyMiddleware
}from 'redux';
import {
    connectRouter,routerMiddleware
}from "connected-react-router";

// Import reducers
//import {ProductsReducer} from '../products/reducers';
import { UsersReduser} from '../users/reducers';

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReduser
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}

