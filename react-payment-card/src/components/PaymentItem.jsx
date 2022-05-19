import React from "react";
import{Box,Image,Button,Text, Heading} from "@chakra-ui/react"
import { ArrowForwardIcon} from "@chakra-ui/icons";
// import{Icon} from "@chakra-ui/react"
export const PaymentItem = ({data}) =>{
  let back;
  if (data.desktop==="Desktop - Mobile") {
      //  back = "bg"
      back = "#fbc02d"
  }
  else {
      back = "#eeeeee"
  }

    return (
      // <Flex  justifyContent="space-between">
          <Box bg= {back} w="50%"  gap="15px" p = {4} color ="black" display="flex" justifyContent="space-around" m="auto"mt="5px" >
         <Box textAlign="justify"  >
            <Text>{data.date}</Text>
            <Button bg="black" color= "white" mt="10px">{data.btn}</Button>
            <Heading mt="10px">{data.gift}</Heading>
            <Heading mt="10px">{data.pay}</Heading>
            <Text mt="10px">{data.desktop}</Text>
         </Box>
         <Box display="flex" flexDirection="column" >
         <Image  boxSize = "50px" src={data.logo}   />
          <ArrowForwardIcon mt="120px" fontSize='35px' fontWeight="blod"/>
         </Box>
       </Box>
      // </Flex>
    )
}