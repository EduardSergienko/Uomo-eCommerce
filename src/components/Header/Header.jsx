import Container from '../Container/Container';
import SiteNav from 'components/SiteNav/SiteNav';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import SideModal from 'components/SideModal/SideModal';
import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import { BsSearch } from 'react-icons/bs';
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
  const handleMenuOpen = () => {
    setIsModalOpen(!isModalOpen);
    handleActiveMenuChange('login');
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navWrap}>
          <img src={logo} alt="logo" />
          <SiteNav />
          <ul className={styles.userMenu}>
            <li className={styles.userMenuItem}>
              <BsSearch size={20} />
            </li>
            <Link onClick={handleMenuOpen} className={styles.userMenuItem}>
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
