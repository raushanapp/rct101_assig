import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr ,Image} from "@chakra-ui/react";
import React from "react";

export const FormTable = ({data}) =>{
    //  console.log(data,":table")

    return (
     <Box key={data.id}> 
     
        <TableContainer>
            <Table size='md'>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Age</Th>
                    <Th >Salary</Th>
                    <Th >Marital Status</Th>
                    <Th >DepartMent</Th>
                    <Th >Address</Th>
                    <Th >Profile</Th>
                    <Th >Id</Th>
                </Tr>
                </Thead>
                {data.map((data)=>( <Tbody>
                <Tr>
                    <Td>{data.name}</Td>
                    <Td>{data.age}</Td>
                    <Td isNumeric>{data.salary}</Td>
                    <Td>{data.marital}</Td>
                    <Td>{data.department}</Td>
                    <Td >{data.address}</Td>
                    <Td>{data.id}</Td>
                    <Td>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src={data.imageUrl}
                        alt='Dan Abramov'
                    />
                    </Td>
                </Tr>
                </Tbody>))}
            </Table>
        </TableContainer>
     </Box>
    )
}