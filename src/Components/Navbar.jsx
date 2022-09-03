import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom';
// import { logo } from '../Utils/Constants'
import SearchBar from './SearchBar';
import logo from '../Utils/Youtube-logo.jpg'
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="centre"
      p={2}
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'centre' }}>
        <img src={logo} alt="youtube-logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar