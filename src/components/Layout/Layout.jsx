import Header from '../Header/Header';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  // const mobileWidth = width < 768;
  const desktopWidth = width > 1409;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {desktopWidth ? <Header /> : <MobileHeader />}

      <Outlet />
    </>
  );
}
