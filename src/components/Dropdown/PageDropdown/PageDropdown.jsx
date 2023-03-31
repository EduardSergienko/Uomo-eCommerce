import { Link } from 'react-router-dom';
import styles from './PageDropdown.module.scss';
export default function PageDropdown() {
  return (
    <div className={styles.dropdownOverlay}>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contacts">Contact Us</Link>
        </li>
        <li>
          <Link to="store_locations">Store Locator</Link>
        </li>
        <li>
          <Link to="faq">FAQ</Link>
        </li>
        <li>
          <Link>Coming Soon</Link>
        </li>
      </ul>
    </div>
  );
}
