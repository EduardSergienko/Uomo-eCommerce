import { Link } from 'react-router-dom';
import styles from './BlogDropdown.module.scss';
export default function BlogDropdown() {
  return (
    <div className={styles.dropdownOverlay}>
      <ul>
        <li>
          <Link to="blog/all">All Posts</Link>
        </li>
        <li>
          <Link to="blog/company">Company</Link>
        </li>
        <li>
          <Link to="blog/fashion"> Fashion</Link>
        </li>
        <li>
          <Link to="blog/style">StylePosts</Link>
        </li>
        <li>
          <Link to="blog/trends">Trends</Link>
        </li>
      </ul>
    </div>
  );
}
