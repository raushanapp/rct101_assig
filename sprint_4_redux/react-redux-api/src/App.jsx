import './App.css';
import { Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { TodoInput } from './Pages/TodoInput';
import { TodoItems } from './Pages/TodoItems';

function App() {
  return (
    <Box className="App">
        <Navbar/>
        <Routes>
          <Route path='' element ={<TodoInput/>} />
          <Route path='/todoitems' element ={<TodoItems/>}/>
        </Routes>
    </Box>
  );
}

export default App;
