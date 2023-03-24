import { Link } from 'react-router-dom';
import styles from './MenCategories.module.scss';

export default function MenCategories() {
  return (
    <ul className={styles.menCategoriesList}>
      <Link className={styles.categoryLink}>New</Link>
      <Link className={styles.categoryLink}>Jackets & Coats</Link>
      <Link className={styles.categoryLink}>Jeans</Link>
      <Link className={styles.categoryLink}>T-shirts</Link>
      <Link className={styles.categoryLink}>Shoes</Link>
    </ul>
  );
}
