import React from 'react'
import './Header.css'
import { MenuItem, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../../data/category';

const Header = ({category,setCategory,word,setWord}) => {
  const theme = createTheme({
    palette: {
      primary : {
        main : '#fff',
      },
      type : 'dark'
    },
  });

  const handleOptionChange = (language) => {
    setCategory(language)
    setWord('')
  }
  return (
    <div className='header'>
        <span className='title'>Word Hunt</span>
        <div className='inputs'>
          <ThemeProvider theme={theme}>
            <TextField 
              id='standard-basic' 
              label='Search for Word'
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <TextField
              id="outlined-select-currency"
              className='select'
              select
              label="Language"
              value={category}
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              {
                categories.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.value}
                  </MenuItem>
                ))
              }

             
            </TextField>
          </ThemeProvider>
        </div>
    </div>
  )
}

export default Header