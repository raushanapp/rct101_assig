
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = ()=>{

    const {isAuthorized,login,logout} = useContext(AuthContext)
    return (
        <Box border='2px solid' borderColor='#bcaaa4' h='50px'  >
           <Flex minWidth='max-content' alignItems='center' gap='2' >
                <Box p='2'>
                    <Heading size='md'>Auth Context</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='blue' >Sign Up</Button>
                    <Button colorScheme='blue' onClick={()=>{
                        if(isAuthorized) logout()
                        else login("R","s")
                    }}>{isAuthorized ? "Logout":"Login"}</Button>
                </ButtonGroup>
            </Flex>
        </Box>
    )
}