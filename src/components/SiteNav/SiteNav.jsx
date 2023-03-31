import { Link, NavLink } from 'react-router-dom';
import styles from './SiteNav.module.scss';
import Dropdown from 'rc-dropdown';
import PageDropdown from 'components/Dropdown/PageDropdown/PageDropdown';
import BlogDropdown from 'components/Dropdown/BlogDropdown/BlogDropdown';
import 'rc-dropdown/assets/index.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function SiteNav({ handleActiveMenuChange, menuToggle }) {
  const isActive = ({ isActive }) =>
    isActive ? styles.active : styles.siteNavLink;

  return (
    <nav className={styles.siteNav}>
      <ul className={styles.siteNavList}>
        <li>
          <NavLink onClick={menuToggle} className={isActive} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleActiveMenuChange('shop')}
            className={isActive}
            to="/shop"
          >
            SHOP
            <MdOutlineKeyboardArrowRight
              className={styles.siteNavLinkSvg}
              size={20}
            />
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/collection">
            COLLECTION
          </NavLink>
        </li>

        <Dropdown animation="slide-up" overlay={<BlogDropdown />}>
          <li>
            <NavLink className={isActive} to="/blog">
              JOURNAL
            </NavLink>
          </li>
        </Dropdown>
        <li>
          <NavLink className={isActive} to="/lookbook">
            LOOKBOOK
          </NavLink>
        </li>
        <Dropdown animation="slide-up" overlay={<PageDropdown />}>
          <li>
            <Link
              onClick={() => handleActiveMenuChange('pages')}
              className={styles.siteNavLink}
            >
              PAGES
              <MdOutlineKeyboardArrowRight
                className={styles.siteNavLinkSvg}
                size={20}
              />
            </Link>
          </li>
        </Dropdown>
      </ul>
    </nav>
  );
}
