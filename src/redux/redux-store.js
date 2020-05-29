import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navPageReducer from "./navPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navPage: navPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
});

// добавляем middleware (from lib Redux), что бы использовать thunk!

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;