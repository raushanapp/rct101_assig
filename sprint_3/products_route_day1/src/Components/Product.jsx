
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const[sow,setSow] =useState(false)
    const [show,setShow] =useState({})
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        if (id){
            fetch(` http://localhost:3030/products/${id}`).then((r)=>r.json()).then((d)=>{
                setShow(d)
                setSow(true)
            })
        }
        
       
    },[id])
  return (
    <Box> {sow ? (<Table>
        <Thead>
        <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Id</Th>
        </Tr>
       </Thead>
       <Tbody >
               <Tr>
                  <Td>{show.name}</Td>
                  <Td>{show.price}</Td>
                  <Td>
                      {show.id}
                  </Td>
              </Tr>
              </Tbody>
     </Table>      ) :(
        <Box>"Product does not exist"</Box>
    )}
        
    </Box>
  )
}

export default Product