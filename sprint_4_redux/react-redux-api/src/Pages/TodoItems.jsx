
import { Box, Button, Table,  TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const TodoItems = ()=>{
    const todos = useSelector((state)=>state.todos)
    console.log(todos)
    return (
        <Box display='flex' 
          border='2px solid'
          borderColor='teal'
          borderRadius='15px'
          m='auto'
          w='40%'
          mt='20px'
          p='10px'
          justifyContent='space-around'
          justifyItems='center'
        >
            <TableContainer mt='25px'>
              <Table variant='simple' size='md'>
                    <Thead>
                    <Tr>
                        <Th>Task</Th>
                        <Th>Status</Th>
                        <Th>Edit</Th>
                        <Th>Remove</Th>
                    </Tr>
                    </Thead>
                   {todos.map((e)=>(
                        <Tbody>
                        <Tr>
                            <Td>{e.title}</Td>
                            <Td>
                                <Button colorScheme='teal'>{e.status ? "True" :"False"}</Button>
                            </Td>
                            <Td>
                                <Button colorScheme='teal'>Update</Button>
                            </Td>
                            <Td>
                                <Button colorScheme='teal'>Delete</Button>
                            </Td>
                        </Tr>
                        </Tbody>
                   ))}
                </Table>
            </TableContainer>
        </Box>
    )
}