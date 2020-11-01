import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducerMovie from '../redux/reducers/movieReducer';
import reducerTheaterSystem from '../redux/reducers/theaterSystemReducer';
import ParentReducer from '../redux/reducers/parentReducer';
import thunk from 'redux-thunk';
import UserReducer from '../redux/reducers/userReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create rootReducer
export const rootReducer = combineReducers({
    parent: ParentReducer,
    qlMovie: reducerMovie,
    qlTheaterSystem: reducerTheaterSystem,
    qlUser: UserReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

