import React from 'react'
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Nav = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>        
    </div>
  )
}

export default Nav