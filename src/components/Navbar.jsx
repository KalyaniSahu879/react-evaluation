import { Button } from '@mui/material'
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Button variant="contained" >Add Country</Button>
        <Button variant="contained">Add City</Button>
        <Button variant="contained">Filter by city</Button>
        <Button variant="contained">Sort by Asce</Button>
        <Button variant="contained">Sort by Desc</Button>
        <Button variant="contained">Delete a city</Button>
    </div>
  )
}

export default Navbar;