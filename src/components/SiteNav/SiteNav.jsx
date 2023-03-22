import { Link, NavLink } from 'react-router-dom';
import styles from './SiteNav.module.scss';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function SiteNav({ subNavToggle, menuToggle }) {
  return (
    <nav className={styles.siteNav}>
      <ul className={styles.siteNavList}>
        <NavLink
          onClick={menuToggle}
          className={({ isActive }) =>
            isActive ? styles.active : styles.siteNavLink
          }
          to="/"
        >
          HOME
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.siteNavLink
          }
          to="/shop"
        >
          SHOP
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.siteNavLink
          }
          to="/collection"
        >
          COLLECTION
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.siteNavLink
          }
          to="/journal"
        >
          JOURNAL
          <MdOutlineKeyboardArrowRight
            className={styles.siteNavLinkSvg}
            size={20}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.siteNavLink
          }
          to="/lookbook"
        >
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
