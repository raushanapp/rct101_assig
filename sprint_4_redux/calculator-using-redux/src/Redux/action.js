
import { COUNTER_ADD,COUNTER_SUB,COUNTER_MULTI,COUNTER_DIV } from "./actionType";

export const add = (payload) =>({

    type:COUNTER_ADD,
    payload
});

export const sub = (payload) =>({
    type:COUNTER_SUB,
    payload
})

export const multi = (payload) =>({
    type:COUNTER_MULTI,
    payload
})

export const div = (payload) =>({
    type:COUNTER_DIV,
    payload
})