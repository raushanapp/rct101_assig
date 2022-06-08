import { ADD_TODO } from "./action.type";


export const reducerTodo = (state ={todos:[]},{type,payload}) =>{
     
    switch(type) {
        case ADD_TODO :{
            return {...state,
              todos :[
                  ...state.todos,
                  payload
              ]
            }
        }
        default :{
            return state
        }
    }

}