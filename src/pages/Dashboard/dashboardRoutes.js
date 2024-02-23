import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {
    Alljobs,
    Stats,
    Profile,
    Addjob,
    SharedDashboardLayout,
  } from './index';
import ProtectedRoutes from '../ProtectedRoutes';


const DashboardRoutes = () => {
  return (
    <Routes>
    <Route
      path='/'
      element={
        <ProtectedRoutes>
          <SharedDashboardLayout />
        </ProtectedRoutes>
      }
    >
      <Route index element={<Stats />} />
      <Route path='all-jobs' element={<Alljobs />} />
      <Route path='add-job' element={<Addjob />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  </Routes>
  )
}

export default DashboardRoutes
