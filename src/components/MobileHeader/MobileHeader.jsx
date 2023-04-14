import Container from 'components/Container/Container';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import styles from './MobileHeader.module.scss';
import Logo from '../../img/logo.png';
import { RiMenu2Fill } from 'react-icons/ri';
import { TfiBag } from 'react-icons/tfi';
import { CgClose } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { useMainContext } from 'components/Context/context';
export default function MobileHeader() {
  const { handleActiveMenuChange } = useMainContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    handleActiveMenuChange('navigation');
  };

  return (
    <>
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
      </header>
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </>
  );
}
