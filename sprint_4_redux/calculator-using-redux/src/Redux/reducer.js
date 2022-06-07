
import { COUNTER_ADD,COUNTER_SUB,COUNTER_MULTI,COUNTER_DIV,} from "./actionType";

const initState ={
    count :0,
    x:2
}

export const reducer = (state=initState,{type,payload})=>{
    console.log(payload)
    console.log("c:",state.count)
    switch(type){
        case COUNTER_ADD :{
            return {
                ...state,
                // count :state.count + payload,
                // console.log(count)
                count:state.count +state.x +payload 
            }
        }
        case COUNTER_SUB :{
            
            return {
                ...state,
                // count :state.count - payload,
                // // x:state.count - state.x
                count:state.count -state.x-payload
                // res
            }
        } 
        case COUNTER_MULTI :{
            return {
                ...state,
                // count :state.count - payload,
                count:state.count*state.x*payload
            }
        } 
        case COUNTER_DIV :{
            return {
                ...state,
                // count :state.count - payload,
                count:Math.floor((state.count/payload)/state.x)
            }
        } 
        default :{
            return state
        }
    }


}