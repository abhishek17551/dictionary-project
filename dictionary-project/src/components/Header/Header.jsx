import React from 'react'
import './Header.css'
import { MenuItem, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Header = () => {
  const theme = createTheme({
    palette: {
      primary : {
        main : '#fff',
      },
      type : 'dark'
    },
  });
  return (
    <div className='header'>
        <span className='title'>Word Hunt</span>
        <div className='inputs'>
          <ThemeProvider theme={theme}>
            <TextField id='standard-basic' label='Standard'/>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              helperText="Please select your country"
            >
              
                <MenuItem >
                  English
                </MenuItem>
             
            </TextField>
          </ThemeProvider>
        </div>
    </div>
  )
}

export default Header