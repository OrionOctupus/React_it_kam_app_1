import { createStore, combineReducers } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navPageReducer from "./navPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navPage: navPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;