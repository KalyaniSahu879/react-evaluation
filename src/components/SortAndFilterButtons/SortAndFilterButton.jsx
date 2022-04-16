import { Button } from '@mui/material';
import React from 'react'

const SortAndFilterButton = ({handlesort}) => {
    return (
        <div className="sortButtons" style={{display:"flex",justifyContent:"space-around",margin:"10px"}}>
        <Button variant="contained">Add Country</Button>
        <Button variant="contained">Add City</Button>
        <Button variant="contained" >FilterByCountry</Button>
        <Button variant="contained" onClick={()=>handlesort({parameter:"population",value:1})}>Sort by Asce</Button>
        <Button variant="contained" onClick={()=>handlesort({parameter:"city",value:-1})}>Sort by Desc</Button>
        <Button variant="contained">Delete a city</Button>
        </div>
      );
}

export default SortAndFilterButton