import React from 'react';
import SideNav from '../components/SideNav';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
        <Typography variant="h4">Welcome to Hotel Admin Dashboard</Typography>
        {/* <Typography variant="body1" sx={{ mt: 2 }}>
          Use the sidebar to navigate through room inventory, reservations, and user management.
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
