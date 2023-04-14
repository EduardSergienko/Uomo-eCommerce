import { useMainContext } from 'components/Context/context';
import Container from 'components/Container/Container';
import SubNav from './SubNav/SubNav';
import SiteNav from 'components/SiteNav/SiteNav';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import styles from './MobileMenu.module.scss';
import { BsSearch } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { ReactComponent as VscAccount } from '../../img/svg/002-user.svg';
import { Link } from 'react-router-dom';
import ShopNav from '../ShopNav/ShopNav';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';

export default function MobileMenu({ toggleMenu }) {
  const { activeMenu, isLoggedIn, handleActiveMenuChange } = useMainContext();

  return (
    <div className={styles.mobileMenuWrap}>
      {activeMenu !== 'shop' &&
        activeMenu !== 'login' &&
        activeMenu !== 'register' && (
          <form className={styles.mobileMenuForm}>
            <input
              placeholder="Search products..."
              className={styles.mobileMenuInput}
              type="text"
            />
            <button className={styles.mobileMenuSearchBtn}>
              <BsSearch />
            </button>
          </form>
        )}
      <div style={{ overflow: 'scroll' }}>
        <Container>
          {activeMenu === 'navigation' && <SiteNav menuToggle={toggleMenu} />}
          {activeMenu === 'pages' && (
            <SubNav
              toggleMenu={toggleMenu}
              handleActiveMenuChange={handleActiveMenuChange}
            />
          )}
          {activeMenu === 'shop' && <ShopNav menuToggle={toggleMenu} />}
          {activeMenu === 'login' && (
            <SideBarMenu
              handleActiveMenuChange={handleActiveMenuChange}
              menuToRender={activeMenu}
            />
          )}
          {activeMenu === 'register' && (
            <SideBarMenu
              handleActiveMenuChange={handleActiveMenuChange}
              menuToRender={activeMenu}
            />
          )}
        </Container>
      </div>

      <div className={styles.bottomNav}>
        <Container>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => handleActiveMenuChange('login')}
                className={styles.logInBtn}
              >
                <p>LogIn</p>
                <CiLogin />
              </button>
            </>
          ) : (
            <>
              <Link className={styles.mobileAccLink}>
                <VscAccount />
                <p>MY ACCOUNT</p>
              </Link>
            </>
          )}
          <SocialLinks isVertical={false} />
        </Container>
      </div>
    </div>
  );
}
