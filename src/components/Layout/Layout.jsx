import Header from '../Header/Header';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Provider from 'components/Context/provider';
export default function Layout() {
  const mobileWidth = useMediaQuery('(max-width:1279px)');
  return (
    <>
      <Provider>{!mobileWidth ? <Header /> : <MobileHeader />}</Provider>
      <Outlet />
      <Footer />
    </>
  );
}
