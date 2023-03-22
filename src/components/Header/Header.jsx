import Container from '../Container/Container';
import SiteNav from 'components/SiteNav/SiteNav';
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
          <img src={logo} alt="logo" />
          <SiteNav />
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
