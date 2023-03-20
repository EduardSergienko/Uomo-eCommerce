import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../img/logo.png';
import { BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { TfiBag } from 'react-icons/tfi';
import { RiMenu2Fill } from 'react-icons/ri';
export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navWrap}>
          <nav className={styles.siteNav}>
            <img src={logo} alt="logo" />
            <ul className={styles.siteNavList}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.siteNavLink
                }
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.siteNavLink
                }
                to="/shop"
              >
                SHOP
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.siteNavLink
                }
                to="/collection"
              >
                COLLECTION
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.siteNavLink
                }
                to="/journal"
              >
                JOURNAL
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.siteNavLink
                }
                to="/lookbook"
              >
                LOOKBOOK
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.siteNavLink
                }
                to="/pages"
              >
                PAGES
              </NavLink>
            </ul>
          </nav>
          <ul className={styles.userMenu}>
            <li className={styles.userMenuItem}>
              <BsSearch size={20} />
            </li>
            <li className={styles.userMenuItem}>
              <VscAccount size={20} />
            </li>
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
    </header>
  );
}
