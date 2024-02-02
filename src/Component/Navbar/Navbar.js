import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { red } from '@mui/material/colors';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, color:"red",backgroundColor:"red"}} >
      <AppBar position="fixed"  sx={{ mr: 0, width:"100%",marginBottom:"100px", backgroundColor:"white",}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="blue"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"black" ,textAlign:"start", fontSize:"Bold", marginRight:"15px",fontWeight:"bold"}}>
          Free Payslip Generator <br /> 
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1, color:"blue" ,textAlign:"end", fontSize:"Bold", marginRight:"15px",fontWeight:"bold"}}>
            Check out Zoho Payroll
          </Typography>
          <Button  sx={{color:"white", backgroundColor:"red"}}>SIGN UP. IT'S FREE!</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
