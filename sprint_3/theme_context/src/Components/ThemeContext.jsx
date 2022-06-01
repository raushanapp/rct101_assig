
import {Box,Switch,Heading} from "@chakra-ui/react"
// import {Switch} from ""
import React, { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

export const ThemeToggle = () =>{
  const {isTheme,toggleTheme} =useContext(ThemeContext)
    return (
        <Box >
            <Heading>Toggle</Heading>
           <Switch id='isRequired' onChange={toggleTheme} isRequired={isTheme ? "dark":"ligth"}/>
        </Box>
    )
}