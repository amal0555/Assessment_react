import { AppBar, Button, Toolbar, Typography } from '@mui/material'
//import { red } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{paddingTop:'150px'}}>
        <AppBar>
            <Toolbar>
                <Typography align='left'>DASHBOARD</Typography>
                <Button variant='contained'><Link to={'/'}> Home</Link></Button>
                <Button variant='contained'><Link to={'/Blog'}> Add Blog</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar