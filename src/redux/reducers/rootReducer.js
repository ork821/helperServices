import {combineReducers} from "redux";
import {todos} from './todos.reducer'
import {passwords} from "./password.reducer";

export default combineReducers({
    todos,
    passwords

})