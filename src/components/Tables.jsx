import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Tables = () => {
   var[user,setUser]=useState([])
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setUser(response.data);
        console.log(user);
    })
    .catch(err=>{console.log(err)})
   })
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Blogid</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.title}</TableCell>
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tables