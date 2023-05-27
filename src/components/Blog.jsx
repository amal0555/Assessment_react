import { Button, TextField } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <h1>Blog name<TextField/></h1>
        <h1>Description<TextField/></h1>
        <h1>Author<TextField/></h1>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Blog