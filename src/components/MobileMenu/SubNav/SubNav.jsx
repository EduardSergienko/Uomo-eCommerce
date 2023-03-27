import { Link } from 'react-router-dom';
import styles from './SubNav.module.scss';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
export default function SubNav({ subNavToggle }) {
  return (
    <div>
      <Link
        className={styles.boBackLink}
        onClick={() => subNavToggle('navigation')}
      >
        <MdOutlineKeyboardArrowLeft />
        PAGES
      </Link>
      <ul className={styles.subNavLinks}>
        <Link>About</Link>
        <Link>Contact Us</Link>
        <Link>Store Locator</Link>
        <Link>FAQ</Link>
        <Link>Coming Soon</Link>
      </ul>
    </div>
  );
}