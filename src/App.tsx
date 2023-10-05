import './App.css'

import { Box, Stack} from '@mui/material';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Product from './component/Product';
import Rightbar from './component/Rightbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SingleItem from './pages/SingleItem';

function App() {
   
  return (
   
      <Box>
        <BrowserRouter>

        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar/>
       
        <Stack flex={4}>
           <Navbar/>
           <Routes>
              <Route path="/" element={<Product/>}/>
              <Route path="/stock" element={<SingleItem/>}/>
           </Routes>
        </Stack>
       
          
           <Rightbar/>
        </Stack>
        </BrowserRouter>
      </Box>
    
  )
}

export default App
