import { Box, Stack, Typography, styled, Button, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import notify from "../assets/Notif.png"


const ButtonSearch = styled(Button)(({theme})=>({
    backgroundColor: "#2972B5",
    borderRadius: theme.shape.borderRadius,
    color: "#fff",
    width: "163px",
    height: "45px",
    background: "linear-gradient(90.91deg, #2972B5 0.28%, #90E0FC 111.21%), #C4C4C4;",
    
}));



const Navbar = () => {
  return (
    <Box width="100%">
       
            <Box sx={{display:{xs:"none", md: "block"}}}>
                <Stack marginTop="20px" marginBottom="0px"p={2} direction="row" justifyContent="space-between" alignItems="center" >
                   <Stack direction="row" alignItems="center">
                      <Typography  component='span' fontWeight={700} fontSize={15}>Good morning<Typography  component='span' fontSize={15} color="#679FD2" fontWeight={700}>  Johnson</Typography></Typography>
                   </Stack>
                   <Stack direction="row" gap={3} alignItems="center">
                   <img src={notify} alt={notify} />
                   <TextField sx={{width: "350px", outline: "none", border: "none", backgroundColor: "#E9E9E9"}}>
                   <Button variant="outlined" sx={{width: "350px", border:  "none", outline: "none"}} startIcon={<SearchIcon/>}>
                   </Button>
                   </TextField>
                    <ButtonSearch >Search</ButtonSearch>
                    </Stack>
                </Stack>
            </Box>
       
    </Box>
  )
}

export default Navbar