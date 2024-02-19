import { Outlet } from 'react-router-dom';
import { Navbar, BigSideNavbar, SmallSideNavbar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedDashboardLayout = ({ children }) => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <BigSideNavbar />
        <SmallSideNavbar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedDashboardLayout;
