import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./action.type";

// todo app
export const addTodo = (payload) =>({
    type:ADD_TODO,
    payload
});

export const update = (payload) =>({
    type:UPDATE_TODO,
    payload
})

export const remove = (payload) =>({
    type:DELETE_TODO,
    payload
})

export const toggle = (payload) =>({
    type:TOGGLE_TODO,
    payload
})