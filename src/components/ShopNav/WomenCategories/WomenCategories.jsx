import { Link } from 'react-router-dom';
import styles from './WomenCategories.module.scss';

export default function WomenCategories() {
  return (
    <ul className={styles.womenCategoriesList}>
      <Link className={styles.categoryLink}>New</Link>
      <Link className={styles.categoryLink}>Jackets & Coats</Link>
      <Link className={styles.categoryLink}>Jeans</Link>
      <Link className={styles.categoryLink}>Dresses</Link>
      <Link className={styles.categoryLink}>T-shirts & Tops</Link>
      <Link className={styles.categoryLink}>Overshirts</Link>
      <Link className={styles.categoryLink}>Shoes</Link>
    </ul>
  );
}
