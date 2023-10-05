import { Box, Stack, Typography, CardMedia,  Card, Button, styled} from '@mui/material';
import distribute from "../assets/Group 33716.png"
import order from "../assets/Group 33717.png"
import refer from "../assets/Group 33718.png"
import stock_one from "../assets/unsplash_QK_VtGYQV_U.png"
import group_pics from "../assets/Group 778.png"
import love from "../assets/love.png"
import love_2 from "../assets/love-2.png"

import stock_3 from "../assets/stock-3.png"
import stock_2 from "../assets/stock-2.png"
import stock_4 from "../assets/stock-4.png"
import stock_5 from "../assets/stock-5.png"
import stock_6 from "../assets/stock-6.png"

const ButtonAdd=styled(Button)({
   width: "221px",
   height: "46px",
   color: "#679FD2", 
   borderRadius: "5px",
   fontFamily: "Inter",
   fontSize:"14px",
   fontWeight: "900",
   textTransform: "capitalize"

});

const TypographyCard =styled(Typography)({
   color: "#679FD2",
   marginTop: "10px",
   fontFamily: "inter",
   fontWeight: "700",
   fontSize: "20px"
})






const Product = () => {
  return (
    <Box width= "100%">
       <Stack   p={2} sx={{display:{sm:"flex"}, flexDirection:{sm: "column", md: "row"}, justifyContent:{sm: "center", md:"space-between"},  alignItems:{sm:"center"}}}>
          <Box boxShadow="0px 4px 10px 0px #679FD24F" borderRadius="8px" width="250px" height="124px" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{marginBottom:{sm:"10px", md:"0px"}}}>
             <img src={distribute} alt={distribute} />
             <TypographyCard variant="h6">Distributions</TypographyCard>
          </Box>
          <Box boxShadow="0px 4px 10px 0px #679FD24F" borderRadius="8px" width="250px" height="124px" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{marginBottom:{sm:"10px", md:"0px"}}}>
             <img src={order} alt={order} />
             <TypographyCard variant="h6">Orders</TypographyCard>
          </Box>
          <Box boxShadow="0px 4px 10px 0px #679FD24F" borderRadius="8px" width="250px" height="124px" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{marginBottom:{sm:"10px", md:"0px"}, width:{sm:"90%", md:"250px"}}}>
             <img src={refer} alt={refer} />
             <TypographyCard variant="h6">Connect with Stylists</TypographyCard>
          </Box>
       </Stack>
       <Box p={2}>
          <Typography m="20px 0px">Latest Trends in stock</Typography>
          <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="space-between" alignItems="center">
          <Card sx={{ width: "240px", height: "307px", boxShadow: "0px 15px 30px 0px #00000033", borderRadius:"5px", position: "relative"}}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="165px"
            width="240px"
            image={stock_one}
            sx={{backgroundColor: " #EAEAEA"}}
      />
     <Box display="flex" justifyContent="space-between" p={1}>
         <Typography fontFamily="Lato" fontWeight="900" fontSize={14} lineHeight="20.54px" color="#252F40">Thick Vintage</Typography>
         <Typography fontFamily="Raleway" fontWeight={600} fontSize={12}>N3400</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" p={1}>
         <img src={group_pics} alt={group_pics} />
         <Typography fontFamily="inter" color="#838383" fontSize="13px"  fontWeight={500} lineHeight="19.15px">40 units in stock</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
         <ButtonAdd variant='outlined'>Add to cart</ButtonAdd>
      </Box>
      <Box position="absolute" top="10px" right="10px">
         <img src={love} alt={love} />
      </Box>
      
    </Card>
    <Card sx={{ width: "240px", height: "307px", boxShadow: "0px 15px 30px 0px #00000033", borderRadius:"5px",  position: "relative"}}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="165px"
            width= "240px"
            image={stock_2}
            sx={{backgroundColor: " #EAEAEA"}}
      />
      <Box display="flex" justifyContent="space-between" p={1}>
         <Typography fontFamily="lato" fontWeight={700} fontSize={14} lineHeight="20.54px">Thick Vintage</Typography>
         <Typography fontFamily="Raleway" fontWeight={600} fontSize={12}>N3400</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" p={1}>
         <img src={group_pics} alt={group_pics} />
         <Typography fontFamily="inter" color="#838383" fontSize="13px"  fontWeight={500} lineHeight="19.15px">40 units in stock</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
         <ButtonAdd variant='outlined'>Add to cart</ButtonAdd>
      </Box>
      <Box position="absolute" top="10px" right="10px">
         <img src={love} alt={love} />
      </Box>
    </Card>
    <Card sx={{ width: "240px", height: "307px", boxShadow: "0px 15px 30px 0px #00000033", borderRadius:"5px",  position: "relative"  }}>
            <CardMedia
            component="img"
            alt="green iguana"
            width= "240px"
            height="165px"
            image={stock_3}
            sx={{backgroundColor: " #EAEAEA"}}
      />
      <Box display="flex" justifyContent="space-between" p={1}>
         <Typography fontFamily="lato" fontWeight={700} fontSize={14} lineHeight="20.54px">Thick Vintage</Typography>
         <Typography fontFamily="Raleway" fontWeight={600} fontSize={12}>N3400</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" p={1}>
         <img src={group_pics} alt={group_pics} />
         <Typography fontFamily="inter" color="#838383" fontSize="13px"  fontWeight={500} lineHeight="19.15px">40 units in stock</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
         <ButtonAdd variant='outlined'>Add to cart</ButtonAdd>
      </Box>
      <Box position="absolute" top="10px" right="10px">
         <img src={love} alt={love} />
      </Box>
    </Card>
    <Card sx={{ width: "240px", height: "307px", boxShadow: "0px 15px 30px 0px #00000033", borderRadius:"5px", position: "relative"  }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="165px"
            width= "240px"
            image={stock_4}
            sx={{backgroundColor: " #EAEAEA"}}
      />
      <Box display="flex" justifyContent="space-between" p={1}>
         <Typography fontFamily="lato" fontWeight={700} fontSize={14} lineHeight="20.54px">Thick Vintage</Typography>
         <Typography fontFamily="Raleway" fontWeight={600} fontSize={12}>N3400</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" p={1}>
         <img src={group_pics} alt={group_pics} />
         <Typography fontFamily="inter" color="#838383" fontSize="13px"  fontWeight={500} lineHeight="19.15px">40 units in stock</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
         <ButtonAdd variant='outlined'>Add to cart</ButtonAdd>
      </Box>
      <Box position="absolute" top="10px" right="10px">
         <img src={love_2} alt={love_2} />
      </Box>
    </Card>
    <Card sx={{ width: "240px", height: "307px", boxShadow: "0px 15px 30px 0px #00000033", borderRadius:"5px", position: "relative"  }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="165px"
            width= "240px"
            image={stock_5}
            sx={{backgroundColor: " #EAEAEA"}}
      />
     <Box display="flex" justifyContent="space-between" p={1}>
         <Typography fontFamily="lato" fontWeight={700} fontSize={14} lineHeight="20.54px">Thick Vintage</Typography>
         <Typography fontFamily="Raleway" fontWeight={600} fontSize={12}>N3400</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" p={1}>
         <img src={group_pics} alt={group_pics} />
         <Typography fontFamily="inter" color="#838383" fontSize="13px"  fontWeight={500} lineHeight="19.15px">40 units in stock</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
         <ButtonAdd variant='outlined'>Add to cart</ButtonAdd>
      </Box>
      <Box position="absolute" top="10px" right="10px">
         <img src={love_2} alt={love_2} />
      </Box>
    </Card>
    <Card sx={{ width: "240px", height: "307px", boxShadow: "0px 15px 30px 0px #00000033", borderRadius:"5px", position: "relative" }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="165px"
            width= "240px"
            image={stock_6}
            sx={{backgroundColor: " #EAEAEA"}}
      />
     <Box display="flex" justifyContent="space-between" p={1}>
         <Typography fontFamily="lato" fontWeight={700} fontSize={14} lineHeight="20.54px">Thick Vintage</Typography>
         <Typography fontFamily="Raleway" fontWeight={600} fontSize={12}>N3400</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" p={1}>
         <img src={group_pics} alt={group_pics} />
         <Typography fontFamily="inter" color="#838383" fontSize="13px"  fontWeight={500} lineHeight="19.15px">40 units in stock</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
         <ButtonAdd variant='outlined'>Add to cart</ButtonAdd>
      </Box>
      <Box position="absolute" top="10px" right="10px">
         <img src={love_2} alt={love_2} />
      </Box>
    </Card>
          </Stack>
       </Box>
      
    </Box>
  )
}

export default Product