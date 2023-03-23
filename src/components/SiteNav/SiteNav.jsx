import { Link, NavLink } from 'react-router-dom';
import styles from './SiteNav.module.scss';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function SiteNav({ subNavToggle, menuToggle }) {
  const isActive = ({ isActive }) =>
    isActive ? styles.active : styles.siteNavLink;

  return (
    <nav className={styles.siteNav}>
      <ul className={styles.siteNavList}>
        <NavLink onClick={menuToggle} className={isActive} to="/">
          HOME
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink className={isActive} to="/shop">
          SHOP
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink className={isActive} to="/collection">
          COLLECTION
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink className={isActive} to="/journal">
          JOURNAL
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink className={isActive} to="/lookbook">
          LOOKBOOK
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <Link onClick={subNavToggle} className={styles.siteNavLink}>
          PAGES
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </Link>
      </ul>
    </nav>
  );
}
