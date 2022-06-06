
import { Box,  Button,  FormLabel,  Input, InputGroup,  InputLeftElement, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {BsFillCreditCard2FrontFill, BsPerson} from "react-icons/bs"
export const Card = () =>{

    return (
        <Box display='flex' border='1px solid' borderColor ='#FC8181' w='30%'
         m='auto'
         justifyContent='center'
         flexDirection='column'
         p='15px'
         mt='15px'
         borderRadius='15px'
          
        >
            <Text>Payment details</Text>
            {/* <form action="">
              <FormControl>
              <InputGroup>
                 <FormLabel>CardHolder Name</FormLabel>
                 
                 <InputLeftElement
                 pointerEvents='none'
                 children={<BsPerson color="tomato" />}
                />
                <Input type='text' />
                </InputGroup>    
              </FormControl>
            </form> */}
            <Stack spacing={0}>
            <FormLabel>Card Holder Name</FormLabel>
            <InputGroup>
                <InputLeftElement
                 pointerEvents='none'
                 children={<BsPerson color="tomato" />}
                />
                <Input type='text' borderTop='none' borderLeft='none' borderRight='none'  borderColor='tomato' borderRadius='none'/>
            </InputGroup>
            <FormLabel>Card Number</FormLabel>
            <InputGroup>
                <InputLeftElement
                 pointerEvents='none'
                 children={<BsFillCreditCard2FrontFill color="tomato" />}
                />
                <Input type='number' borderTop='none' borderLeft='none' borderRight='none'  borderColor='tomato' borderRadius='none'/>
            </InputGroup>
            <FormLabel>Card Expiry</FormLabel>
            <InputGroup>
                <InputLeftElement
                 pointerEvents='none'
                 children={<BsFillCreditCard2FrontFill color="tomato" />}
                />
                <Input type='month' borderTop='none' borderLeft='none' borderRight='none'  borderColor='tomato' borderRadius='none' size='10px'
                  p='-15px'
                />
               {/* <FormLabel>CVC</FormLabel> */}

               <span>
            {/* <FormLabel>CVC</FormLabel> */}

               <Input type='password'  placeholder="CVC" borderTop='none' borderLeft='none' borderRight='none'  borderColor='tomato' borderRadius='none' size='10px'
                  
                />
               </span>

            </InputGroup>
              <Text>Payment amount :<span textColor='red'>12000P</span></Text>
            </Stack>

            <Button colorScheme='pink' size='lg' mt='15px' w='35%' ml='125px'>Pay</Button>

        </Box>
    )
}