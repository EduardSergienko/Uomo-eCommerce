import Container from 'components/Container/Container';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import styles from './MobileHeader.module.scss';
import Logo from '../../img/logo.png';
import { RiMenu2Fill } from 'react-icons/ri';
import { TfiBag } from 'react-icons/tfi';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrap}>
          <button
            onClick={toggleMenu}
            type="button"
            className={styles.openMenubtn}
          >
            {isMenuOpen ? <CgClose size={25} /> : <RiMenu2Fill size={25} />}
          </button>
          <img src={Logo} alt="" />
          <TfiBag size={25} />
        </div>
      </Container>
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </header>
  );
}
