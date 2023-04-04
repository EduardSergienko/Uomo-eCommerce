import { useState } from 'react';
import { MainContext } from './context';

export default function Provider({ children }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleActiveMenuChange = menu => {
    setActiveMenu(menu);
  };

  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  const providerValue = {
    activeMenu,
    isLoggedIn,
    handleActiveMenuChange,
    logIn,
    logOut,
  };

  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
}
