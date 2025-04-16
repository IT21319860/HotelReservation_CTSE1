// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import RoomInventory from './pages/RoomInventory';
// import Reservations from './pages/Reservations';
// import Users from './pages/UserManagement';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/inventory" element={<RoomInventory />} />
//         <Route path="/reservations" element={<Reservations />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RoomInventory from './pages/RoomInventory';
import Reservations from './pages/Reservations';
import Users from './pages/UserManagement';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard routes with shared SideNav layout */}
        <Route
          path="/dashboard"
          element={<Layout><Dashboard /></Layout>}
        />
        <Route
          path="/inventory"
          element={<Layout><RoomInventory /></Layout>}
        />
        <Route
          path="/reservations"
          element={<Layout><Reservations /></Layout>}
        />
        <Route
          path="/users"
          element={<Layout><Users /></Layout>}
        />
      </Routes>
    </Router>
  );
}

export default App;
