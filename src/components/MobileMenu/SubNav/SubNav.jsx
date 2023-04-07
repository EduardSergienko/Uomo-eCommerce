import { Link } from 'react-router-dom';
import styles from './SubNav.module.scss';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
export default function SubNav({ toggleMenu, handleActiveMenuChange }) {
  return (
    <div>
      <Link
        className={styles.boBackLink}
        onClick={() => handleActiveMenuChange('navigation')}
      >
        <MdOutlineKeyboardArrowLeft />
        PAGES
      </Link>
      <ul className={styles.subNavLinks}>
        <Link onClick={toggleMenu} to="about">
          About
        </Link>
        <Link>Contact Us</Link>
        <Link>Store Locator</Link>
        <Link onClick={toggleMenu} to="faq">
          FAQ
        </Link>
        <Link>Coming Soon</Link>
      </ul>
    </div>
  );
}
