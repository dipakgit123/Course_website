import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Box, Button} from "@mui/material"
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Tabs = styled(NavLink)`
margin-right:20px;
font-size :18px;
text-decoration:none;
color: white;
`

const Navnbar = () => {
  return (
    <div>
      <AppBar position="static">
      <Toolbar>
   <Tabs to="/">Home</Tabs>
   <Tabs to="/about">AboutUs</Tabs>
   <Tabs to="/alluser">AllUser</Tabs>
   <Tabs to="/ttp">Ttp</Tabs>
   <Tabs to="/manage">Management</Tabs>
   <Tabs to="/micro">Microsoft</Tabs>
   <Box sx={{ flexGrow: 1 }}  /> 
   <Tabs to="/signup" >
    <Button variant="outlined" color='black'>SignUp</Button>
   </Tabs>
   <Tabs to="/login" >
    <Button variant="outlined" color='black'>Login</Button>
   </Tabs>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navnbar;
