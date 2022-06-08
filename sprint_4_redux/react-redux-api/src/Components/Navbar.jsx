

import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>{

    return (
        <Box display='flex' justifyContent='space-around'
          border='2px solid'
          borderColor ='teal'
        >
           <Link to='/'>TodoInput</Link>
           <Link to='/todoitems'>TodoItems</Link>
        </Box>
    )
}