import React from 'react';
import SideNav from '../components/SideNav';
import { Box, Typography } from '@mui/material';

const RoomInventory = () => (
  <Box sx={{ display: 'flex' }}>
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
      <Typography variant="h4">Room Inventory</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Content for room inventory goes here.
      </Typography>
    </Box>
  </Box>
);

export default RoomInventory;
