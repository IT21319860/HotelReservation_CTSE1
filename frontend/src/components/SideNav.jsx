import React from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Divider,
} from '@mui/material';
import { Dashboard, Hotel, CalendarMonth, People, Logout, Book } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();

  const menu = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
    { text: 'Room Inventory', icon: <Hotel />, path: '/inventory' },
    { text: 'Room Reservations', icon: <CalendarMonth />, path: '/reservations' },
    { text: 'Reserved Rooms', icon: <Book />, path: '/reserved-rooms' },
    { text: 'User Management', icon: <People />, path: '/users' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('user'); 
    navigate('/');
  };

  return (
    <Drawer variant="permanent" sx={{ width: 240, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {menu.map((item) => (
            <ListItem button key={item.text} onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box>
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon><Logout /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNav;
