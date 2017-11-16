import { todosReducer } from "./todo/todo.reducers";
import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";

export const AppReducer: ActionReducerMap<AppState> = {
    todos: todosReducer
}