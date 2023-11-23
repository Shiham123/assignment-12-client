import { Outlet } from 'react-router-dom';
import Navbar from '../Section/NavbarSection/Navbar';
import Footer from '../Section/FooterSection/footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
