import Container from '../Container/Container';
import SiteNav from 'components/SiteNav/SiteNav';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import SideModal from 'components/SideModal/SideModal';
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
import { useState } from 'react';
import { useMainContext } from 'components/Context/context';

export default function Header() {
  const { activeMenu, handleActiveMenuChange } = useMainContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleMenuOpen = menuName => {
    setIsModalOpen(!isModalOpen);
    handleActiveMenuChange(menuName);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navWrap}>
          <img src={logo} alt="logo" />
          <SiteNav />
          <ul className={styles.userMenu}>
            <Link onClick={handleSearchBarOpen} className={styles.userMenuItem}>
              {isSearchBarOpen ? <CgClose size={20} /> : <BsSearch size={20} />}
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
      {isModalOpen && (
        <SideModal onShowModal={handleMenuOpen}>
          <SideBarMenu
            onShowModal={handleMenuOpen}
            handleActiveMenuChange={handleActiveMenuChange}
            menuToRender={activeMenu}
          />
        </SideModal>
      )}
    </header>
  );
}
