

import { Box, List, ListItem} from '@mui/material'
import {useState} from "react"
import { motion } from "framer-motion";
import  "../App.css"
import { SidebarData } from './Data/SidebarData'
import logo from "../assets/Group 33690.png"
import {Link} from "react-router-dom"
import logout from "../assets/logout.png"


// Sidebar

const Sidebar = () => {
   const [selected, setSelected] = useState(0);

  const [expanded] = useState(true)
  const sidebarVariants = {
   true: {
     left : '0'
   },
   false:{
     left : '-60%'
   }
 }
 console.log(window.innerWidth)
  return (
    <Box 
       width="18%"
      boxShadow={1}
      minHeight="100vh"
      
    >
      <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=968?`${expanded}`:''}
      >
    <Box sx={{ width: "100%"}}>
    <div style={{marginTop: "-25px", marginBottom: "65px", marginLeft: "30px"}}>
            <img src={logo} alt={logo} />
    </div>
     
       {SidebarData.map((item, index) => {
          return (

            <List sx={{width: "100%"}}>
               
            <ListItem disablePadding sx={{width: "100%"}}>
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
                  <Link to={item.path}>
                  <div  className={selected === index ? "test active" : "test"}>
                     <item.icon />
                      <span> {item.heading}</span>
                    
                    
                   </div >
                     </Link>
                  
               
            </div>
            </ListItem>
            </List>
          );
        })}
          
          <List>
    <ListItem disablePadding sx={{width: "100%"}}>
      
         <div className='menuItem'>
          <div className='test logout'>
             <img src={logout} alt={logout} />
             <span>Logout</span>
          </div>
          </div>
          
       
    </ListItem>
    </List>   
   
     
    </Box>
    </motion.div>
    </Box>
  )
}

export default Sidebar