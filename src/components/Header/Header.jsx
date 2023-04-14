import Container from '../Container/Container';
import SiteNav from 'components/SiteNav/SiteNav';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import SearchBar from 'components/SearchBar/SearchBar';
import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import { BsSearch } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { TfiBag } from 'react-icons/tfi';
import { RiMenu2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMainContext } from 'components/Context/context';
import { slide as Menu } from 'react-burger-menu';

export default function Header() {
  const { activeMenu, handleActiveMenuChange } = useMainContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isModalOpen]);
  const handleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleMenuOpen = menuName => {
    setIsModalOpen(!isModalOpen);
    handleActiveMenuChange(menuName);
  };

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.navWrap}>
            <img src={logo} alt="logo" />
            <SiteNav />
            <ul className={styles.userMenu}>
              <Link
                onClick={handleSearchBarOpen}
                className={styles.userMenuItem}
              >
                {isSearchBarOpen ? (
                  <CgClose size={20} />
                ) : (
                  <BsSearch size={20} />
                )}
              </Link>

              <Link
                onClick={() => handleMenuOpen('login')}
                className={styles.userMenuItem}
              >
                <VscAccount size={20} />
              </Link>
              <li className={styles.userMenuItem}>
                <MdOutlineFavoriteBorder size={20} />
              </li>
              <li className={styles.userMenuItem}>
                <TfiBag size={20} />
              </li>
              <li className={styles.userMenuItem}>
                <RiMenu2Fill size={20} />
              </li>
            </ul>
          </div>
        </Container>
        {isSearchBarOpen && <SearchBar searchBarToggle={handleSearchBarOpen} />}
      </header>
      <Menu
        customBurgerIcon={false}
        width={400}
        onClose={handleMenuOpen}
        isOpen={isModalOpen}
        right
      >
        <SideBarMenu
          handleActiveMenuChange={handleActiveMenuChange}
          menuToRender={activeMenu}
          onShowModal={handleMenuOpen}
        />
      </Menu>
    </>
  );
}
