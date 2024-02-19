import { Route, Routes } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoutes } from './pages';
import {
  Alljobs,
  Stats,
  Profile,
  Addjob,
  SharedDashboardLayout,
} from './pages/Dashboard';

function App() {
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

      <Route path='landing' element={<Landing />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
