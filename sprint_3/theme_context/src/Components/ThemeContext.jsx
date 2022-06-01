
import {Box,Switch,Heading} from "@chakra-ui/react"
// import {Switch} from ""
import React from "react"

export const ThemeToggle = () =>{

    return (
        <Box >
            <Heading>Toggle</Heading>
           <Switch id='isRequired'/>
        </Box>
    )
}