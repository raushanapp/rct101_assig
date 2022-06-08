

import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/action";
import{v4 as uuid} from "uuid"
export const TodoInput = () =>{
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const sendData = () =>{
        
        dispatch(addTodo({
            title:text,
            status:false,
            id:uuid()
        }))
    }
    
    return (
        <Box display='flex'
         justifyContent="space-around"
         w="30%"
         m='auto'
         gap='10px'
         border='2px solid'
         borderColor='teal'
         alignItems='center'
         p='10px'
         mt='35px'
         borderRadius='15px'
        >
            <Input placeholder="add todo" name='todo' type='text'
             value={text}  onChange={(e)=>setText(e.target.value)}
             size='sm'
            />
            <Button colorScheme="teal" onClick={sendData}>Add todo</Button>
        </Box>
    )

}