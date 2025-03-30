import React from 'react';
import SideNav from '../components/SideNav';
import { Box, Typography } from '@mui/material';

const Reservations = () => (
  <Box sx={{ display: 'flex' }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
      <Typography variant="h4">Room Reservations</Typography>
      
    </Box>
  </Box>
);

export default Reservations;
