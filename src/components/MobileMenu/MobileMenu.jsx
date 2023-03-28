import { useState } from 'react';
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
import LogInForm from 'components/LogInForm/LogInForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
export default function MobileMenu({ toggleMenu }) {
  const [activeMenu, setActiveMenu] = useState('navigation');
  const [isLogedIn, setIsLogedIn] = useState(false);

  function handleActiveMenuChange(menu) {
    setActiveMenu(menu);
  }
  function auth(status) {
    setIsLogedIn(status);
  }

  return (
    <div className={styles.mobileMenuWrap}>
      <Container>
        {activeMenu !== 'shop' &&
          activeMenu !== 'logIn' &&
          activeMenu !== 'registration' && (
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

        {activeMenu === 'navigation' && (
          <SiteNav
            handleActiveMenuChange={handleActiveMenuChange}
            menuToggle={toggleMenu}
          />
        )}
        {activeMenu === 'pages' && (
          <SubNav handleActiveMenuChange={handleActiveMenuChange} />
        )}
        {activeMenu === 'shop' && <ShopNav menuToggle={toggleMenu} />}
        {activeMenu === 'logIn' && (
          <SideBarMenu>
            <LogInForm
              handleActiveMenuChange={handleActiveMenuChange}
              menuToggle={toggleMenu}
              auth={auth}
            />
          </SideBarMenu>
        )}
        {activeMenu === 'registration' && (
          <SideBarMenu>
            <RegisterForm
              handleActiveMenuChange={handleActiveMenuChange}
              menuToggle={toggleMenu}
            />
          </SideBarMenu>
        )}
      </Container>
      {activeMenu !== 'shop' && (
        <div className={styles.bottomNav}>
          <Container>
            {!isLogedIn ? (
              <>
                <button
                  onClick={() => setActiveMenu('logIn')}
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
            <SocialLinks />
          </Container>
        </div>
      )}
    </div>
  );
}
