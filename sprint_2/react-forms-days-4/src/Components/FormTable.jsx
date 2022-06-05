import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr ,Image, Button, Select} from "@chakra-ui/react";
import React from "react";

export const FormTable = ({data,remove,sortBySalary}) =>{
    //  console.log(data,":table")

    return (
     <Box key={data.id}  gap='15px'> 
        
        <Box w='30%' ml='20px' mt='25px' display='flex'  gap={6}>
        <Select placeholder='Sort by salary' size='md' onChange={sortBySalary} >
            <option value='low'>Low to High</option>
            <option value='high'>High to Low</option>
        </Select>
        <Select placeholder='Filter by Department' size='md'   onChange={sortBySalary} >
           {/* <option value=''>All Profile</option> */}
            <option value='it'>Computer Science</option>
            <option value='Me'>Mechanical</option>
            <option value='Ee'>Electrical</option>
            <option value='Cv'>Civil</option>
        </Select>
        </Box>
     
        <TableContainer mt='70px'>
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
                    <Th >Delete</Th>

                </Tr>
                </Thead>
                {data.map((d)=>( <Tbody key={d.id}>
                <Tr>
                    <Td>{d.name}</Td>
                    <Td>{d.age}</Td>
                    <Td isNumeric>{d.salary}</Td>
                    <Td>{d.marital}</Td>
                    <Td>{d.department}</Td>
                    <Td >{d.address}</Td>
                    <Td>
                    <Image
                        borderRadius='full'
                        boxSize='60px'
                        src={d.imageUrl}
                        alt='Dan Abramov'
                    />
                    </Td>
                    <Td>
                        <Button onClick={()=>remove(d.id)} colorScheme='blue'>remove</Button>
                    </Td>
                </Tr>
                </Tbody>))}
            </Table>
        </TableContainer>
     </Box>
    )
}