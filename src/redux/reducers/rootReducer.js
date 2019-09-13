import {combineReducers} from "redux";
import {todos} from './todos.reducer'
import {passwords} from "./password.reducer";
import {expenses} from "./expense.reducer";

export default combineReducers({
    todos,
    passwords,
    expenses

})