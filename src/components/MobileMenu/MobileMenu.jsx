import { useState } from 'react';
import Container from 'components/Container/Container';
import SubNav from './SubNav/SubNav';
import SiteNav from 'components/SiteNav/SiteNav';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import styles from './MobileMenu.module.scss';
import { BsSearch } from 'react-icons/bs';
import { ReactComponent as VscAccount } from '../../img/svg/002-user.svg';
import { Link } from 'react-router-dom';
import ShopNav from '../ShopNav/ShopNav';
export default function MobileMenu({ toggleMenu }) {
  const [activeMenu, setActiveMenu] = useState('navigation');
  function handleMenuClick(menu) {
    setActiveMenu(menu);
  }

  return (
    <div className={styles.mobileMenuWrap}>
      <Container>
        {activeMenu !== 'shop' && (
          <form className={styles.mobileMenuForm}>
            <input
              placeholder="Search products..."
              className={styles.mobileMenuInput}
              type="text"
            />
            <button className={styles.mobileMenuSerchBtn}>
              <BsSearch />
            </button>
          </form>
        )}

        {activeMenu === 'navigation' ? (
          <SiteNav subNavToggle={handleMenuClick} menuToggle={toggleMenu} />
        ) : null}
        {activeMenu === 'pages' && <SubNav subNavToggle={handleMenuClick} />}
        {activeMenu === 'shop' && <ShopNav menuToggle={toggleMenu} />}
      </Container>
      {activeMenu !== 'shop' && (
        <div className={styles.bottomNav}>
          <Container>
            <Link className={styles.mobileAccLink}>
              <VscAccount />
              <p>MY ACCOUNT</p>
            </Link>
            <SocialLinks />
          </Container>
        </div>
      )}
    </div>
  );
}
