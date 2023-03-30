import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './SiteNav.module.scss';
import DropDown from 'components/Dropdown/Dropdown';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function SiteNav({ handleActiveMenuChange, menuToggle }) {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [activeDropdwon, setActiveDropdwon] = useState(null);
  console.log(isDropdownShowing);
  console.log(activeDropdwon);
  const handleLinkHover = name => {
    setActiveDropdwon(name);
    setIsDropdownShowing(true);
  };
  const handleLinkLoseHover = () => {
    setActiveDropdwon(null);
    setIsDropdownShowing(false);
  };

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

        <li
          onMouseEnter={() => handleLinkHover('blog')}
          onMouseLeave={handleLinkLoseHover}
        >
          <NavLink className={isActive} to="/journal">
            JOURNAL
          </NavLink>
          {isDropdownShowing && activeDropdwon === 'blog' && (
            <DropDown onMouseEnter={setIsDropdownShowing} dropMenu="blog" />
          )}
        </li>

        <li>
          <NavLink className={isActive} to="/lookbook">
            LOOKBOOK
          </NavLink>
        </li>
        <li
          onMouseEnter={() => handleLinkHover('pages')}
          onMouseLeave={handleLinkLoseHover}
        >
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
          {isDropdownShowing && activeDropdwon === 'pages' && (
            <DropDown onMouseEnter={setIsDropdownShowing} dropMenu="pages" />
          )}
        </li>
      </ul>
    </nav>
  );
}
