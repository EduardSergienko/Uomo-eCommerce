import { useState } from 'react';
import { MainContext } from './context';

export default function Provider({ children }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const handleActiveMenuChange = menu => {
    setActiveMenu(menu);
  };

  const logIn = () => {
    setIsLogedIn(true);
  };
  const logOut = () => {
    setIsLogedIn(false);
  };

  const providerValue = {
    activeMenu,
    isLogedIn,
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
