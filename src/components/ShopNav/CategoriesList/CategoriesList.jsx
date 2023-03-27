import { Link } from 'react-router-dom';
import styles from './CategoriesList.module.scss';
export default function CategoriesList({ data }) {
  return (
    <ul className={styles.categoriesList}>
      {data.map(item => (
        <Link className={styles.categoryLink}>{item.name}</Link>
      ))}
    </ul>
  );
}
