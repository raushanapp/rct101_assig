
import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3030/products").then((r)=>r.json()).then((d)=>{
            console.log(d)
            setData(d)
        })
    },[])
  return (
    <Box>Products
        <Box>
          <TableContainer>
            <Table variant='simple'>
        <Thead>
        <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Moredetails</Th>
        </Tr>
       </Thead>
       {data.map((e)=>(
              
              <Tbody key={e.id}>
               <Tr>
                  <Td>{e.name}</Td>
                  <Td>{e.price}</Td>
                  <Td >
                     <Link to={`/Products/${e.id}`}>details</Link>
                  </Td>
              </Tr>
              </Tbody>
             ))}
       
   
     </Table>
     {/* <Outlet/> */}

    </TableContainer>
        <Outlet/>
        </Box>
    </Box>
  )
}

export default Products