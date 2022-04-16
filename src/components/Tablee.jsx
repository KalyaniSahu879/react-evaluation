import React, {useState , useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import SortAndFilterButton from './SortAndFilterButtons/SortAndFilterButton';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
  
  

const Tablee = () => {
  const dummy = [
    {
      id:1,
      country:"India",
      city:"BBSR",
      population:1234,
      Edit:"edit",
      Delete:"Delete"
    },
    {
      id:2,
      country:"India",
      city:"BBSR",
      population:1234,
      Edit:"edit",
      Delete:"Delete"

    },
    {
      id:3,
      country:"India",
      city:"BBSR",
      population:1234,
      Edit:"edit",
      Delete:"Delete"

    },
    {
      id:4,
      country:"India",
      city:"BBSR",
      population:1234,
      Edit:"edit",
      Delete:"Delete"

    }
  ];

  const [rows , setRows] = useState(dummy);
  const [filter , setFilter] = useState({});

  const handlesort = (prop) =>{
    setFilter(prop);
  }
  console.log(filter);

  useEffect(()=>{
    axios.get("http://localhost:3001/country").then((res,rej)=>{
       const data = res.data;
       console.log(data);
       setRows(data)
    });
   
  },[]);

  return (
    <div>
        <SortAndFilterButton handlesort = {handlesort}/>
        <TableContainer >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="right">Country</StyledTableCell>
                    <StyledTableCell align="right">City</StyledTableCell>
                    <StyledTableCell align="right">Population</StyledTableCell>
                    <StyledTableCell align="right">Edit</StyledTableCell>
                    <StyledTableCell align="right">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {rows.sort((a,b)=>{
                    if(filter.parameter=='population' && filter.value==1){
                      // return a["city"].localeCompare(b['city'])
                      return a["population"] - b["population"];
                    }
                    else if(filter.parameter=='city' && filter.value== -1){
                      // return b["city"].localeCompare(a['city'])
                      return b["population"] - a["population"];
                    }
                  }).map((row) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                              {row.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.country}</StyledTableCell>
                       
                        <StyledTableCell align="right">{row.city}</StyledTableCell>
                        <StyledTableCell align="right">{row.population}</StyledTableCell>
                        <StyledTableCell align="right">{row.Edit}</StyledTableCell>
                        <StyledTableCell align="right">{row.Delete}</StyledTableCell>
                      </StyledTableRow>
          ))}
        </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tablee