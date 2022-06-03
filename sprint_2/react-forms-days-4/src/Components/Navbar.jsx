
import { Box } from "@chakra-ui/react";
import React from "react"; 
import {Link} from "react-router-dom"

export const Navbar = () =>{


    return (
        <Box display='flex' border='1px solid'
          borderColor="#4299E1"
          justifyContent="space-around"
          w='45%'
          m='auto'
        >
            <Link to="/">All Profiles</Link>
            <Link to="/FormsDetails">Add Cradentcial</Link>
        </Box>
    )
}