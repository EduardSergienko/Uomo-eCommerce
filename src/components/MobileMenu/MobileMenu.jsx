import { useState } from 'react';
import Container from 'components/Container/Container';
import SubNav from './SubNav/SubNav';
import SiteNav from 'components/SiteNav/SiteNav';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import styles from './MobileMenu.module.scss';
import { BsSearch } from 'react-icons/bs';
import { ReactComponent as VscAccount } from '../../img/svg/002-user.svg';
import { Link } from 'react-router-dom';
export default function MobileMenu({ toggleMenu }) {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  return (
    <div className={styles.mobileMenuWrap}>
      <>
        <Container>
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
          {isSubNavOpen ? (
            <SubNav subNavToggle={toggleSubNav} />
          ) : (
            <SiteNav subNavToggle={toggleSubNav} menuToggle={toggleMenu} />
          )}
        </Container>
      </>
      <div className={styles.bottomNav}>
        <Container>
          <Link className={styles.mobileAccLink}>
            <VscAccount />
            <p>MY ACCOUNT</p>
          </Link>
          <SocialLinks />
        </Container>
      </div>
    </div>
  );
}
