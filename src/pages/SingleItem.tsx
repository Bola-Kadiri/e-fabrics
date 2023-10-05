
import {ArrowBackSharp} from '@mui/icons-material';
import single_img from "../assets/unsplash_5rsNohd8bY8.png"
import { Box, Button, Typography, styled, Modal} from '@mui/material';

import { useState } from 'react'


const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(103, 159, 210, 0.5)",
    backdropFilter: "blur(5px)"
})



const SingleItem = () => {
    const [open, setOpen] = useState(false);
  return (
    <div style={{display: "flex", justifyContent:"center", width:"100%"}}>
        <div style={{width:"97%", display: "flex", flexDirection:"column", alignItems:"center"}}>
           <Box  sx={{display:"flex", marginTo:"20px", marginBottom:"30px", width:"100%"}}>
               <ArrowBackSharp/>
               <p style={{marginLeft: "10px"}}>Colourful Ankara Fabrics</p>
           </Box>
           <Box sx={{height: "576px", width:"100%", borderRadius:"8px",boxShadow: "0px 4px 20px 10px rgba(0, 0, 0, 0.05)", padding:"10px", display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
           <img src={single_img} alt={single_img} width="781.04px" height="333px"/>
           <Box sx={{width:"100%"}}>
           <Typography margin="10px 0px">Description</Typography>
           <Typography fontFamily={"Inter"} color="#888888" fontSize="12px" fontWeight="400px">Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics 
                       and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and 
                       more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more 
                       Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara 
                       Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics 
                       and more...
           </Typography>
           </Box>
           <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0px"}}>
              <Button sx={{width: "360px", height: "57px", backgroundColor:"red"}}>Share</Button>
              <Button sx={{width: "360px", height: "57px", backgroundColor: "#679FD2"}} onClick={()=>setOpen(true)}>Add to cart</Button>
              <StyledModal
               open={open}
               onClose={()=>setOpen(false)}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
              >
               <Box width="765px" height="646px" bgcolor= {"#fff"} borderRadius="10px">
                    hello
               </Box>
               </StyledModal>
              </Box>
           </Box>
        </div>
       
    </div>
  )
}

export default SingleItem