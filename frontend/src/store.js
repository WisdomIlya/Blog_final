import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	userReducer,
	usersReducer,
	postsReducer,
	postReducer,
	appReducer,
} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	posts: postsReducer,
	post: postReducer,
	app: appReducer
});


export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
