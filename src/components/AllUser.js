import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, getSingleUser, getUser } from '../services/api';

const StyledTable = styled(Table)`
  width:90%;
  margin:50px 0 0 50px;
  border:1px solid black
`
const THead = styled(TableRow)`
&>th{
  font-size:20px;
  background:#000000;
  color:#ffffff;
 
}
`

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}


const AllUser = () => {

const [users,setUsers] = useState([]);
const [open, setOpen] = useState(false);





const handleOpen = async(id) => { 
  let response =  await getSingleUser(id)
  // console.log(response.data)
  setOpen(response.data)
}

useEffect(()=>{
  GetUserDetails() ;
  // handleOpen()
},[]);




const handleClose = () => setOpen(false);




  const GetUserDetails = async() =>{
      let response = await getUser();
      // console.log(response)
      setUsers(response.data);
    
  }

  const deleteUserData = async(id) =>{

    await deleteUser(id)
    GetUserDetails()
  }

    

  return (
    <div>
      <StyledTable>
       <TableHead>
        <THead>
          <TableCell >Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>City</TableCell>
          <TableCell>Contact No</TableCell>
          <TableCell>Actions</TableCell>
        </THead>
       </TableHead>
       <TableBody>
        {
      users.map((user) => (
        <TableRow style={{backgroundColor:"#F5F5F5"}} >
          <TableCell >{user.firstname}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.city}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>
            <Button  onClick={() => handleOpen(user.id)} style={{marginLeft:"3px"}} ><VisibilityIcon></VisibilityIcon></Button>
       <Link to={`/edituser/${user.id}`} style={{marginLeft:"3px",marginTop:"2px"}} color='success' ><EditIcon></EditIcon></Link>
            <Button  style={{marginLeft:"3px"}} color='error' onClick={()=>deleteUserData(user.id)} ><DeleteIcon ></DeleteIcon></Button>
          </TableCell>
        </TableRow>
      ))}

       </TableBody>
      </StyledTable>


      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style1}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          All Details
          </Typography>
        <div>
          <p>Name:{open.firstname}</p>
          <p>Email:{open.email}</p>
          <p>Password:{open.password}</p>
          <p>City:{open.city}</p>
          <p>Contact No:{open.phone}</p>
          <p>Gender: {open.gender}</p>
          <p>Country:{open.country}</p>
          <p>where you heard about us:{`${open.social},`}</p>
          </div>

        
             
        </Box>
      </Modal>
    </div>
  )
}

export default AllUser
