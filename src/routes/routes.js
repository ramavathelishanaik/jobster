import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Landing, Register, Error } from '../pages';
import DashboardRoutes from '../pages/Dashboard/dashboardRoutes';


const Approutes = () => {
  return (
    <Routes>
     
      <Route path='/' element={<DashboardRoutes />} />
      <Route path='landing' element={<Landing />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default Approutes;
