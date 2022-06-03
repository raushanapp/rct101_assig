import { Box, Button, Checkbox, FormControl,  Input, Select, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

export const FormsDetails = ({sendDataServer}) =>{
    const [isForm,setIsForm] = useState({});

    const handleChangeForms = (e) =>{
        let {type,name,value,checked} =e.target
        console.log("C:",checked)
        if(type==="checkbox") {
            setIsForm({
                ...isForm,
                [name]:checked
            })
        }
        else {
            setIsForm({
                ...isForm,
                [name]:value
            })
        }
        // setIsForm("");

    };
    const handleSubmitForms =(e) =>{
        e.preventDefault()
        // console.log(e)
        // console.log(isForm)
        sendDataServer(isForm)
    }

    return (
        <Box display="flex" border='1px solid' 
         borderColor='RGBA(0, 0, 0, 0.24)' w='28%' 
          m='auto' justifyItems='center'
          p={4}
          mt='10px'
          borderRadius='10px'
        >  
          <form action="" onSubmit={handleSubmitForms}>
            <FormControl isInvalid={false}>
               <Input type="text" placeholder="Name" size='sm'
                onChange={handleChangeForms}name='name' value={isForm.name} />
               <Input type="number" placeholder="Age" size='sm'mt='8px'
                name='age' value={isForm.age} onChange={handleChangeForms}
               />
               <Input type="text" placeholder="Address" size='sm' mt='8px' 
                  name='address' value={isForm.address} onChange={handleChangeForms}
                />
               <Select id='depart' placeholder="Department" name='department' mt='8px'
                 value={isForm.department} onChange={handleChangeForms}
               >
                 <option value='It'>It Field</option>
                 <option value='Me'>Mechanical Field</option>
                 <option value='Cv'>Civil Field</option>
                 <option value='Ee'>Electrical Field</option>
               </Select>
               <Input type="number" placeholder="Salary" size='sm' mt='8px' name='salary' value={isForm.salary} onChange={handleChangeForms}/>
               <Stack spacing={[1, 5]} direction={['column', 'row']} mt='5px'>
                 <Checkbox size='md' colorScheme='green' name='marital' value="unmarried"  checked={isForm.marital} onChange={handleChangeForms}>Un Married</Checkbox>
                 <Checkbox size='md' colorScheme='green' name='marital' vaule='married' checked={isForm.marital} onChange={handleChangeForms}>Married  </Checkbox>
               </Stack>
               <Input type="url" placeholder="ImgUrl" size='sm' mt='8px' name="imageUrl" value={isForm.Url}
                  onChange={handleChangeForms}
               />
               <Button type="submit" colorScheme='blue' mt='15px'>Submit</Button>

            </FormControl>
            </form> 
        </Box>
    )
}