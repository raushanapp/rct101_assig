
import {legacy_createStore} from "redux"
import { reducerTodo } from "./reducer"


export const store = legacy_createStore(reducerTodo)