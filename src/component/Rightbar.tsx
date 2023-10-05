import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Box, Button, Icon, Stack, Typography, styled} from '@mui/material';
import stock_one from "../assets/Rectangle 990.png"
import minus from "../assets/minus-square.png"
import plus from "../assets/plus-square.png"
import img_stack_one from "../assets/Rectangle 998.png"
import img_stack_two from "../assets/Rectangle 997.png"
import img_stack_three from "../assets/Rectangle 994.png"
import img_stack_four from "../assets/Rectangle 995.png"
import img_stack_five from "../assets/Rectangle 996.png"







const ButtonRemove = styled(Button)(({theme})=>({
  backgroundColor: "#FF8E8E",
  font: "12px",
  fontFamily: "lato",
  fontWeight: "700",
  width: "188px", 
  height: "31px", 
  marginTop:"15px",
  borderRadius: theme.shape.borderRadius,
  color: "#fff"
  
}));

const Rightbar = () => {
  return (
    
    <Box p={1.5} flexDirection={"column"} marginTop="0px" boxShadow={1} minHeight={100} sx={{display:{xs:"none", md: "flex"}}} width="25%">
       <Stack direction="row" justifyContent="space-between" width="100%" marginTop="35px" marginBottom="30px" alignItems="center" height="40px">
        <Typography>Cart Items</Typography>
        <Icon sx={{width: "35px", height: "50px", display: "flex", alignItems: "center", marginRight: "5px"}}>
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
        </Icon>
       </Stack>
       <Box sx={{width: "337px", height: "124px", padding:"5px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 4px 4px rgba(103, 159, 210, 0.24)", marginRight:  "20px"}}>
          <img src={stock_one} alt={stock_one} />
          <Box>
            <Typography fontSize="15px" fontWeight= "lato">Colourful Ankara Fabrics...</Typography>
            <Box sx={{display: "flex", justifyContent: "space-between",  marginTop:"15px"}}>
                <img src={minus} alt={minus} />
                <Typography component='span'>2</Typography>
                <img src={plus} alt={plus} />
            </Box>
            <ButtonRemove>Remove Items</ButtonRemove>
         
          </Box>
          
       </Box>
       <Button sx={{backgroundColor: "#679FD2", color: "#fff", width: "337px", height: "45px", fontSize: "12px", fontWeight: "lato", margin: "25px 0px"}}>Proceed to checkout</Button>
       <Box display="flex" marginTop="20px">
        <Typography sx={{marginRight: "55px", fontSize: "14px", marginBottom: "10px"}}>Stay up to date with our advert  here</Typography>
        <Typography component="span">3/5</Typography>
       </Box>
       <Box sx={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", position: "relative", padding: "5px"}}>
    
          <img src={img_stack_one} alt={img_stack_one} width="262px" height="84px"/>
          <div style={{position: "absolute", top: "50px"}}>
             <img src={img_stack_two} alt={img_stack_two} width="307px" height="84px" />
          </div>
          <div style={{position: "absolute", top: "110px", zIndex: "9"}}>
              <img src={img_stack_three} alt={img_stack_three} width="337px" height="84px" />
          </div>
          <div style={{position: "absolute", top: "175px", zIndex: "5"}}>
              <img src={img_stack_four} alt={img_stack_four} width="307px" height="84px" />
          </div>
          <div style={{position: "absolute", top: "220px", zIndex: "2"}}>
              <img src={img_stack_five} alt={img_stack_five} width="262px" height="84px" />
          </div>
       
       </Box>
    </Box>
  )
}

export default Rightbar

