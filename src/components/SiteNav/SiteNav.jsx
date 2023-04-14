import { Link, NavLink } from 'react-router-dom';
import styles from './SiteNav.module.scss';
import PageDropdown from 'components/Dropdown/PageDropdown/PageDropdown';
import BlogDropdown from 'components/Dropdown/BlogDropdown/BlogDropdown';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useMainContext } from 'components/Context/context';
export default function SiteNav({ menuToggle }) {
  const { handleActiveMenuChange } = useMainContext();
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
            to="/shop/all"
          >
            SHOP
            <MdOutlineKeyboardArrowRight
              className={styles.siteNavLinkSvg}
              size={20}
            />
          </NavLink>
        </li>
        <li>
          <NavLink onClick={menuToggle} className={isActive} to="/collection">
            COLLECTION
          </NavLink>
        </li>

        <li>
          <NavLink onClick={menuToggle} className={isActive} to="/blog">
            JOURNAL
          </NavLink>
          <BlogDropdown />
        </li>

        <li>
          <NavLink onClick={menuToggle} className={isActive} to="/lookbook">
            LOOKBOOK
          </NavLink>
        </li>

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
          <PageDropdown />
        </li>
      </ul>
    </nav>
  );
}
