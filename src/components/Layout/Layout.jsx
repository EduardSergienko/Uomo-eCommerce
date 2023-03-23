import Header from '../Header/Header';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
export default function Layout() {
  const mobileWidth = useMediaQuery('(max-width:1409px)');
  return (
    <>
      {!mobileWidth ? <Header /> : <MobileHeader />}
      <Outlet />
    </>
  );
}
